import './Marquee.css';

const marqueeItems = [
  'Cockroach Control',
  'Termite Treatment',
  'Mosquito Control',
  'Rodent Management',
  'Bed Bug Treatment',
  'Ant Control',
  'Spider Control',
  'Wood Borer Treatment',
  'Commercial Pest Management',
  'Residential Pest Control',
];

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
