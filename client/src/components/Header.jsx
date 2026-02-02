import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-12 bg-gray-200">
      <h1>Daare Restaurant</h1>

      <nav className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Our Menu</Link>
      </nav>
    </div>
  );
}
