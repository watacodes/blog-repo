import { useState, useEffect } from "react";
import FetchError from "../../components/FetchError";
import Loading from "../post/components/Loading";
import Post from "./[id]/components/Post";

const Posts = () => {
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

  if (error) return <FetchError error={error} />;
  if (isLoading) return <Loading />;

  return (
    <div>
      <main className="flex flex-col items-center m-10 py-4 min-h-full">
        <ul className="max-w-[800px]">
          {posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Posts;
