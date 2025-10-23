import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Notifications() {
  return (
    <Form>
      <h4>Notification Settings</h4>
      <Form.Check type="switch" label="Email Notifications" className="mt-3" />
      <Form.Check type="switch" label="SMS Alerts" className="mt-3" />
      <Button className="mt-3">Save</Button>
    </Form>
  );
}