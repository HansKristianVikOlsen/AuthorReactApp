import React, { useState, useEffect } from "react";
import { getBooksFromAuthor, getBooksFromSlug } from "../api/apicalls";
import AuthorBooksList from "./AuthorBooksList";

function AuthorBooks(props) {
  const [books, setBooks] = useState([]);

  /*
  useEffect(() => {
    getBooksFromAuthor().then(_books => setBooks(_books));
  }, []);
*/
  useEffect(() => {
    const slug = props.match.params.slug; // from the url

    if (slug) {
      getBooksFromSlug(slug).then(_books => setBooks(_books));
    }
  }, [props.match.params.slug]);

  return (
    <>
      <h2>Books </h2>
      <AuthorBooksList books={books} />
    </>
  );
}

/*
function AuthorBooks() {
  return (
    <>
      <h1>Books by </h1>
    </>
  );
}
*/
export default AuthorBooks;
