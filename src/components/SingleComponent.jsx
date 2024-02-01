import ListGroup from "react-bootstrap/ListGroup";

function SingleComment({ comment }) {
  return (
    <ListGroup.Item variant="dark">
      <h5>{comment.author}</h5>
      <p>dice "{comment.comment}"</p>
      <p>Voto:{comment.rate}</p>
    </ListGroup.Item>
  );
}

export default SingleComment;
