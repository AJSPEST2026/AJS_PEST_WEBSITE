import { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Suresh Rao',
    initials: 'SR',
    location: 'Jayanagar',
    text: 'AJS completely rid our apartment in Jayanagar of cockroaches. The team was professional, on time, and explained every step. No smell, no mess. Highly recommend!',
  },
  {
    name: 'Priya Menon',
    initials: 'PM',
    location: 'RR Nagar',
    text: "We've had an AMC with AJS for our restaurant in RR Nagar for 3 years now. Zero pest issues, all FSSAI reports are clean. They're reliable and genuinely good at their job.",
  },
  {
    name: 'Anil Kumar',
    initials: 'AK',
    location: 'JP Nagar',
    text: 'Termites had been eating through our wardrobes quietly. AJS detected it during their inspection and treated the whole house. Two years on — not a single termite. Worth every rupee.',
  },
];

function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.test-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('test-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-header test-reveal">
        <div className="testimonials-heading">
          <span className="section-label">Testimonials</span>
          <h2 className="testimonials-title">What Our Clients Say</h2>
        </div>
        <div className="rating-display">
          <span className="rating-score">4.9</span>
          <span className="rating-stars">★★★★★</span>
          <span className="rating-source">on Google</span>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card test-reveal" key={index}>
            <div className="card-stars">★★★★★</div>
            <p className="card-text">"{item.text}"</p>
            <div className="card-author">
              <div className="author-avatar">{item.initials}</div>
              <div className="author-info">
                <span className="author-name">{item.name}</span>
                <span className="author-location">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
