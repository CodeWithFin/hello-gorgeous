// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FeaturedProducts } from "@/components/products/featured-products";
import { ServiceShowcase } from "@/components/booking/service-showcase";
import { TestimonialSlider } from "@/components/shared/testimonial-slider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BlogPreview } from "@/components/shared/blog-preview";
import { StoreLocator } from "@/components/shared/store-locator";
import { PromoSection } from "@/components/shared/promo-section";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-beauty.jpg"
            alt="Hello Gorgeous Beauty"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <Container className="relative z-10 flex flex-col items-start justify-center h-full text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello Gorgeous
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">
            Elevate your beauty experience with premium makeup services and products
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Link href="/booking/services">Book a Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-700">
              <Link href="/products">Shop Products</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your look with our professional makeup services
            </p>
          </div>
          <ServiceShowcase />
          <div className="text-center mt-10">
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/booking/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of premium beauty products
            </p>
          </div>
          <FeaturedProducts />
          <div className="text-center mt-10">
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href="/products">Shop All Products</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Promo Section */}
      <PromoSection />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read reviews from our satisfied customers
            </p>
          </div>
          <TestimonialSlider />
        </Container>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Beauty Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tips, trends, and insights from our beauty experts
            </p>
          </div>
          <BlogPreview />
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Store Locator */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Visit Our Store</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our services in person and pick up your products
            </p>
          </div>
          <StoreLocator />
        </Container>
      </section>
    </main>
  );
}