import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  const displayBooks = books
    .filter((book) => book.salePrice > 0)
    .slice(0, 8)
    .map((book) => <Book key={book.id} book={book} />);

  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>
          <div className="books">{displayBooks}</div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
