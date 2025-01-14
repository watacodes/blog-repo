import "./App.css";
import Header from "./components/Header";
import ContactForm from "./pages/contact/ContactForm";
import Posts from "./pages/posts/Posts";
import PostDetails from "./pages/posts/[id]/PostDetails";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
