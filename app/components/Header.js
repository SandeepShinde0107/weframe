"use client"; // Add this at the top of the file

import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the navigation menu

  return (
    <header className="bg-white shadow-md">
      {/* Top Section: Logo, Search, and Actions */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
            weframetech
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden lg:block relative w-full max-w-lg mx-8">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-black placeholder-gray-400"
          />
          <button className="absolute top-2 right-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            🔍
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300 text-sm"
          >
            💡 Inspirations
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300 text-sm"
          >
            ❤️ Mes favoris
            <span className="ml-1 text-xs bg-gray-200 px-2 py-1 rounded-full">
              24
            </span>
          </a>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 text-sm">
            🛒 Panier
          </button>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500">👤</span>
          </div>
          <select className="bg-transparent text-gray-600 hover:text-gray-800 outline-none">
            <option value="FR">FR</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="container mx-auto px-6 py-2 block lg:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-black placeholder-gray-400"
          />
          <button className="absolute top-2 right-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            🔍
          </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav
        className={`bg-gray-50 border-t border-gray-200 ${menuOpen ? "block" : "hidden"} lg:block`}
      >
        <ul className="container mx-auto flex flex-wrap justify-between px-6 py-3 text-gray-600 text-sm font-medium">
          <li className="text-blue-500 font-bold">ART DE LA TABLE</li>
          <li className="hover:text-gray-800 transition duration-300">MOBILIER</li>
          <li className="hover:text-gray-800 transition duration-300">NAPPAGE</li>
          <li className="hover:text-gray-800 transition duration-300">MATÉRIEL DE SALLE</li>
          <li className="hover:text-gray-800 transition duration-300">CUISINE</li>
          <li className="hover:text-gray-800 transition duration-300">BARBECUE</li>
          <li className="hover:text-gray-800 transition duration-300">TENTE</li>
          <li className="hover:text-gray-800 transition duration-300">CHAUFFAGE</li>
          <li className="hover:text-gray-800 transition duration-300">PODIUM - PISTE DE DANSE</li>
          <li className="hover:text-gray-800 transition duration-300">SON ET LUMIÈRE</li>
          <li className="hover:text-gray-800 transition duration-300">PACKS</li>
          <li className="hover:text-gray-800 transition duration-300">CONSUMMABLES</li>
        </ul>
      </nav>
    </header>
  );
}
