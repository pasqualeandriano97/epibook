import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class BookList extends Component {
  state = {
    books: this.props.books,
    search: "",
  };
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center mb-4">
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
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-center pb-5 g-3 ">
            {this.state.books.map((single) => {
              return <SingleBook key={single.asin} book={single} />;
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
