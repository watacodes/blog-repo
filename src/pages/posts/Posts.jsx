import { posts } from "../../data/posts";
import Post from "./components/Post";

const Posts = () => {
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
