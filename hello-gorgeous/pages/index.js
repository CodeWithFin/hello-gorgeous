import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-[url('/hero.jpg')] bg-cover bg-center flex items-center">
        <div className="text-center w-full text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to Hello Gorgeous</h1>
          <p className="mt-4 text-lg">Book a makeup session & shop beauty essentials</p>
          <Link href="/booking">
            <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold">
              Book a Makeup Session
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Shop Our Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Sample Products */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img src="/lipstick.jpg" alt="Lipstick" className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-medium mt-4">Luxury Matte Lipstick</h3>
            <p className="text-pink-600 font-semibold mt-2">$19.99</p>
            <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg">"The best makeup experience ever! Highly recommended!"</p>
          <p className="text-center font-semibold mt-2">- Jane Doe</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
