import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Hello Gorgeous
        </Link>
        <div>
          <Link href="/shop" className="mx-4 text-gray-700 hover:text-pink-600">
            Shop
          </Link>
          <Link href="/booking" className="mx-4 text-gray-700 hover:text-pink-600">
            Book Makeup
          </Link>
          <Link href="/account" className="mx-4 text-gray-700 hover:text-pink-600">
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
}
