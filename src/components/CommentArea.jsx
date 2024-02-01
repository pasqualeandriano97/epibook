import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Error from "./Error";
import Spinner from "./Spinner";
class CommentArea extends Component {
  state = {
    comments: [],
    error: false,
    isloading: false,
  };
  commentFetch = () => {
    this.setState({ isloading: true });
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
        this.setState({ comments: data, isloading: false });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  };
  componentDidMount() {
    this.commentFetch();
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {this.state.isloading === true ? (
            <Spinner />
          ) : (
            <>
              <Col sm={12} md={12} lg={12} xl={12}>
                <CommentsList list={this.state} />
              </Col>
              <Col sm={12} md={12} lg={12} xl={12}>
                <AddComment currentBook={this.props.currentBook} />
              </Col>
            </>
          )}
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
