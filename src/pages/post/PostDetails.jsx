import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import CategoryButton from "../../components/CategoryButton";
import NotFound from "../notfound/NotFound";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Loading from "./components/Loading";

const PostDetails = () => {
  const { id } = useParams();
  const { posts, isLoading } = useContext(PostContext);

  const targetPost = posts.find((post) => post.id.toString() === id);

  if (!targetPost) return <NotFound />;

  const date = dayjs(targetPost.createdAt).format("MM/DD/YYYY");

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center p-2">
          <div>
            <div className="mt-10 mb-5">
              <img
                className="h-auto max-w-full"
                src={`${targetPost.thumbnailUrl}`}
                alt="A thumbnail of the post"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <div className="text-sm text-gray-400">{date}</div>
                <div className="flex px-4">
                  {targetPost.categories.map((category, index) => (
                    <CategoryButton category={category} key={index} />
                  ))}
                </div>
              </div>
              <h1 className="py-5 text-2xl">{targetPost.title}</h1>
              <div
                className="overflow-hidden min-w-fit"
                dangerouslySetInnerHTML={{ __html: targetPost.content }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
