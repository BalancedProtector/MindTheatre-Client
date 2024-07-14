# MindTheatre

MindTheatre is a web application designed to offer users an immersive experience in exploring and engaging with a curated collection of movies. Built with React and styled with SCSS, it provides a sleek, responsive interface for movie enthusiasts.

## Features

- Browse a collection of movies
- View detailed information about each movie
- Responsive design for desktop and mobile devices

## Technologies Used

- React.js
- React Bootstrap
- SCSS

## Dependencies

Ensure you have Node.js and npm installed before setting up the project.

- react: ^17.0.2 (Replace with your version)
- react-dom: ^17.0.2
- react-bootstrap: ^1.6.1
- sass: ^1.32.8

## Installation

Clone the repository and install the dependencies:

## Features

- User authentication with a login system.
- Navigation to different views based on the user's authentication status.
- Dynamic routing to movie details (`/movies/:movieId`) and the main movie list (`/`).
- A logout feature that clears the user session and tokens.

## Technologies Used

- React.js for the frontend.
- React Router for managing navigation and routes within the application.
- React Bootstrap and SCSS for styling.
- (Add any backend technologies or APIs used)

## User Flow

Upon visiting the application, users are directed to the login page if they are not logged in. Once authenticated, users can:

- View a list of movies on the main page.
- Click on a movie to see detailed information on a separate page.
- Logout at any time, which clears their session and returns them to the login page.

## Running the Application

Ensure you have Node.js and npm installed. Clone the repository, install dependencies, and start the application:

```bash
git clone https://github.com/yourusername/MindTheatre.git
cd MindTheatre
npm install
npm start