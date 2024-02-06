import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Error from "./Error";

const AddComponent = ({ currentBook, reloadComment, setReloadComment }) => {
  // state = {
  //   comment: {
  //     comment: "",
  //     rate: "1",
  //     elementId: this.props.currentBook,
  //   },
  //   load: {
  //     error: false,
  //   },
  // };
  // const handleReload = () => {
  //   reload.setReloadComment(!reload.reloadComment);
  // };

  let commentObj = {
    comment: "",
    rate: "1",
    elementId: currentBook,
  };
  console.log(currentBook);
  const [comment, setComment] = useState(commentObj);
  const [error, setError] = useState(false);

  const addComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDEyZmUwODVmYTAwMTk2MzFhMjkiLCJpYXQiOjE3MDcxMzUyNzksImV4cCI6MTcwODM0NDg3OX0.1G7fIQvCJmroe_jHiQK2lobcaaRoGyyLUbyR76M6k6M",
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => {
        if (response.ok) {
          setError(false);
          setComment(commentObj);

          alert("Commento aggiunto con successo");
        } else {
          setError(true);
          alert("C'e stato un errore nell'aggiunta");
        }
      })
      .catch((err) => {
        setError(true);
        alert("C'e stato un errore nell'aggiunta");
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addComment();
        setReloadComment(!reloadComment);
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="inserisci il tuo commento"
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Select
          value={comment.rate}
          onChange={(e) => setComment({ ...comment, rate: e.target.value })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button variant="success" type="submit" className="mb-2">
        INVIA
      </Button>
      {error && <Error />}
    </Form>
  );
};

export default AddComponent;
