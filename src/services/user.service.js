import { authHeader, handleResponse } from "../helpers";

function getAll() {
  const options = { method: "GET", headers: authHeader() };
  return fetch("/users", options).then(handleResponse);
}

function getById(id) {
  const options = { method: "GET", headers: authHeader() };
  return fetch(`/users/${id}`, options).then(handleResponse);
}

export const userService = {
  getAll,
  getById
};
