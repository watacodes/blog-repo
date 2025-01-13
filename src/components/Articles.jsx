import { posts } from "../data/posts";
import Post from "./Post";

const Articles = () => {
  return (
    <main className="m-10 py-4 min-w-screen-md min-h-full">
      <ul>
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </ul>
    </main>
  );
};

export default Articles;
