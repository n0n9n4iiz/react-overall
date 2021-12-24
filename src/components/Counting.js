import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

export default function Counting() {
    const [number, setNumber] = useState(0)
  return (
    <div>
      <Container>
        <h1>Couting page</h1>
        <hr></hr>
        <Row>
          <Col lg={"auto"} md={"auto"}>
            <InputGroup>
              <Button onClick={()=>{setNumber(number-1)}}>-</Button>
              <InputGroup.Text>{number}</InputGroup.Text>
              <Button onClick={()=>{setNumber(number+1)}}>+</Button>
            </InputGroup>
          </Col>

          <Col lg={"auto"} md={"auto"}>
            <Button className="d-inline" onClick={()=>{setNumber(0)}}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
