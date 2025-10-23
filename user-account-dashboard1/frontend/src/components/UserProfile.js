import { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";

const API = import.meta.env.VITE_API_BASE;

export default function UserProfile() {
  const [form, setForm] = useState({ email: "", firstName: "", lastName: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/users`, form);
      setMsg(res.data.message);
    } catch {
      setMsg("Error creating user");
    }
  };

  return (
    <>
      <h3>User Profile</h3>
      {msg && <Alert variant="info">{msg}</Alert>}
      <Form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" value={form.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" value={form.lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit">Create Account</Button>
      </Form>
    </>
  );
}