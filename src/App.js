import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

function App() {
  return <Header />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
