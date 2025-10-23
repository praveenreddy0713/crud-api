import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import Notifications from "./components/Notifications";
import BillingInvoices from "./components/BillingInvoices";
import PlansAddons from "./components/PlansAddons";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [page, setPage] = useState("profile");

  const renderPage = () => {
    switch (page) {
      case "notifications": return <Notifications />;
      case "billing": return <BillingInvoices />;
      case "plans": return <PlansAddons />;
      default: return <UserProfile />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light vh-100 p-3">
          <Sidebar setPage={setPage} />
        </Col>
        <Col md={10} className="p-4">
          {renderPage()}
        </Col>
      </Row>
    </Container>
  );
}

export default App;