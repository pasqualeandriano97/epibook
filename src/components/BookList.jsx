import { Component } from "react";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Error from "./Error";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    books: this.props.books,
    search: "",
    currentBook: "",
  };

  currentBookChangeid = (id) => {
    this.setState({
      currentBook: id,
    });
  };
  render() {
    return (
      <>
        <Col className="col-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Cerca il tuo libro preferito</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. Harry Potter"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({
                    search: e.target.value,
                    books: this.props.books.filter((book) =>
                      book.title
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    ),
                  });
                }}
              />
            </Form.Group>
          </Form>
        </Col>

        <Container>
          <Row className="justify-content-center pb-5 g-3 ">
            <Col className="col-8">
              <Row className="g-3">
                {this.props.books === undefined ? (
                  <Error />
                ) : (
                  this.state.books.map((single) => {
                    return (
                      <SingleBook
                        key={single.asin}
                        book={single}
                        currentBookid={this.currentBookChangeid}
                      />
                    );
                  })
                )}
              </Row>
            </Col>
            <Col className="sticky-top h-25 bg-white">
              <CommentArea currentBook={this.state.currentBook} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
