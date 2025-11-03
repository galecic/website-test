"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" data-section="hero">
      <div>
        <header>
          <h1>Compassionate Healthcare for Your Entire Family</h1>
          <p>Providing comprehensive medical services with a personal touch. Our experienced team is here to keep you and your loved ones healthy.</p>
        </header>

        <nav>
          <Link href="/contact" className="primary-cta">
            Book Appointment
          </Link>
          <Link href="/about" className="secondary-cta">
            Learn More
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Hero;