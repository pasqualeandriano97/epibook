import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const deleteComment = (id) => {
  fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDEyZmUwODVmYTAwMTk2MzFhMjkiLCJpYXQiOjE3MDcxMzUyNzksImV4cCI6MTcwODM0NDg3OX0.1G7fIQvCJmroe_jHiQK2lobcaaRoGyyLUbyR76M6k6M",
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
