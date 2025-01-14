import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Post from "./[id]/components/Post";
import FetchError from "../../components/FetchError";

const Posts = () => {
  const { posts, error } = useContext(PostContext);

  return (
    <div>
      {error ? (
        <FetchError error={error} />
      ) : (
        <main className="flex flex-col items-center m-10 py-4 min-h-full">
          <ul className="max-w-[800px]">
            {posts.map((post) => {
              return <Post post={post} key={post.id} />;
            })}
          </ul>
        </main>
      )}
    </div>
  );
};

export default Posts;
