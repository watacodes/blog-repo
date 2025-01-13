import React from "react";
import CategoryButton from "./CategoryButton";

const Post = ({ post }) => {
  const [year, month, day] = post.createdAt.split("T")[0].split("-");
  const postDate = `${month}/${day}/${year}`;

  return (
    <li
      className="border border-gray-400 list-none flex-col mb-9 p-4"
      key={post.id}
    >
      <div className="flex justify-between">
        <div className="text-sm text-gray-400">{postDate}</div>
        <div className="flex px-4">
          {post.categories.map((category, index) => (
            <CategoryButton index={index} category={category} />
          ))}
        </div>
      </div>
      <h2 className="text-2xl leading-10 py-4">{post.title}</h2>
      <p className="overflow-hidden line-clamp-2 w-3/4">
        {post.content.replace(/(<br\/>)/g, " ")}
      </p>
    </li>
  );
};

export default Post;
