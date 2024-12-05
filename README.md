# Movie Explorer

A responsive movie explorer web application built using React.js, TMDB API, DaisyUI, Tailwind CSS, and Firebase Authentication. This project allows users to search for movies, explore trending and popular movies, manage a personal watchlist, and view detailed movie information.

---

## Features

- **Search Movies**: Search for movies by title.
- **Trending and Popular Movies**: Browse lists of trending and popular movies on the homepage.
- **Movie Details**: View detailed information about a movie, including its poster, description, and release date.
- **Watchlist**: Add or remove movies from your watchlist.
- **User Authentication**: Secure user login and signup using Firebase Authentication.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Tech Stack

- **Frontend**: React.js, DaisyUI, Tailwind CSS
- **Backend**: Firebase (Authentication)
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Hosting**: Vercel Hosting

---

## Setup Instructions

### Prerequisites

- Node.js (v14+ recommended)
- Firebase account
- TMDB API key

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd movie-explorer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Deploy the application** (optional):
   If using Firebase Hosting, run:
   ```bash
   npm run build
   firebase deploy
   ```

---

## API Integration

This application uses the TMDB API for fetching movie data. Refer to the [TMDB API Documentation](https://developers.themoviedb.org/3/getting-started) for more details.

### API Endpoints Used

- **Trending Movies**: `/trending/movie/week`
- **Popular Movies**: `/movie/popular`
- **Search Movies**: `/search/movie`
- **Movie Details**: `/movie/{movie_id}`


---

## Challenges Faced

1. **API Rate Limits**: Ensured efficient data fetching to avoid exceeding TMDB API limits.
2. **Firebase Authentication**: Configured secure authentication flows for login and signup.
3. **Responsive Design**: Used Tailwind CSS to achieve a seamless user experience across devices.

---

## Future Enhancements

- Add movie trailers using the TMDB Videos API.
- Implement caching to reduce API calls.
- Enhance the watchlist with sorting and filtering capabilities.

---

## License

This project is licensed under the MIT License.

---

## Author

Vijay Kumar  
[Email](mailto:vijaykumar_23se170@dtu.ac.in) | [GitHub](https://github.com/vijaykr338)

```
