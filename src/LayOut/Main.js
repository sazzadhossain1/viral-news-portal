import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="2">Left side nav</Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">Right side nav</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
