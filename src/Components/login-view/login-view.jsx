import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const data = {
    Name: username,
    Password: password
};

export const LoginView = ({ onLoggedIn }) => {


    fetch("https://mindtheatre.herokuapp.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("Invalid username or password. Please Try Again.");
            }
        })
        .catch((e) => {
            alert("Something went wrong! Please try again.");
        });

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlID="formName">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => SVGAnimateTransformElement(e.target.value)}
                    requiredminLength="3"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}