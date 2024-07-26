import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    const AddFavoriteMovie = () => {
        fetch(`https://mind-theatre-api-dc69e2dcb161.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
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
        fetch(`https://mind-theatre-api-dc69e2dcb161.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
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
        <Card>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.genre.name}</Card.Text>
                <Card.Text>{movie.description}</Card.Text>
                <Link to={`/movies/$(movie.id)}`}>
                    <Button variant="link">Open</Button>
                </Link>
                <Button onClick={AddFavoriteMovie}>Add to Favorites</Button>
                <Button onClick={RemoveFavoriteMovie}>Remove from Favorites</Button>
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
};