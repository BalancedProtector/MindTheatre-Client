import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Figure, Button } from "react-bootstrap";
import "./profile-view.scss";

function FavoriteMovies({ favoriteMovieList }) {
    const removeFavorite = (movieId) => {
        axios.delete(`https://mindtheatre.herokuapp.com/users/${localStorage.getItem("user")}/movies/${movieId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                const data = response.data;
                onUpdatedUserInfo(data);
                alert("Movie removed from favorites!");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <h2>FavoriteMovies</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {favoriteMovieList.map((ImagePath, Title, _id) => {
                                return (
                                    <Col xs={12} md={6} lg={3} key={_id} className="FavoriteMovie">
                                        <Link to={`/movies/${_id}`}>
                                            <Figure>
                                                <Figure.Image
                                                    src={ImagePath}
                                                    alt={Title}
                                                />
                                                <Figure.Caption>
                                                    {Title}
                                                </Figure.Caption>
                                            </Figure>
                                        </Link>
                                        <Button variant="secondary" onClick={() => removeFavorite(_id)}>I dont like this anymore</Button>
                                    </Col>
                                )
                            })}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default FavoriteMovies;