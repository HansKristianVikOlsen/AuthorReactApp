//import { handleResponse, handleError } from "./apiUtils";

export function getAuthors() {
  return fetch("http://localhost:6058/api/authors").then(res => res.json());
}

export function getBooksFromAuthor() {
  return fetch(
    "http://localhost:6058/api/authors/76053df4-6687-4353-8937-b45556748abe/books/"
  ).then(res => res.json());
}

export function getBooksFromSlug(slug) {
  return fetch("http://localhost:6058/api/authors/" + slug + "/books/").then(
    res => res.json()
  );
}

export function saveAuthor(author) {
  debugger;
  console.log(JSON.stringify(author));
  return fetch("http://localhost:6058/api/authors/", {
    method: "POST",
    mode: "no-cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author)
  });
}
