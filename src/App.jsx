import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ContactForm from "./pages/contact/ContactForm";
import Posts from "./pages/posts/Posts";
import PostDetails from "./pages/posts/[id]/components/PostDetails";

function App() {
  return (
    <div>
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
