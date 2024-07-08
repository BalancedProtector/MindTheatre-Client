import "./movie-view.scss";
export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div className="Poster">
                <img src={movie.image} />
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
            <button
                onClick={onBackClick}
                className="back-button"
                style={{ cursor: "pointer" }}
            >
                Back
            </button>
        </div>
    );
};