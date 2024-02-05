import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class BookCard extends Component {
  state = {
    selected: "h-100",
  };

  handleClick = () => {
    this.state.selected === "h-100"
      ? this.setState({
          selected: "border border-2 border-danger h-100",
        })
      : this.setState({ selected: "h-100" });
    this.props.currentBookid(this.props.book.asin);
  };

  render() {
    return (
      <Col xs={12} md={6} lg={4} xl={3}>
        <Card className={this.state.selected}>
          <Card.Img
            style={{ height: "350px" }}
            variant="top"
            src={this.props.book.img}
            onClick={() => this.handleClick()}
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
