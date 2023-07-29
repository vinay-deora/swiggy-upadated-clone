import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cardItem = useSelector((store) => store.cart.items);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-14"
                src="https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-javanese-character-with-blangkon-holding-plate-for-food-restaurant-logo-vector-png-image_6599093.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/home"
                className="text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
                // onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
                // onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
                // onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/instamart"
                className="text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
                // onClick={closeMenu}
              >
                Instamart
              </Link>
              <Link
                to="/cart"
                className=" text-white block hover:text-orange-400 transition-all duration-300 ease-in-out"
                onClick={closeMenu}
              >
                Cart {cardItem.length === 0 ? null : ` - ${cardItem.length}`}
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 transition-all duration-300 ease-in-out focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 space-y-2  ">
            <Link
              to="/"
              className="block text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/instamart"
              className="block text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Instamart
            </Link>
            <Link
              to="/cart"
              className=" text-white block hover:text-orange-400 transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Cart {cardItem.length === 0 ? null : ` - ${cardItem.length}`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
