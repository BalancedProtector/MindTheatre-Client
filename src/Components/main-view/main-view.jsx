import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
    storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [selectedMovie, setSelectedMovie] = useState(storedToken ? storedToken : null);

    if (!user) {
        return (
            <>
                <LoginView
                    onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }}
                />
                or
                <SignupView />
            </>
        )
    }

    useEffect(() => {
        //requires a valid token before allowing the user to see the movies
        if (!token) return;

        fetch("https://mindtheatre.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((movies) => {
                setMovies(movies);
            });
    }, [token]);

    if (selectedMovie) {
        return (
            <>
                <MovieView
                    movie={selectedMovie}
                    onBackClick={() => setSelectedMovie(null)}
                />
                <button
                    onClick={() => {
                        setUser(null);
                        setToken(null);
                        localStorage.clear();
                    }}>
                    Logout
                </button>
            </>


        );
    }
    if (movies.length === 0) {
        return <div>The list is Empty</div>;
    }
    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
}