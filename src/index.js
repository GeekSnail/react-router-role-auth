import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
// import { createSagaMiddleware } from "redux-saga";
// import { helloSaga } from "./saga";
import App from "./App";
import "./styles.css";
import { configFakeBackend } from "./helpers";
configFakeBackend();
// const sagaMiddleware = createSagaMiddleware();

console.log("init", process.env.REACT_APP_API_HOST);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
