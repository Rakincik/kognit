import { why } from "../data/why";

export default function WhySection() {
  return (
    <section id="neden" className="container">
      <h2 className="section-title">Neden Kognita?</h2>

      <div className="program-grid">
        {why.map((item, i) => (
          <div key={i} className="program-card">
            <h3>⭐ {item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
