import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const deleteComment = (id) => {
  fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNGVlYzE4N2U1YzAwMTgxNGM2ODQiLCJpYXQiOjE3MDU2NjAxNDAsImV4cCI6MTcwNjg2OTc0MH0.BYoumxc2t38hSThcQyQoO2cRhsXNCW4B0RjQnHYWubg",
      "content-type": "application/json",
    },
  })
    .then(() => {
      alert("Commento eliminato con successo");
    })
    .catch(() => {
      alert("C'e stato un errore nell'eliminazione");
    });
};

function SingleComment({ comment }) {
  return (
    <ListGroup.Item variant="dark">
      <h5>{comment.author}</h5>
      <p>Dice: "{comment.comment}"</p>
      <p>Voto:{comment.rate}</p>
      <Button
        variant="danger"
        onClick={() => {
          deleteComment(comment._id);
        }}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
}

export default SingleComment;
