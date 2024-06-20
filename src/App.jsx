import React from "react";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col bg-gray-900 min-h-screen tracking-wide select-none">
        <Card/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
