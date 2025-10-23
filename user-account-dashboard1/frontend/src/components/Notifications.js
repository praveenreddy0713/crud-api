import { Form } from "react-bootstrap";

export default function Notifications() {
  return (
    <>
      <h3>Notifications</h3>
      <Form>
        <Form.Check label="Email Notifications" />
        <Form.Check label="SMS Notifications" />
        <Form.Check label="Product Updates" />
      </Form>
    </>
  );
}