import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Error from "./Error";
class AddComponent extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.currentBook,
    },
    load: {
      error: false,
    },
  };

  addComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDEyZmUwODVmYTAwMTk2MzFhMjkiLCJpYXQiOjE3MDcxMzUyNzksImV4cCI6MTcwODM0NDg3OX0.1G7fIQvCJmroe_jHiQK2lobcaaRoGyyLUbyR76M6k6M",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        if (response.ok) {
          this.setState({ ...this.state.load, error: false });
          alert("Commento aggiunto con successo");
        } else {
          this.setState({ ...this.state.load, error: true });
          alert("C'e stato un errore nell'aggiunta");
        }
      })
      .catch((err) => {
        this.setState({ ...this.state.load, error: true });
        alert("C'e stato un errore nell'aggiunta");
      });
  };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          this.addComment();
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="inserisci il tuo commento"
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({ ...this.state.comment, comment: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select
            value={this.state.rate}
            onChange={(e) =>
              this.setState({ ...this.state.comment, rate: e.target.value })
            }
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
        {this.state.load.error && <Error />}
      </Form>
    );
  }
}

export default AddComponent;
