import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Error from "./Error";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (book) => {
  // state = {
  //   books: this.props.books,
  //   search: "",
  //   currentBook: "",
  // };

  const [books, setBooks] = useState(book.books);
  const [search, setSearch] = useState("");
  const [currentBook, setCurrentBook] = useState(null);
  const [selectedid, setSelectedid] = useState("");

  const currentBookChangeid = (id, border) => {
    setCurrentBook(id);
    setSelectedid(border);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Col className="col-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Cerca il tuo libro preferito</Form.Label>
            <Form.Control
              type="text"
              placeholder="es. Harry Potter"
              data-testid="search"
              value={search}
              onChange={(e) => {
                handleSearchChange(e);
              }}
            />
          </Form.Group>
        </Form>
      </Col>

      <Container>
        <Row className="justify-content-center pb-5 g-3 ">
          <Col className="col-8">
            <Row className="g-3">
              {books === undefined ? (
                <Error />
              ) : (
                books.map((single) => {
                  return (
                    <SingleBook
                      key={single.asin}
                      book={single}
                      currentBookid={currentBookChangeid}
                      selectedBook={currentBook}
                    />
                  );
                })
              )}
            </Row>
          </Col>
          <Col className="sticky-top h-25 bg-white col-4">
            <CommentArea currentBook={currentBook} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
