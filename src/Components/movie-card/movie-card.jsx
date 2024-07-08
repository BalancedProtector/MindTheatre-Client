import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card onClick={() => onMovieClick(movie)}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};
MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
        director: PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            birth: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};