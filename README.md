# TestingSimulatorApp

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** NestJS, Supabase (as database and authentication service)
- **Database:** Supabase Postgres
- **Deployment:** Vercel

## Features

- User authentication using Supabase Auth
- Real-time calculation of effective margin
- Persistent data storage with Supabase
- Responsive and user-friendly UI built with Next.js and Tailwind CSS

## Database Schema

The application uses a `margins` table in Supabase:

```sql
CREATE TABLE margins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  monthly_salary FLOAT NOT NULL,
  indirect_costs FLOAT NOT NULL,
  work_insurance FLOAT NOT NULL,
  health_insurance FLOAT NOT NULL,
  gym_allowance FLOAT NOT NULL,
  meal_allowance FLOAT NOT NULL,
  licenses_software FLOAT NOT NULL,
  customer_cost FLOAT NOT NULL,
  current_rate FLOAT NOT NULL,
  total_cost FLOAT NOT NULL,
  margin FLOAT NOT NULL,
  day_rate FLOAT NOT NULL,
  delta FLOAT NOT NULL,
  effective_margin FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Installation and Setup

### Prerequisites

- Node.js (v18+ recommended)
- Supabase account
- Vercel CLI (for deployment)

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   PORT=4000
   ```
4. Start the backend server:
   ```sh
   npm run start
   ```
   or
   ```sh
   cd ../
   npm run dev:api
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   cd ../
   npm run dev:web
   ```

## Deployment

1. Backend deployment link: (back-end-side-2qvxhgntv-buithanhlong1912s-projects.vercel.app)
2. Frontend deployment link: (front-end-side-theta.vercel.app)

## Contributing

Feel free to fork this repository, make your changes, and submit a pull request!
