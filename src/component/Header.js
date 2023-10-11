import React from 'react'
import { SiGoogleearth } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-white text-gray-700 py-4 border-gray-200 border-b fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto text-center flex justify-center items-center">
        <SiGoogleearth className=" text-blue-900 text-4xl" />
        <h1 className="font-bold text-4xl pl-4">
          Infinite scroll implementation
        </h1>
      </div>
    </header>
  );
}

export default Header
