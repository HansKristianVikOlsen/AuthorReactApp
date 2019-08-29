import React from "react";
import { Link } from "react-router-dom";

function AuthorsList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name </th>
          <th>Age</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map(author => {
          return (
            <tr key={author.id}>
              <td>
                <Link to={"/author/" + author.id}> {author.name} </Link>
              </td>
              <td>{author.age}</td>
              <td>{author.genre}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AuthorsList;
