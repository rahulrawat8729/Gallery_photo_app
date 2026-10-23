# Photo Gallery Web App

A simple, responsive photo gallery built with **React**, **Vite**, and
**Tailwind CSS**. It loads photos from the Picsum Photos API and lets
users search by author and save favourite photos.

## Features

-   Loads 30 photos from the Picsum Photos API.
-   Shows a loading spinner while photos load.
-   Shows an error message if photos cannot be loaded.
-   Responsive grid: 1 column on mobile, 2 on tablets, and 4 on larger
    screens.
-   Search photos by author name as you type.
-   Add or remove favourites with the heart button.
-   Saves favourites in `localStorage`, so they stay saved after
    refreshing.
-   Uses a custom `useFetchPhotos` hook to fetch photos.
-   Uses `useReducer` to manage favourites.
-   Uses `useCallback` and `useMemo` for the search and filtering logic.

## Tech Stack

-   React
-   Vite
-   Tailwind CSS
-   JavaScript
-   Picsum Photos API

## Getting Started

### Requirements

Install Node.js and npm if you do not already have them.

### 1. Install dependencies

Open a terminal in the project folder and run:

``` bash
npm install
```

### 2. Start the development server

``` bash
npm run dev
```

Open the local URL shown in the terminal. It is usually
`http://localhost:5173/`.

## API Used

The app fetches photo details from:

`https://picsum.photos/v2/list?limit=30`

Photo images are also loaded from Picsum Photos.

## Project Structure

``` text
src/
├── components/
│   ├── Gallery.jsx
│   └── PhotoCard.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── App.jsx
├── main.jsx
└── index.css
```

## How It Works

-   **Fetching photos:** `useFetchPhotos` gets the photo data and tracks
    loading and error states.
-   **Searching:** The search box filters photos by author name without
    making another API request.
-   **Favourites:** `useReducer` adds or removes photo IDs from the
    favourites list.
-   **Saving favourites:** The app stores favourite IDs in
    `localStorage` and loads them when the app starts.
-   **Performance:** `useCallback` keeps the search handler function
    from being recreated on every render. `useMemo` reuses the filtered
    list when its inputs have not changed.

## Future Improvements

-   Add a separate view for favourite photos.
-   Add pagination or a load-more button.
-   Add a retry button for fetch errors.

## Author

Created as a React photo gallery project.
