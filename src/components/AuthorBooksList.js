import React from "react";
import { Link } from "react-router-dom";

function AuthorBooksList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title </th>
          <th>Decription</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map(book => {
          return (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
/*

 {props.books.map(book => {
          return (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description}</td>
            </tr>
          );
        })}
*/

export default AuthorBooksList;
