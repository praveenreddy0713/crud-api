import { Container, Row, Col, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Notifications from "./components/Notifications";
import Billing from "./components/Billing";
import Plans from "./components/Plans";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light vh-100 p-3">
            <h5>Dashboard</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">User Profile</Nav.Link>
              <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
              <Nav.Link as={Link} to="/billing">Billing & Invoices</Nav.Link>
              <Nav.Link as={Link} to="/plans">Plans & Add-ons</Nav.Link>
            </Nav>
          </Col>
          <Col md={10} className="p-4">
            <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/plans" element={<Plans />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;