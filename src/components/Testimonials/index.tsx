"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Martinez",
    designation: "Patient since 2018",
    content: "The care I've received at Sunrise Medical has been exceptional. Dr. Johnson took the time to listen to my concerns and developed a treatment plan that really works for me.",
    image: "/images/testimonials/patient-1.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Robert Thompson",
    designation: "Family Patient",
    content: "We've been bringing our kids here for years. Dr. Chen is amazing with children, and the staff is always friendly and professional. Highly recommend!",
    image: "/images/testimonials/patient-2.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Lisa Anderson",
    designation: "New Patient",
    content: "I was nervous about finding a new doctor after moving to the area, but Sunrise Medical made the transition seamless. Great communication and excellent care.",
    image: "/images/testimonials/patient-3.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section data-section="testimonials">
      <div>
        <SectionTitle 
          title="What Our Patients Say" 
          paragraph="Hear from our valued patients about their experiences at Sunrise Medical Clinic." 
        />

        <div data-grid="testimonials">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;