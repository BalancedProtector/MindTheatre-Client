import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
    storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [selectedMovie, setSelectedMovie] = useState(storedToken ? storedToken : null);

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

    return (
        <Row className="justify-content-md-center">
            {!user ? (
                <>
                    <LoginView onLoggedIn={(user, token) => { setUser(user), setToken(token) }} />
                    or
                    <SignupView />
                </>
            ) : selectedMovie ? (
                <Col md={8}>
                    <MovieView
                        movie={selectedMovie}
                        onBackClick={() => setSelectedBook(null)}
                    />
                </Col>
            ) : movies.length === 0 ? (
                <div>The List is Empty!</div>
            ) : (
                <>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onMovieClick={(newSelectedMovie) => {
                                setSelectedMovie(newSelectedMovie)
                            }}
                        />
                    ))}
                </>
            )}
            <button
                onClick={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            >
                Logout
            </button>
        </Row>
    );
};