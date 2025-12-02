import { sss } from "../data/sss";

export default function SSSSection() {
  return (
    <section id="sss" className="container">
      <h2 className="section-title">Sık Sorulan Sorular</h2>

      {sss.map((item, i) => (
        <div key={i} className="sss-item">
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </section>
  );
}
