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
  commentFetch = (id) => {
    this.setState({ isloading: true });
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDEyZmUwODVmYTAwMTk2MzFhMjkiLCJpYXQiOjE3MDcxMzUyNzksImV4cCI6MTcwODM0NDg3OX0.1G7fIQvCJmroe_jHiQK2lobcaaRoGyyLUbyR76M6k6M",
      },
    })
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentBook !== this.props.currentBook) {
      this.commentFetch(this.props.currentBook);
    }
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5 ">
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
