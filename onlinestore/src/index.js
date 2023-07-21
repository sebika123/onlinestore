//import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// //import {BrowserRouter} from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />,



// );


// reportWebVitals();

// index.js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./redux/reducers";
import App from "./App";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
