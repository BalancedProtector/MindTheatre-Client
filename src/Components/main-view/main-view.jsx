import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            director: "Christopher Nolan",
            genre: "Action",
            image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
        },
        {
            id: 2,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            director: "Peter Jackson",
            genre: "Fantasy",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffontmeme.com%2Fimages%2FThe-Lord-of-the-Rings-Poster.jpg&f=1&nofb=1&ipt=06f690b38a70c843e437d57eed04ce08a67a192f84cafbbbdac7f33ad8bb83e0&ipo=images"
        },
        {
            id: 3,
            title: "The Matrix",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            director: "The Wachowskis",
            genre: "Action",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F5USOlsrdfQidTzAxn93bCHRo6bX.jpg&f=1&nofb=1&ipt=588899035fff6f1a91be2f08b2075c0769be9798fa9f2e137115c922c84edda7&ipo=images"
        }
    ]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
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