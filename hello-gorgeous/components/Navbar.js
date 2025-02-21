import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-pink-600 cursor-pointer">Hello Gorgeous</h1>
        </Link>
        <div>
          <Link href="/shop">
            <a className="mx-4 text-gray-700 hover:text-pink-600">Shop</a>
          </Link>
          <Link href="/booking">
            <a className="mx-4 text-gray-700 hover:text-pink-600">Book Makeup</a>
          </Link>
          <Link href="/account">
            <a className="mx-4 text-gray-700 hover:text-pink-600">Account</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
