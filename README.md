# LEBMOK25571_PTO2508_B_LEBOGANG_MOKOENA_DJS05

# DJS05: Show Detail Page with Routing and Navigation

## Project Overview

This project extends the DJS04 podcast browsing app with a dedicated **Show Detail page**, powered by client-side routing via `react-router-dom`. Users can click any podcast on the homepage to navigate to a unique URL (`/show/:id`) showing that podcast's full details — title, large cover image, description, genre tags, last-updated date, and a season navigation system for browsing episodes.

Filters, search terms, sort order, and pagination on the homepage are preserved automatically when the user navigates to a show and back, thanks to shared state living in `PodcastContext` above the router.

## Features

- **Dynamic routing** — `/` renders the homepage, `/show/:id` renders the detail page for a specific show, using `useParams` to read the ID from the URL.
- **Data fetching per route** — the homepage fetches the preview list once; the detail page fetches a single show's full data (including embedded seasons/episodes) whenever the route `id` changes.
- **Loading, error, and empty states** — both pages show a spinner while fetching, a friendly error message if the request fails, and a "show not found" message if the API returns nothing.
- **Show details** — title, large image, description, genre tags (resolved from genre IDs via a static lookup), and a human-readable last-updated date.
- **Season navigation** — an expandable "Current Season ▾" dropdown lets users switch between seasons without scrolling through all of them at once. Selecting a season updates the season summary (title, image, episode count) and its episode list below.
- **Episode list** — each episode shows its number, title, a thumbnail (the season's image), and a shortened version of its description.
- **State preservation** — search, genre filter, sort order, and current page are stored in `PodcastContext`, which wraps the router in `App.jsx`, so returning to the homepage restores exactly what the user had before.
- **Responsive design** — layouts adapt across mobile, tablet, and desktop using CSS Modules and media queries.
- **Code quality** — modular components, JSDoc comments throughout, and consistent formatting.

## Project Structure
src/
├── api/
│   ├── fetchPodcasts.js     # Fetch all podcast previews
│   └── fetchShow.js         # Fetch a single show's full details by ID
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── SortSelect.jsx
│   ├── GenreFilter.jsx
│   ├── GenreTags.jsx        # Reusable genre-ID → title tag renderer
│   ├── PodcastGrid.jsx
│   ├── PodcastCard.jsx      # Links to /show/:id
│   ├── Pagination.jsx
│   ├── SeasonNavigation.jsx # Season dropdown + episode list
│   ├── EpisodeCard.jsx
│   ├── Loading.jsx          # Reusable loading spinner
│   └── ErrorMessage.jsx     # Reusable error banner
├── context/
│   ├── podcastContext.js    # createContext() definition only
│   └── PodcastContext.jsx   # PodcastProvider component
├── pages/
│   ├── Home.jsx             # "/" — listing, search, filters, pagination
│   └── ShowDetail.jsx       # "/show/:id" — full show details + seasons
├── utils/
│   └── formatDate.js
├── data.js                  # Static genre ID → title mapping + sort options
├── App.jsx                  # Routes definition
└── main.jsx                 # Entry point, wraps App in <BrowserRouter>
