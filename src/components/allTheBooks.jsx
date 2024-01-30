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
        <Row className="justify-content-center pb-5 g-3 ">
          {books.map((book) => {
            return (
              <Col xs={12} md={4} lg={3} xl={2} key={book.asin}>
                <Card className="h-100">
                  <Card.Img
                    style={{ height: "350px" }}
                    variant="top"
                    src={book.img}
                  />
                  <Card.Body className="d-flex flex-column ">
                    <Card.Title className="flex-grow-1">
                      {book.title}
                    </Card.Title>
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
