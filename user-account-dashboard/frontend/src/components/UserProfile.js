import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function UserProfile() {
  const [form, setForm] = useState({ email: "", firstName: "", lastName: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-api-endpoint/users", form);
    alert("User created successfully!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>User Profile</h4>
      <Form.Group className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} />
      </Form.Group>
      <Button type="submit" className="mt-3">Create Account</Button>
    </Form>
  );
}