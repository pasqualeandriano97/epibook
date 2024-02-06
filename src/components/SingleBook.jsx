import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const BookCard = ({ book, currentBookid, selectedBook }) => {
  const handleClick = () => {
    currentBookid(book.asin);
  };

  return (
    <Col xs={12} md={6} lg={4} xl={3}>
      <Card
        className={
          selectedBook === book.asin ? "border-2 border-warning h-100" : "h-100"
        }
      >
        <Card.Img
          style={{ height: "350px" }}
          variant="top"
          src={book.img}
          onClick={() => handleClick()}
        />
        <Card.Body className="d-flex flex-column ">
          <Card.Title className="flex-grow-1">{book.title}</Card.Title>
          <Card.Text>€{book.price}</Card.Text>
          <Card.Text>{book.category}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
