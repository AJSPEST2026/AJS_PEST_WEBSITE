import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        {/* Left Column */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Bangalore&rsquo;s #1 Pest Management
          </div>

          <h1 className="hero__title">
            Protect Your<br />
            Home From<br />
            <em>Every Pest</em>
          </h1>

          <p className="hero__desc">
            Care of your Health, Property &amp; Environment. Professional pest
            control solutions for homes and businesses across Bengaluru — safe,
            certified, and guaranteed.
          </p>

          <div className="hero__buttons">
            <a href="tel:+919035493416" className="hero__btn hero__btn--primary">
              📞 Get Free Inspection
            </a>
            <a href="#services" className="hero__btn hero__btn--outline">
              Our Services →
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">10K+</span>
              <span className="hero__stat-label">Homes Treated</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">15yr</span>
              <span className="hero__stat-label">Experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">98%</span>
              <span className="hero__stat-label">Success Rate</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero__right">
          <div className="hero__image-wrap">
            <img
              src="/images/hero-main.png"
              alt="AJS Pest Control technician treating a Bangalore apartment"
              className="hero__image"
              loading="eager"
            />

            {/* Floating Badge — Certified */}
            <div className="hero__float hero__float--cert">
              <span className="hero__float-icon">🛡️</span>
              <div>
                <strong>ISO Certified</strong>
                <span>Safe for Family &amp; Pets</span>
              </div>
            </div>

            {/* Floating Badge — Rating */}
            <div className="hero__float hero__float--rating">
              <div className="hero__float-stars">★★★★★</div>
              <strong>4.9 / 5.0</strong>
              <span>Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
