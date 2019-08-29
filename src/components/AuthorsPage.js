import React, { useState, useEffect } from "react";
import { getAuthors } from "../api/apicalls";
import AuthorsList from "./AuthorsList";
import { Link } from "react-router-dom";

function AuthorsPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(_authors => setAuthors(_authors));
  }, []);

  return (
    <>
      <h2>Authors </h2>
      <AuthorsList authors={authors} />
      <Link to="/addauthor" className="btn btn-info">
        Add author
      </Link>
    </>
  );
}

export default AuthorsPage;
