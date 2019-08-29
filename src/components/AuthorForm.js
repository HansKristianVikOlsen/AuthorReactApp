import React from "react";
import TextInput from "./common/TextInput";

function AuthorForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="firstName"
        label="firstName"
        type="text"
        onChange={props.onChange}
        name="firstName"
        value={props.firstName}
        className="form-control"
      />
      <TextInput
        id="lastName"
        label="lastName"
        type="text"
        onChange={props.onChange}
        name="lastName"
        value={props.lastName}
        className="form-control"
      />

      <TextInput
        id="genre"
        label="genre"
        type="text"
        onChange={props.onChange}
        name="genre"
        value={props.genre}
        className="form-control"
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default AuthorForm;

//value={props.author.age}

/*

<TextInput
        id="dateOfBirth"
        label="dateOfBirth"
        type="text"
        onChange={props.onChange}
        name="dateOfBirth"
        className="form-control"
      />

      */
