// React imports
import React, { useState, useEffect } from "react";
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
  const [relateTickets, setRelateTickets] = useState(1);
  const [relateTicketsPrice, setRelateTicketsPrice] = useState(10)
  const [scripts, setScripts] = useState(0);
  const [scriptsPrice, setScriptsPrice] = useState(10)

  const [CM1ButtonEnabled, setCM1ButtonEnabled] = useState(false)
  const [CM10ButtonEnabled, setCM10ButtonEnabled] = useState(false)
  const [scriptsButton1Enabled, setScriptsButton1Enabled] = useState(false)
  const [scriptsButton10Enabled, setScriptsButton10Enabled] = useState(false)

  const handleClick = () => {
    setMoney(money + 1 * relateTickets);
  };

  // Buy upgrades
  const handleBuyRelateTickets = () => {
    if (money >= relateTicketsPrice) {
      setRelateTickets(relateTickets * 1.05)
      setMoney(money - relateTicketsPrice)
      setRelateTicketsPrice(relateTicketsPrice * 1.15)
    } else {
      alert("Not enough money!")
    }
  }
  const handleBuyRelateTickets10 = () => {
    if (money >= (relateTicketsPrice * 10)) {
      setRelateTickets(relateTickets * 10.5)
      setMoney(money - (relateTicketsPrice * 10))
      setRelateTicketsPrice(relateTicketsPrice * 11.5)
    } else {
      alert("Not enough money!")
    }
  }

  // Buy Scripts
  const handleBuyScripts = () => {
    if (money >= scriptsPrice) {
      setScripts(scripts + 1)
      setMoney(money - scriptsPrice)
      setScriptsPrice(scriptsPrice * 1.2)
    } else {
      alert("Not enough money :(")
    }
  }
  const handleBuyScripts10 = () => {
    if (money >= (scriptsPrice * 10)) {
      setScripts(scripts + 10)
      setMoney(money - (scriptsPrice * 10))
      setScriptsPrice(scriptsPrice * 12)
    } else {
      alert("Not enough money :(")
    }
  }

  // useEffect that disables / enables purchase buttons
  useEffect(() => {
    // Click multiplier Buttons
    // x1
    money >= relateTicketsPrice ? setCM1ButtonEnabled(false) : setCM1ButtonEnabled(true)
    // x10
    money >= (relateTicketsPrice * 10) ? setCM10ButtonEnabled(false) : setCM10ButtonEnabled(true)
    // Script multiplier buttons
    // x1
    money >= scriptsPrice ? setScriptsButton1Enabled(false) : setScriptsButton1Enabled(true)
    // x2
    money >= (scriptsPrice * 10) ? setScriptsButton10Enabled(false) : setScriptsButton10Enabled(true)


  }, [money, relateTicketsPrice])

  // setInterval function, this will run every second
  useEffect(() => {
    window.interval23 = setInterval(
      () => setMoney(money + scripts),
      1000
    )
    return () => {
      clearInterval(window.interval23)
    }
  }, [])

  return (
    <div className="App">
      <Container>
        <Row>
          <h2>Money: {Math.round((money + Number.EPSILON) * 100) / 100}$</h2>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button onClick={handleClick} variant="primary" size="lg">
              Resolve an incident
            </Button>
          </Col>
          <Col>
            <Row>
              <Card>
                <Card.Header>
                  <Card.Title>Relate tickets</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Relate tickets so you can resolve incidents faster</Card.Text>
                  <p>Price: {Math.round(relateTicketsPrice)}$</p>
                  <div className="d-grid gap-2">
                    <Button onClick={ handleBuyRelateTickets } variant="success" disabled={CM1ButtonEnabled}>Buy x1</Button>
                    <Button onClick={ handleBuyRelateTickets10 } variant="success" disabled={CM10ButtonEnabled}>Buy x10</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Create Script</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>Create a script to resolve incidents where the alarm autoclears</Card.Text>
                  <div className="d-grid gap-2">
                    <Button onClick={ handleBuyScripts } variant="success" disabled={ scriptsButton1Enabled }>Buy x1</Button>
                    <Button onClick={ handleBuyScripts10 } variant="success" disabled={ scriptsButton10Enabled }>Buy x10</Button>
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
