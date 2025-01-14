import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white flex justify-between items-center p-6 font-bold">
      <Link to="/">Blog</Link>
      <Link to="/contact">お問い合わせ</Link>
    </header>
  );
};

export default Header;
