import React from "react";
import MainCanvas from "./components/MainCanvas";
import MenuHigher from "./components/MenuHigher";
//import logo from "./logo.svg";
//import "./App.css";
import MenuRight from "./components/MenuRight";

function App() {
  return (
    <div>
      <MenuHigher />
      <MenuRight />
      <MainCanvas />
    </div>
  );
}

export default App;
