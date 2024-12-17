import React from "react";
import ReactDOM from "react-dom/client";
import AuthPage from "../src/components/AuthPage";
import "../src/components/AuthPage.css";


function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;