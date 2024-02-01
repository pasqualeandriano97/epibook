import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  commentFetch = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.currentBook,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNGVlYzE4N2U1YzAwMTgxNGM2ODQiLCJpYXQiOjE3MDU2NjAxNDAsImV4cCI6MTcwNjg2OTc0MH0.BYoumxc2t38hSThcQyQoO2cRhsXNCW4B0RjQnHYWubg",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ comments: data });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.commentFetch();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CommentsList list={this.state} />
          </Col>
          <Col>
            <AddComment />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
