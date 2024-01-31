import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class BookCard extends Component {
  state = {
    selected: "h-100",
  };
  render() {
    return (
      <Col
        xs={12}
        md={4}
        lg={3}
        xl={2}
        onClick={() =>
          this.state.selected === "h-100"
            ? this.setState({ selected: "border border-2 border-danger h-100" })
            : this.setState({ selected: "h-100" })
        }
      >
        <Card className={this.state.selected}>
          <Card.Img
            style={{ height: "300px" }}
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body className="d-flex flex-column ">
            <Card.Title className="flex-grow-1">
              {this.props.book.title}
            </Card.Title>
            <Card.Text>€{this.props.book.price}</Card.Text>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default BookCard;
