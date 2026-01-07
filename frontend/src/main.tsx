import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.tsx'
import { ProductsContextProvider } from './contexts/ProductsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <ProductsContextProvider>
    <App />
    </ProductsContextProvider>
  </StrictMode>,
)
