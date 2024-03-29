import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/welcome";
import fantasy from "../src/data/fantasy.json";
import history from "../src/data/history.json";
import scifi from "../src/data/scifi.json";
import BookList from "./components/BookList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main className="bg-dark text-light pt-3">
        <Container fluid>
          <Row className="justify-content-center align-items-center  mb-4">
            <BookList books={fantasy} />
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
