import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((b) => b.id == movieId);

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    const AddFavoriteMovie = () => {
        fetch(`https://mindtheatre.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Movie added to favorites!");
            });
    }
    const RemoveFavoriteMovie = () => {
        fetch(`https://mindtheatre.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Movie removed from favorites!");
            });
    }

    return (
        <div>
            <div className="Poster">
                <img src={movie.image} className="w-100" />
            </div>
            <div className="Title">
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div classname="Director">
                <span>Director: </span>
                <span>{movie.director}</span>
            </div>
            <div className="Genre">
                <span>Genre: </span>
                <span>{movie.genre}</span>
            </div>
            <div className="Description">
                <span>Description: </span>
                <span>{movie.description}</span>
            </div>
            <Button onClick={AddFavoriteMovie}>
                Favorite This Movie
            </Button>
            <Button onClick={RemoveFavoriteMovie}>
                Remove from Favorites
            </Button>
            <Link to={`/`}>
                <button className="back-button" style={{ cursor: "pointer" }}>Back</button>
            </Link>
        </div>
    );
};