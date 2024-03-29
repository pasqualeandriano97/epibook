import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

import Spinner from "./Spinner";
import { useState, useEffect } from "react";
const CommentArea = ({ currentBook }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [reloadComment, setReloadComment] = useState(false);

  const commentFetch = (id) => {
    setIsloading(true);
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
        setComments(data);
        setIsloading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  useEffect(() => {
    commentFetch(currentBook);
  }, [currentBook, reloadComment]);

  return (
    <Container>
      <Row className="justify-content-center mt-5 " data-testid="comment-area">
        {isloading === true ? (
          <Spinner />
        ) : (
          <>
            <Col sm={12} md={12} lg={12} xl={12}>
              <h3 className="text-black">Commenti del libro selezionato</h3>
              <CommentsList
                list={comments}
                reloadComment={reloadComment}
                setReloadComment={setReloadComment}
              />
            </Col>
            <Col sm={12} md={12} lg={12} xl={12}>
              <AddComment
                currentBook={currentBook}
                reloadComment={reloadComment}
                setReloadComment={setReloadComment}
              />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CommentArea;
