# Boutique Couture

A simple e-commerce application designed as a hands-on learning platform for DevOps concepts and practices.

## Overview

This project provides a minimal yet functional shop application that serves as a practical foundation for exploring modern DevOps workflows. Students will deploy, automate, and monitor this application while learning industry-standard tools and methodologies.

## Learning Objectives

This project is designed to teach the following DevOps concepts:

| Topic | Description |
|-------|-------------|
| **Deployment** | Manual and automated deployment strategies |
| **CI/CD** | Building continuous integration and delivery pipelines |
| **Monitoring** | Application and infrastructure observability |
| **Alerting** | Setting up meaningful alerts and incident response |

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling

### Backend
- **Django 5** with Django REST Framework
- **SQLite** database (development)
- **uv** for Python dependency management

## Project Structure

```
boutique-couture/
├── frontend/          # React SPA
├── backend/           # Django REST API
│   └── core/          # Django project root
├── start-dev.sh       # Local development script
└── README.md
```

## Dev prerequisites

- **Node.js** >= 18.x
- **Python** >= 3.11
- **uv** (Python package manager)

## Documentation

- [Backend Deployment Guide](./backend/README.md) - Detailed instructions for deploying the backend and frontend to a VM

## License

This project is intended for educational purposes. 