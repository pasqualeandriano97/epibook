import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComponent";

function CommentsList({ list }) {
  return (
    <ListGroup>
      {list.comments.map((comment) => {
        return <SingleComment key={comment._id} comment={comment} />;
      })}
    </ListGroup>
  );
}

export default CommentsList;