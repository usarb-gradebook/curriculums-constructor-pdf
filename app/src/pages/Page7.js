import React from "react";
import { useState } from "react";
import "../App.css";

const Page5 = () => {
  const [DocsInfo, setDocsInfo] = useState({
    learningStrategiesOne:
      "Pentru a asigura o învățare eficientă în cadrul unității de curs Proiectarea paginilor web, se utilizează strategii/metode de predare și învățare variate și adaptate nevoilor și stilurilor de învățare ale studenților precum: metode interactive de predare; utilizarea tehnologiei și a resurselor online; dezbaterea și colaborarea în echipă; feedback și evaluare formativă; legătura cu aplicațiile practice; dezvoltarea de proiecte practice; folosirea resurselor multimedia, lucrarea de laborator etc.",
    learningStrategiesTwo:
      "Lucrarea de laborator este o strategie de învățare valoroasă în cadrul unității de curs Proiectarea paginilor web, oferă studenților oportunitatea de a aplica cunoștințele teoretice într-un mediu practic și de a dezvolta abilități practice esențiale în domeniul securității informațiilor. Permit studenților să aplice conceptele teoretice în soluționarea problemelor practice din domeniul securității sistemelor informatice, facilitează înțelegerea mai profundă și mai concretă a subiectului, oferă oportunitatea de a învăța prin experiență directă, permițând studenților să experimenteze, să testeze și să exploreze diferite scenarii și soluții într-un mediu controlat și sigur. Lucrările de laborator stimulează gândirea critică și creativă a studenților, punându-i în fața unor provocări și probleme complexe de securitate pe care trebuie să le rezolve prin abordări inovatoare și soluții originale.",
    learningStrategiesThree:
      "Prin intermediul lucrărilor de laborator, studenții pot consolida cunoștințele și abilitățile dobândite în cadrul cursului, permițându-le să-și pună în aplicare în mod practic înțelegerea și să-și îmbunătățească competențele în domeniul securității informațiilor.",
    learningStrategiesFour:
      "Prin utilizarea acestor strategii de predare și de învățare în cadrul cursului proiectarea paginilor web, se creează un mediu de învățare stimulativ și eficient, care să încurajeze implicarea și să faciliteze atât dezvoltarea competențelor profesionale, cât  și transversale esențiale pentru studenții din domeniul securității informațiilor.",
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };
  return (
    <div className="title-container">
      <p className="title, bold">Strategii/metode de predare și învățare</p>
      <p>
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("learningStrategiesOne", e.target.innerText)
          }
        >
          {DocsInfo.learningStrategiesOne}
        </span>
      </p>
      <p>
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("learningStrategiesTwo", e.target.innerText)
          }
        >
          {DocsInfo.learningStrategiesTwo}
        </span>
      </p>
      <p>
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("learningStrategiesThree", e.target.innerText)
          }
        >
          {DocsInfo.learningStrategiesThree}
        </span>
      </p>
      <p>
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("learningStrategiesFour", e.target.innerText)
          }
        >
          {DocsInfo.learningStrategiesFour}
        </span>
      </p>
    </div>
  );
};

export default Page5;
