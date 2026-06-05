import { useEffect, useRef } from 'react';
import './WhyUs.css';

const features = [
  {
    title: 'Govt. Certified Technicians',
    desc: 'All our team members are licensed by PCAI and trained in the latest integrated pest management protocols.',
  },
  {
    title: 'Child & Pet Safe Chemicals',
    desc: 'We use WHO-approved, odourless formulations that are safe for your family, pets, and the environment.',
  },
  {
    title: 'Guaranteed Results',
    desc: 'Free re-treatment within the warranty period if pests return. No questions asked.',
  },
  {
    title: 'Same-Day Emergency Service',
    desc: "Call before noon and we'll be at your doorstep the same day — guaranteed.",
  },
];

function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealEls = section.querySelectorAll('.why-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('why-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="why-section" ref={sectionRef}>
      <div className="why-grid">
        {/* Left Column */}
        <div className="why-content">
          <span className="section-label why-reveal">Why Choose AJS</span>
          <h2 className="why-title why-reveal">
            Trusted by 10,000+
            <br />
            Bangalore Families
          </h2>
          <p className="why-subtitle why-reveal">
            With over 20 years of experience protecting homes and businesses
            across Bangalore, we combine expertise with care to deliver
            pest-free living spaces.
          </p>

          <div className="why-features">
            {features.map((feature, index) => (
              <div className="why-feature-item why-reveal" key={index}>
                <div className="feature-check">
                  <span>✓</span>
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="why-images why-reveal">
          <div className="image-stack">
            <img
              src="/images/why-service.png"
              alt="AJS Pest Control service van at a Bangalore apartment complex"
              className="stack-img img-1"
            />
            <img
              src="/images/technician.png"
              alt="AJS pest control technician in Bangalore neighborhood"
              className="stack-img img-2"
            />
            <div className="gold-pill">Serving Bangalore since 2009</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
