import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ScrollUp from "@/components/Common/ScrollUp";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunrise Medical Clinic | Family Healthcare in Springfield, CA",
  description: "Comprehensive family healthcare in Springfield, CA. Primary care, pediatrics, women's health, and urgent care services. Schedule your appointment today.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}