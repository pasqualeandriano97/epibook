import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
function SpinnerComponent() {
  return (
    <Col className="col-3">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Col>
  );
}

export default SpinnerComponent;
