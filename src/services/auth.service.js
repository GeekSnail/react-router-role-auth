import { BehaviorSubject } from "rxjs";
// import config from "config";
import { handleResponse } from "../helpers";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);
// console.log(currentUserSubject.asObservable(), currentUserSubject.value);

const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };
  return fetch(`/users/auth`, requestOptions)
    .then(handleResponse)
    .then(user => {
      console.log("fetch then", user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
      return user;
    });
};

const logout = () => {
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
};
export const authService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};
