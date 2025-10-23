import { Form, Button } from "react-bootstrap";

export default function Billing() {
  return (
    <>
      <h3>Billing & Invoices</h3>
      <Form style={{ maxWidth: "400px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Billing Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Button variant="primary">Save Billing Info</Button>
      </Form>
    </>
  );
}