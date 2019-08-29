import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import { saveAuthor } from "../api/apicalls";
//import DateTimeOffset from "datetime-offset";

function AddAuthor(props) {
  const [author, addAuthor] = useState({
    firstName: "",
    lastName: "",
    //   dateOfBirth: null,
    genre: ""
  });

  function handleChange(event) {
    const newAuthor = {
      ...author,
      [event.target.name]: event.target.value
    };
    //updatedCourse.title = event.target.value; same as above. Not anymore
    // newAuthor.dateOfBirth = new Date("2010-03-05").getTimezoneOffset;
    //newAuthor.dateOfBirth = new DateTimeOffset(2001, 3, 4, 14, 40, 21, TimeSpan.FromHours(4));

    console.log(newAuthor.dateOfBirth);
    addAuthor(newAuthor);
  }
  function handleSubmit(event) {
    event.preventDefault();

    saveAuthor(author).then(() => {
      props.history.push("/authors"); // Redirects user after saving a new course
    });
  }

  return (
    <>
      <h2>Add a new Author</h2>
      <AuthorForm
        author={author}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <Link to="/authors" className="btn btn-danger">
        Go back to authors
      </Link>
    </>
  );
}

export default AddAuthor;
