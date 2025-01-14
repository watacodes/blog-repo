import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import CategoryButton from "../../../../components/CategoryButton";
import NotFound from "../../../notfound/NotFound";
import Loading from "../../../post/components/Loading";
import FetchError from "../../../../components/FetchError";
import { useState, useEffect } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetcher = async () => {
      setError("");
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch the post.");
        }
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        setError("Failed to fetch the post.");
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
  }, [id]);

  if (error) return <FetchError error={error} />;
  if (isLoading) return <Loading />;
  if (!post) return <NotFound />;

  const date = dayjs(post.createdAt).format("MM/DD/YYYY");

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-2">
        <div>
          <div className="mt-10 mb-5">
            <img
              className="h-auto max-w-full"
              src={`${post.thumbnailUrl}`}
              alt="A thumbnail of the post"
            />
          </div>
          <div className="p-3">
            <div className="flex justify-between">
              <div className="text-sm text-gray-400">{date}</div>
              <div className="flex px-4">
                {post.categories.map((category, index) => (
                  <CategoryButton category={category} key={index} />
                ))}
              </div>
            </div>
            <h1 className="py-5 text-2xl">{post.title}</h1>
            <div
              className="overflow-hidden min-w-fit"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
