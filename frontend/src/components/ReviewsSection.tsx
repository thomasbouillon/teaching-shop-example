import { useEffect, useState } from "react";
import { fetchReviews, Review } from "../api/reviews";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  if (reviews.length === 0) return null;

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Avis clients</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-lg bg-white p-4 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  {review.author}
                </span>
                <span className="text-yellow-500">
                  {"*".repeat(review.rating)}
                  {".".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
