import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/welcome";
import array from "../src/data/fantasy.json";
import BookList from "./components/BookList";
function App() {
  return (
    <>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main className="bg-dark text-light pt-3">
        <BookList books={array} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
