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
// Functionality
import Functions from "./functions/Functions"

function App() {
  const [money, setMoney] = useState(0);
  const [clickMultiplier, setClickMultiplier] = useState(1);
  const [CMPrice, setCMPrice] = useState(10)

  const handleClick = () => {
    setMoney(money + 1 * clickMultiplier);
  };

  const handleBuyClickMultiplier = () => {
    if (money >= CMPrice) {
      setClickMultiplier(clickMultiplier * 1.5)
      setMoney(money - CMPrice)
      setCMPrice(CMPrice * 1.1)
    } else {
      alert("Not enough money!")
    }
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <h2>Money: {Math.round((money + Number.EPSILON) * 100) / 100}</h2>
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
                  <p>{Math.round(CMPrice)}</p>
                  <div className="d-grid gap-2">
                    <Button onClick={ handleBuyClickMultiplier } variant="success">Buy x1</Button>
                    <Button onClick={ () => Functions.test2() } variant="success">Buy x10</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Auto Clicker</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Increase money per click</Card.Text>
                  <div className="d-grid gap-2">
                    <Button onClick={ () => Functions.test() } variant="success">Buy x1</Button>
                    <Button onClick={ () => Functions.test2() } variant="success">Buy x10</Button>
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
