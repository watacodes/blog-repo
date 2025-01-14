import dayjs from "dayjs";
import CategoryButton from "../../../../components/CategoryButton";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const date = dayjs(post.createdAt).format("MM/DD/YYYY");

  return (
    <Link to={`/posts/${post.id}`}>
      <li
        className="border border-gray-400 list-none flex-col mb-9 p-4"
        key={post.id}
      >
        <div className="flex justify-between">
          <div className="text-sm text-gray-400">{date}</div>
          <div className="flex px-4">
            {post.categories.map((category, index) => (
              <CategoryButton category={category} key={index} />
            ))}
          </div>
        </div>

        <h2 className="text-2xl leading-10 py-4">{post.title}</h2>
        <div
          className="overflow-hidden line-clamp-2 w-3/4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </li>
    </Link>
  );
};

export default Post;
