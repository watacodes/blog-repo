import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/posts/:id" element={<div>post placeholder</div>} />
      </Routes>
    </div>
  );
}

export default App;
