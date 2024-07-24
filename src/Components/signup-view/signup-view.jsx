import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SignupView = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if the username is empty
        if (!name.trim()) {
            alert("Username is required");
            return;
        }

        // Check if the username contains only alphanumeric characters
        if (!/^[a-zA-Z0-9]+$/.test(name)) {
            alert("Username contains non alphanumeric characters - not allowed.");
            return;
        }

        const data = {
            Name: name,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://mind-theatre-api-dc69e2dcb161.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Signup Successful! Please login to continue.");
                    window.location.reload();
                } else {
                    alert("Signup Failed! Please try again?");
                }
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength="3"
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
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </Form.Group>
            <Col md={12} className="d-flex justify-content-center">
                <Button className="mb-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Col>
        </Form>
    )
}