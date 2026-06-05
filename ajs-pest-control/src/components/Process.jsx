import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Book Inspection',
    desc: 'Call us or fill the form to schedule a free inspection at your convenience.',
  },
  {
    number: '02',
    title: 'Free Assessment',
    desc: 'Our certified technician inspects your property and identifies the pest type, severity, and source.',
  },
  {
    number: '03',
    title: 'Treatment Day',
    desc: 'We apply targeted, safe treatments customised to your pest problem and property layout.',
  },
  {
    number: '04',
    title: 'Follow-Up & Warranty',
    desc: 'A follow-up visit is scheduled to ensure complete elimination, backed by our service warranty.',
  },
];

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <span className="section-label">How It Works</span>
        <h2 className="process-title">Four Simple Steps to a Pest-Free Home</h2>
      </div>

      <div className="process-steps">
        <div className="steps-line" />
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number-wrap">
              <span className="step-number">{step.number}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
