import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/welcome";
import BookCard from "./components/allTheBooks";
function App() {
  return (
    <>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <BookCard />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
