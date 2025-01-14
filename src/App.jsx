import { useState, useEffect } from "react";
import Header from "./components/Header";
import ContactForm from "./pages/contact/ContactForm";
import Posts from "./pages/posts/Posts";
import PostDetails from "./pages/posts/[id]/components/PostDetails";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, isError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      isError("");
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts.");
        }
        const data = await res.json();
        setPosts(data.posts);
        localStorage.setItem("posts", JSON.stringify(data.posts));
      } catch (err) {
        isError("Fetch failed.");
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Posts posts={posts} error={error} />} />
        <Route
          path="/posts/:id"
          element={
            <PostDetails posts={posts} error={error} isLoading={isLoading} />
          }
        />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
