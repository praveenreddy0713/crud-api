import React from "react";
import { Nav } from "react-bootstrap";

export default function Sidebar({ setPage }) {
  return (
    <Nav className="flex-column">
      <Nav.Link onClick={() => setPage("profile")}>User Profile</Nav.Link>
      <Nav.Link onClick={() => setPage("notifications")}>Notifications</Nav.Link>
      <Nav.Link onClick={() => setPage("billing")}>Billing & Invoices</Nav.Link>
      <Nav.Link onClick={() => setPage("plans")}>Plans & Add-ons</Nav.Link>
    </Nav>
  );
}