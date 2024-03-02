import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  return (
    <>
      <CharacterEditor />
      <div className={"bgDecoration"}></div>
      <Footer />
    </>
  );
}

export default App;
