import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(
    () => JSON.parse(localStorage.getItem("posts")) || []
  );
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
    <PostContext.Provider value={{ posts, error, isLoading }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
