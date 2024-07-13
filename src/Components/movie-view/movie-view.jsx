import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movie }) => {
    const { movieId } = useParams();
    const movie = movies.find((b) => b.id == movieId);
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
            <Link to={`/`}>
                <button className="back-button" style={{ cursor: "pointer" }}>Back</button>
            </Link>
        </div>
    );
};