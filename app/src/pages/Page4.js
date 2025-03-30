import React from "react";
import { useState } from "react";
import "../App.css";

const Page4 = () => {
  const [DocsInfo, setDocsInfo] = useState({
    infoCourseUnitIntegration:
      "Unitatea de curs „Proiectarea paginilor web” este o disciplină de specialitate. Scopul studierii unității de curs „Proiectarea paginilor web” este de a dezvolta la studenți competențele necesare în proiectarea și machetarea paginilor web, cu implementarea tehnologiilor . 	Unitatea de curs „Proiectarea paginilor web” este o disciplină strâns legată cu disciplinele “Programare web I” și “Programare web II”, unde vor fi necesare competențele obținute pe parcursul studierii disciplinei.",
    nameCourseWeb: "Proiectarea paginilor web",
    nameCourseUnity:
      "Bazele programării, Structuri discrete, Informatica generală ",
    nameCourseWebDev: "dezvoltării aplicațiilor web",
    CapacityCourseUp:
      "dezvoltarea competenţelor digitale ce țin de proiectarea sistemelor informatice",
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };
  return (
    <div className="title-container">
      <p className="title, bold">
        Informaţii de identificare a unității de curs
      </p>
      <p>
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("infoCourseUnitIntegration", e.target.innerText)
          }
        >
          {DocsInfo.infoCourseUnitIntegration}
        </span>
      </p>
      <p className="title-container, bold">Exigențe și competențe prealabile</p>
      <p>
        Succesul în studierea unității de curs{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("nameCourseWeb", e.target.innerText)}
        >
          {DocsInfo.nameCourseWeb}
        </span>{" "}
        depinde de un set variat de cunoștințe, abilități și atitudini dobândite
        anterior la unităţile de curs studiate, iar pregătirea și motivația
        studenților sunt esențiale pentru a face față provocărilor și
        complexității acestui domeniu. Este destul de important ca studenții să
        aibă anumite exigențe și competențe prealabile ce țin de cunoștințe de
        bază în informatică, fundamente matematice, abilități de programare,
        comunicare și gândire critică etc.
      </p>{" "}
      <p>
        Studierea unității de curs menționate se bazează pe cunoştinţele,
        capacităţile şi competenţele dezvoltate în cadrul unităților de curs{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("nameCourseUnity", e.target.innerText)}
        >
          {DocsInfo.nameCourseUnity}
        </span>{" "}
        etc.
      </p>
      <p className="title-container, bold">
        Competențe profesionale și transversale dezvoltate în cadrul unității de
        curs
      </p>
      <p>
        În cadrul unității de curs{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("nameCourseWeb", e.target.innerText)}
        >
          {DocsInfo.nameCourseWeb}
        </span>{" "}
        studenții dezvoltă o serie de competențe profesionale și transversale
        esențiale pentru succesul lor în domeniul{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("nameCourseWebDev", e.target.innerText)
          }
        >
          {DocsInfo.nameCourseWebDev}
        </span>{" "}
        Prin conţinutul său şi activităţile de învăţare a studenţilor, această
        unitate de curs contribuie la{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) =>
            EditInformation("CapacityCourseUp", e.target.innerText)
          }
        >
          {DocsInfo.CapacityCourseUp}
        </span>
        .
      </p>
    </div>
  );
};

export default Page4;
