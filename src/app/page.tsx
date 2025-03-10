"use client";

import About from "@/modules/landing/presentations/ui/about";
import ContactForm from "@/modules/landing/presentations/ui/contact-form";
import CallToAction from "@/modules/landing/presentations/ui/cta";
import FeaturedProducts from "@/modules/landing/presentations/ui/featured-products";
import Footer from "@/modules/landing/presentations/ui/footer";
import Header from "@/modules/landing/presentations/ui/header";
import Hero from "@/modules/landing/presentations/ui/hero";
import Testimonials from "@/modules/landing/presentations/ui/testimonials";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <ContactForm />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};