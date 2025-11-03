import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" data-section="about-1">
      <div>
        <div>
          <div>
            <SectionTitle 
              title="About Sunrise Medical Clinic" 
              paragraph="Founded in 2005, Sunrise Medical Clinic has been serving the Springfield community with exceptional healthcare for over 18 years. Our mission is to provide compassionate, patient-centered care that addresses the unique needs of each individual and family we serve." 
            />

            <ul data-features-list="true">
              <li>
                <span>✓</span>
                Board-Certified Physicians
              </li>
              <li>
                <span>✓</span>
                State-of-the-Art Facility
              </li>
              <li>
                <span>✓</span>
                Same-Day Appointments
              </li>
              <li>
                <span>✓</span>
                On-Site Laboratory
              </li>
              <li>
                <span>✓</span>
                Most Insurance Plans Accepted
              </li>
              <li>
                <span>✓</span>
                Extended Hours & Weekend Availability
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="/images/about/clinic-exterior.jpg"
              alt="Sunrise Medical Clinic Building"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;