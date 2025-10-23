import React from "react";
import { Form, Button } from "react-bootstrap";

export default function PlansAddons() {
  return (
    <Form>
      <h4>Plans & Add-ons</h4>
      <Form.Select className="mt-3">
        <option>Basic Plan</option>
        <option>Pro Plan</option>
        <option>Enterprise</option>
      </Form.Select>
      <Button className="mt-3">Upgrade Plan</Button>
    </Form>
  );
}