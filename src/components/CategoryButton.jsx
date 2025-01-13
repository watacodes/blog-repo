const CategoryButton = ({ category }) => {
  return (
    <button
      type="button"
      className="px-2 py-1 mx-2 border border-blue-500 rounded-sm text-blue-500 text-sm"
    >
      {category}
    </button>
  );
};

export default CategoryButton;
