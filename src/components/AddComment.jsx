import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComponent extends Component() {
  state = {
    comment: "",
    rate: "",
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Commento</Form.Label>
          <Form.Control type="text" placeholder="inserisci il tuo commento" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select>
            <option>Fatto {console.log("lello")}</option>
            <option>Fatto22</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Id Libro</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(Form);
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComponent;
