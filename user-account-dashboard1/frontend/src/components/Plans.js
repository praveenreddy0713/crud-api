import { Card, Button } from "react-bootstrap";

export default function Plans() {
  const plans = [
    { name: "Free", price: "$0", features: ["Basic support", "Single user"] },
    { name: "Pro", price: "$9.99/mo", features: ["Priority support", "5 users"] },
    { name: "Enterprise", price: "$49.99/mo", features: ["Dedicated manager", "Unlimited users"] },
  ];

  return (
    <>
      <h3>Plans & Add-ons</h3>
      <div className="d-flex flex-wrap gap-3">
        {plans.map((p) => (
          <Card style={{ width: "16rem" }} key={p.name}>
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Subtitle>{p.price}</Card.Subtitle>
              <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <Button>Select</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}