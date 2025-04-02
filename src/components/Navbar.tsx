import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Roam a Country</h1>
      <Link href={`/`}>Home</Link>
      </div>
    </nav>
  );
}