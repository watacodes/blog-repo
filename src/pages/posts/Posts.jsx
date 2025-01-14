import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Post from "./components/Post";

const Posts = () => {
  const { posts } = useContext(PostContext);

  return (
    <main className="flex flex-col items-center m-10 py-4 min-h-full">
      <ul className="max-w-[800px]">
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </ul>
    </main>
  );
};

export default Posts;
