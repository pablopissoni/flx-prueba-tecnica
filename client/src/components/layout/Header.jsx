import React from "react";
import { Row, Col, Typography } from "antd";

const { Text, Title } = Typography;

export const Header = () => {
  return (
    <>
      <Row
        justify="start"
        align="middle"
        style={{ backgroundColor: "#D9D9D9", borderRadius: "8px", height: "91px", width: "100vw" }}
      >
        <Col>
          <img src={"flexxus-logo.png"} alt="logo" style={{ width: "153px", height: "36px", paddingLeft: "63px" }} />
        </Col>
      </Row>

      <Row style={{ marginBottom: "20px", paddingLeft: "90px" }}>
        <Col>
          <Title level={4} style={{ margin: "10px 10px" }}>
            <Text style={{ color: "gray" }}>Usuarios /</Text>
            <Text> Listado de usuarios</Text>
          </Title>
        </Col>
      </Row>
    </>
  );
};

// export default Header;
