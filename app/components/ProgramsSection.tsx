"use client";
import { programs } from "../data/programs";
import { useState } from "react";
import Modal from "./Modal";

export default function ProgramsSection() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section id="programlar" className="container">
        <h2 className="section-title">Programlarımız</h2>

        <div className="program-grid">
          {programs.map((p) => (
            <div key={p.id} className="program-card" onClick={() => setModal(p)}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {modal && <Modal data={modal} close={() => setModal(null)} />}
    </>
  );
}
