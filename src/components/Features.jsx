import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Features = () => {
  const displayBooks = books
    .filter((book) => book.rating === 5)
    .slice(0, 4)
    .map((book) => {
      return <Book key={book.id} book={book} />;
    });

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Book</span>
          </h2>
          <div className="books">{displayBooks}</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
