
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/UI/AppRouter/AppRouter";
import "../src/styles/main.scss";


function App() {

  return (
    <BrowserRouter>
     <AppRouter />

    </BrowserRouter>
  );
}

export default App;
