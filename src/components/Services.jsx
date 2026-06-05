import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: '🪳',
    title: 'Cockroach Control',
    description:
      'Targeted gel bait and spray treatments that eliminate cockroach infestations at source — kitchen, bathroom, and drainage included.',
    featured: false,
  },
  {
    icon: '🐜',
    title: 'Termite (Anti-Termite)',
    description:
      'Pre- and post-construction anti-termite treatments protecting your property\u2019s structural integrity with long-lasting chemical barriers.',
    featured: true,
  },
  {
    icon: '🦟',
    title: 'Mosquito Control',
    description:
      'Fogging, larvicidal, and residual spraying to eliminate mosquitoes and protect your family from dengue and malaria vectors.',
    featured: false,
  },
  {
    icon: '🐀',
    title: 'Rodent Management',
    description:
      'Bait stations, trapping systems, and entry-point sealing to keep rats and mice away from your home and food stores.',
    featured: false,
  },
  {
    icon: '🛏️',
    title: 'Bed Bug Treatment',
    description:
      'Heat and chemical treatments to completely eradicate bed bug infestations from mattresses, furniture, and walls.',
    featured: false,
  },
  {
    icon: '🏢',
    title: 'Commercial Services',
    description:
      'Customised AMC contracts for offices, restaurants, hospitals, and warehouses — FSSAI compliant with regular audit reports.',
    featured: false,
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-header reveal">
        <span className="section-label">What We Do</span>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: 'Comprehensive Pest<br>Control Solutions',
          }}
        />
        <p className="section-sub">
          From residential homes to commercial establishments, we deliver
          science-backed pest management solutions tailored to your specific
          needs — safe, effective, and long-lasting.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className={`service-card reveal${service.featured ? ' service-card--featured' : ''}`}
            key={index}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#contact" className="service-link">
              Book Treatment <span className="service-link-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
