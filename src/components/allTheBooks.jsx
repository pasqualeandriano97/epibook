import books from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class BookCard extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3 g-3 ">
          {books.map((book) => {
            return (
              <Col xs={6} md={4} lg={3} xl={2} key={book.asin}>
                <Card className="h-100">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>€{book.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookCard;
