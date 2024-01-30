import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = () => {
  return (
    <Container fluid className="p-3 bg-dark text-white">
      <Row className="justify-content-center">
        <Col className="col-6 text-center">
          <Row>
            <Col className="col-12">
              <h5>© All rights reservered</h5>
            </Col>
            <Col className="col-12">30/01/2024</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
