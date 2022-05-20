import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="container mx-auto flex justify-between items-center px-6 sm:p-0">
        <Link to="/" className="font-mono text-lg sm:text-xl py-2 font-medium">
          Stockography_
        </Link>

        <a href="https://pixabay.com">by pixabay</a>
      </nav>
    </header>
  );
}

export default Header;
