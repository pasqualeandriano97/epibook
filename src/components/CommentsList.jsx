import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComponent";

function CommentsList({ list, reloadComment, setReloadComment }) {
  return (
    <ListGroup>
      {list === undefined ? (
        <ListGroup.Item>Nessun libro selezionato</ListGroup.Item>
      ) : (
        list.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              comment={comment}
              reloadComment={reloadComment}
              setReloadComment={setReloadComment}
            />
          );
        })
      )}
    </ListGroup>
  );
}

export default CommentsList;
