# WebFudge — Premium Agency Website

A production-grade marketing website built with Next.js (App Router) and Strapi CMS.

## Project Structure

```
/
├── client/          # Next.js 14 frontend
├── server/          # Strapi CMS backend (coming soon)
└── README.md
```

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | Next.js 14 (App Router), JavaScript |
| Styling   | TailwindCSS                         |
| Animation | Framer Motion                       |
| Backend   | Strapi v4 (placeholder)             |

## Getting Started

### Client (Frontend)

```bash
cd client
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Server (Backend)

> Strapi backend will be initialized in a future phase. The `/server` directory is reserved for that setup.

## Design System

- **Primary Color:** `#D71EB9`
- **Font:** Inter (via Google Fonts)
- **Container:** `max-w-7xl mx-auto px-6 lg:px-8`
- **Section Padding:** `py-16 lg:py-28`

## Pages

| Route           | Description              |
|-----------------|--------------------------|
| `/`             | Home — assembled sections|
| `/about`        | About the agency         |
| `/services`     | Services offered         |
| `/case-studies` | Portfolio / case studies |
| `/pricing`      | Pricing plans            |
| `/contact`      | Contact form             |

## Component Architecture

```
components/
├── ui/          # Primitives: Button, Card, Heading, etc.
├── layout/      # Navbar, Footer, Grid, PageHeader
└── sections/    # Full-width page sections
```
