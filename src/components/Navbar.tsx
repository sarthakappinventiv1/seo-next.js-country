"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-indigo-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Roam a Country</h1>
        <div className="flex gap-x-4">
          {pathname !== "/" && (
            <Link
              href="/"
              className="bg-white text-indigo-900 font-medium px-4 py-2 rounded hover:bg-gray-100"
            >
              Home
            </Link>
          )}
          <Link
            href="/lokalise"
            className="bg-white text-indigo-900 font-medium px-4 py-2 rounded hover:bg-gray-100"
          >
            Lokalise Page
          </Link>
        </div>
      </div>
    </nav>
  );
}
