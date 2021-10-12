// React imports
import React, { useState } from "react";
// Styles
import "./App.css";
// Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function App() {
  const [money, setMoney] = useState(0);
  const [clickMultiplier, setClickMultiplier] = useState(1);

  const handleClick = () => {
    setMoney(money + 1 * clickMultiplier);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <h2>{money}</h2>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button onClick={handleClick} variant="primary" size="lg">
              Click me
            </Button>
          </Col>
          <Col>
            <Row>
              <Card>
                <Card.Header>
                  <Card.Title>Click Multiplier</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Increase money per click</Card.Text>
                  <div className="d-grid gap-2">
                    <Button variant="success">Buy</Button>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
