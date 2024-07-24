import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./profile-view.scss";
import axios from "axios";
import UserInfo from "./user-info";
import UpdateUser from "./update-user";
import { FavoriteMovies } from "./favorite-movies";
export function ProfileView({ movies, onUpdatedUserInfo }) {
    const [user, setUser] = useState({
        Username: null,
        Password: null,
        Email: null,
        Birthday: null,
    });
    const favoriteMovieList = movies.filter((movies) => {
        return user.FavoriteMovies.includes(movies._id);
    })
    const getUser = () => {
        axios.get(`https://mind-theatre-api-dc69e2dcb161.herokuapp.com/users/${localStorage.getItem("user")}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://mind-theatre-api-dc69e2dcb161.herokuapp.com/users/${localStorage.getItem("user")}`, {
            Username: user.Username,
            Password: user.Password,
            Email: user.Email,
            Birthday: user.Birthday,
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                const data = response.data;
                localStorage.setItem("user", data.Username);
                onUpdatedUserInfo(data);
                alert("Changes saved successfully!");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const removeFavorite = (id) => {
        axios.delete(`https://mind-theatre-api-dc69e2dcb161.herokuapp.com/users/${localStorage.getItem("user")}/movies/${id}`, {
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
    const handleUpdate = (e) => {
        e.preventDefault();
        getUser();
    }
    useEffect(() => {
        getUser();
        isMounted && getUser();
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <Card className="profile-card">
                        <Card.Body>
                            <UserInfo name={user.Name} email={user.Email} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8}>
                    <Card className="update-card">
                        <Card.Body>
                            <UpdateUser user={user} setUser={setUser} />
                        </Card.Body>
                    </Card>
                </Col>
                <FavoriteMovies favoriteMovieList={favoriteMovieList} />
            </Row>

        </Container>

    )
}