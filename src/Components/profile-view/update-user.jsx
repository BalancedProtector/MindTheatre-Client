import React from "react";
import Button from "react-bootstrap/Button";

function UpdateUser({ handleSubmit, handleUpdate }) {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={user.Name}
                        onChange={(e) => handleUpdate(e)}
                        required
                        placeholder="Enter a new Username"
                        minLength="4"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        defaultValue={user.Password}
                        onChange={(e) => handleUpdate(e)}
                        required
                        placeholder="Enter your new Password of 8 or more characters"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={user.Email}
                        onChange={(e) => handleUpdate(e)}
                        required
                        placeholder="Enter your new Email"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Edit Profile</Button>
            </Form>
        </>
    )
}
export default UpdateUser