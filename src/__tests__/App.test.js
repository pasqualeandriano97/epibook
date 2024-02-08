import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import fantasy from "../data/fantasy.json";
import App from "../App";

describe("General Mounting", () => {
  it("welcome component is visible at start of page", () => {
    render(<App />);
    const welcome = screen.getByText(/benvenuto nel mio shop di libri/i);
    expect(welcome).toBeInTheDocument();
  });
  it("Comment area component is visible at start of page", () => {
    render(<App />);
    const commentArea = screen.getByTestId("comment-area");
    expect(commentArea).toBeInTheDocument();
  });
  it("Cards are then the fantasy books", () => {
    render(<App />);
    const cards = screen.getAllByRole("img");
    expect(cards).toHaveLength(fantasy.length);
  });
});

const filterBooks = (books, search) => {
  let arraystart = 0;
  const array = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  arraystart = array.length;
  return arraystart;
};

describe("Search", () => {
  it("Search bar filter books", () => {
    render(<App />);
    const searchBar = screen.getByTestId("search");
    fireEvent.change(searchBar, { target: { value: "Ha" } });
    const cards = screen.getAllByRole("img");
    expect(cards).toHaveLength(filterBooks(fantasy, "Ha"));
  });
});

describe("fireEvent", () => {
  it("click on a card", () => {
    render(<App />);
    const cards = screen.getAllByTestId("card")[0];
    fireEvent.click(cards);
    expect(cards).toHaveClass("border-2 border-warning h-100");
  });
});
