# Accomodations

**Kenyan Student & Young Professional Housing Finder**

A React-based web application that helps students and young professionals discover, compare, and choose suitable accommodation based on location, budget, property type, amenities, and lifestyle needs.

## Problem

Finding suitable, affordable accommodation near universities, workplaces, and transport routes is difficult because accommodation information is scattered and difficult to compare. Students and young professionals often spend hours visiting multiple websites and making phone calls just to understand what's available within their budget.

## Solution

Accomodations provides a centralized platform where users can:

- Browse verified property listings across Nairobi, Kiambu, and surrounding counties
- Filter by location, budget, property type, room type, and amenities
- Compare up to 4 properties side-by-side
- Calculate what they can afford based on their income
- Save favourite properties for quick reference
- Track recently viewed properties

## Features

### Property Discovery

- Search properties by name, location, or type
- Filter by location (Kasarani, Kilimani, Juja, Thika Road, etc.)
- Filter by property type (Apartment, Bedsitter, Studio, Townhouse, etc.)
- Filter by room type (Entire Unit, Single Room, Shared Room)
- Filter by budget range (minimum and maximum rent)
- Filter by amenities (WiFi, Parking, Security, etc.)
- Filter by furnished/unfurnished status
- Filter by availability status
- Sort by price, rating, or relevance

### Discovery Categories

Quick access to curated property collections:

- Near Campus (Juja, Kahawa, Kasarani)
- Near CBD (Kilimani, Westlands)
- Near Transport (Thika Road, Rongai)
- Budget Friendly (Under KES 20,000/mo)
- Student Housing
- Single Rooms
- Bedsitters
- One Bedroom
- Shared Accommodation

### Personalization

- **Favourites**: Save properties for later (stored locally)
- **Recently Viewed**: Track properties you've viewed (stored locally)
- **Profile Preferences**: Set preferred location, property type, and budget (stored locally)

### Property Comparison

Compare up to 4 properties side-by-side including:

- Rent and deposit
- Location and area
- Property type and room type
- Bedrooms and bathrooms
- Amenities
- Furnished status
- Availability
- Rating and reviews

### Affordability Calculator

"What Can I Afford?" tool that helps users understand their housing budget:

- Enter monthly income and maximum budget
- Select preferred area
- View properties within budget
- See recommended options (rent at or below 40% of income)
- Get warnings when budget exceeds 50% of income

### Authentication

Firebase Authentication with:

- Email/password registration and login
- Google sign-in
- Password reset
- Persistent authentication

## Technology

### Frontend Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Swiper.js** - Hero slider carousel
- **React Router v6** - Client-side routing
- **React Query** - Data fetching (TanStack Query)
- **Lucide React** - Icons
- **Firebase Authentication** - User authentication
- **Radix UI Primitives** - Accessible UI components (shadcn/ui)

### Architecture

```
Frontend (React + Vite + TypeScript)
   ↓
Firebase Authentication
   ↓
Local Application State (React Context)
   ↓
Local Storage (localStorage for persistence)
```

### Important Limitation

This is a frontend-only application. Property data is demonstration data and does not represent real-time listings. There is no backend database, API, or cloud storage. All user data (favourites, recently viewed, preferences) is stored locally in the browser and is not synced across devices.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

The app will be available at `http://localhost:8080`.

### Environment Variables

Create a `.env` file based on `.env.example`:

```sh
cp .env.example .env
```

Configure your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 8080 |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── auth/            # Authentication components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PropertyCard.tsx
│   └── ...
├── contexts/
│   ├── AuthContext.tsx           # Firebase auth state
│   ├── FavouritesContext.tsx     # Saved properties
│   ├── RecentlyViewedContext.tsx  # View history
│   ├── ComparisonContext.tsx      # Property comparison
│   └── ProfilePreferencesContext.tsx
├── data/
│   └── properties.ts    # Demo property data
├── hooks/
├── pages/
│   ├── Index.tsx        # Home page
│   ├── Properties.tsx   # Property listing + filters
│   ├── PropertyDetail.tsx
│   ├── Compare.tsx
│   ├── Affordability.tsx
│   ├── Profile.tsx
│   ├── Favourites.tsx
│   ├── RecentlyViewed.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── ForgotPassword.tsx
│   ├── Contact.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   └── NotFound.tsx
├── lib/
│   ├── firebase.ts      # Firebase configuration
│   └── utils.ts         # Utility functions
└── App.tsx
```

## Deployment

The application is configured for deployment on Vercel. Environment variables should be configured in the Vercel dashboard.

## Development Standards

This project follows [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code refactoring
- `docs:` Documentation
- `style:` Formatting, no code change
- `perf:` Performance improvements
- `test:` Adding tests

## License

This project is for demonstration purposes. Property data is fictional and does not represent real listings.

## Author

Daniel Kamweru
