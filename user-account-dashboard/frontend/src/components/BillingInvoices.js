import React from "react";
import { Form, Button } from "react-bootstrap";

export default function BillingInvoices() {
  return (
    <Form>
      <h4>Billing & Invoices</h4>
      <Form.Group className="mt-3">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Billing Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button className="mt-3">Update Billing Info</Button>
    </Form>
  );
}