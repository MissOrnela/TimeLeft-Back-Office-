## Technical stack

This app was built using npx create-next-app

- Next.js 16 (App Router)
- TypeScript
- React 19
- Shadcn UI (Table, Dialog, Buttons)

# Getting Started

## 1- Clone repository

You should first clone repository et jump into the cloned folder

```bash
git clone https://github.com/MissOrnela/TimeLeft-Back-Office-.git
cd TimeLeft-Back-Office-

```

## 2- Install Dependencies

```bash
npm install
```

## 3- Run server in development mode

```bash
npm run dev
```

## 4- Visualize

Open [http://localhost:3000/events](http://localhost:3000/events) with your browser to see the result.

## My point of view

I implement sorting by date and type, as well as filtering by status .
I decide to implement server-side sorting and filtering, as I believe it is more efficient for large data sets. This ensures consistency of results , as it does not depend on the power of the client application and reduces memory usage.

## Improvement

Perhaps add a search bar to make it easier to find events.
