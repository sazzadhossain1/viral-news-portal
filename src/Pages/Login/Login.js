import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <p style={{ color: "red" }}>{error}</p>
      <Button variant="primary" type="submit">
        Please Login
      </Button>
    </Form>
  );
};

export default Login;
