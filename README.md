# Personal Portfolio / Career Profile

My personal portfolio and career profile website.

Rather than focusing only on finished products, this website presents my activities and experiences across research, business, engineering, global experiences, and media.

## Overview

This website is designed to give a concise overview of who I am, what I have worked on, and what I am interested in.

### Research
- Research activities
- Academic conference presentations
- Research topics and achievements

### Business
- Business competitions
- Hackathons
- Awards and recognitions
- Projects and ideas

### Engineering
- Software and game development
- Web development
- AI / machine learning projects
- Other technical achievements

### Global
- Study abroad experience
- International activities
- Tutoring and cross-cultural experiences

### Media
- TV appearances
- Interviews
- Articles and other media coverage

## Features

- Responsive design
- Data-driven content management
- Project cards with images
- Multiple images per project
- External links for achievements and media
- Direct download links for completed games
- Automatically generated media thumbnails
- Mobile-friendly layout

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Vercel

## Project Structure

```text
src/
├── components/
│   ├── AboutSection.tsx
│   ├── ResearchSection.tsx
│   ├── BusinessSection.tsx
│   ├── EngineeringSection.tsx
│   ├── GlobalSection.tsx
│   └── MediaSection.tsx
│
├── data/
│   ├── profile.ts
│   ├── research.ts
│   ├── business.ts
│   ├── engineering.ts
│   ├── global.ts
│   └── media.ts
│
└── ...

scripts/
└── fetch-media-thumbnails.mjs

public/
├── games/
└── generated-media/
```
### Data-Driven Design

Most of the content is separated from the UI.

Adding or updating an achievement, project, conference presentation, media appearance, or global experience can be done by editing the corresponding data files rather than modifying the components themselves.

For example:
```
{
  year: "2026",
  title: "Project Title",
  description: "Project description",
  links: [
    {
      label: "Details",
      url: "https://example.com"
    }
  ]
}
```
This allows the website to grow as my activities and projects increase.

Media Thumbnails

Media thumbnails are automatically retrieved from the URLs registered in src/data/media.ts.

Running:

npm run fetch-media

fetches available OGP images and generates:

public/generated-media/
└── manifest.json

The production build also performs this step automatically.

Development

Install dependencies:

npm install

Start the development server:

npm run dev

Fetch media thumbnails manually:

npm run fetch-media

Build for production:

npm run build
Live Demo

View Portfolio

Purpose

This website serves as a central place to present my background, achievements, research, projects, and activities.

It is intended for people who want to learn more about my work beyond a traditional resume or business card.

Built with React + TypeScript + Vite.