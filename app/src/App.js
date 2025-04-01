import React, { useState } from "react";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import { pdf } from "@react-pdf/renderer";
import WebToPdf from "../src/pages/WebToPdf";
import "./App.css";

function App() {
  const [DocsInfo, setDocsInfo] = useState({
    facultate: "FACULTATEA DE ȘTIINȚE REALE, ECONOMICE ȘI ALE MEDIULUI",
    catedra: "CATEDRA DE MATEMATICĂ ȘI INFORMATICĂ",
    unitateCurs: "Proiectarea paginilor Web",
    specialitate: "0613.4 Informatică",
    ciclu: "I",
    studii: "superioare de licență",
    invatamant: "cu frecvență",
    autor1: "dr. conf. univ., Ghenadie CABAC",
    autor2: "asist. univ., Sergiu CHILAT",
    locSiAn: "BĂLȚI, 2025",
    procesNumber: "nr. 123",
    procesDate: "11.02.2025",
    assistUniv: "asist. univ.",
    nameTeacher: "Vitalie ŢÎCĂU",
    nameFaculty: "Facultății de Ştiinţe Reale, Economice și ale Mediului",
    nameDecan: "Ina CIOBANU",
    nameTeacherCreator: "Sergiu CHILAT",
    university: "USARB",
    year: "2025",
    facultySmall: "Științe Reale, Economice și ale Mediului",
    department: "Matematică și Informatică",
    nameCourse: "061 Tehnologii ale informației și comunicațiilor",
    nameTraining: "0613 Dezvoltarea produselor program și a aplicațiilor",
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };

  const GeneratePDF = async () => {
    const blob = await pdf(<WebToPdf data={DocsInfo} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Curriculum.pdf";
    a.click();
  };

  return (
    <div className="pdf-preview-style">
      <div className="title-container">
        <p className="bold">
          MINISTERUL EDUCAȚIEI ȘI CERCETĂRII AL REPUBLICII MOLDOVA
        </p>
        <p className="bold">UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI</p>
        <p
          className="bold editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("facultate", e.target.innerText)}
        >
          {DocsInfo.facultate}
        </p>
        <p
          className="bold editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("catedra", e.target.innerText)}
        >
          {DocsInfo.catedra}
        </p>
      </div>
      <div className="curiculum-container-center">
        <h2 className="center bold">CURRICULUM</h2>
        <p className="center">la unitatea de curs</p>
        <h2
          className="center bold editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("unitateCurs", e.target.innerText)}
        >
          {DocsInfo.unitateCurs}
        </h2>
        <p className="center">
          pentru studenții de la specialitatea{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("specialitate", e.target.innerText)}
          >
            {DocsInfo.specialitate}
          </span>
        </p>
        <p className="center">
          Ciclul{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("ciclu", e.target.innerText)}
          >
            {DocsInfo.ciclu}
          </span>
          , studii{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("studii", e.target.innerText)}
          >
            {DocsInfo.studii}
          </span>
          , învățământ{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("invatamant", e.target.innerText)}
          >
            {DocsInfo.invatamant}
          </span>
        </p>
      </div>
      <div className="authors">
        <div className="authors-container">
          <div className="authors-title">
            <p className="bold">Autorii:</p>
          </div>
          <div className="authors-content">
            <div className="author">
              <p
                className="editable"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => EditInformation("autor1", e.target.innerText)}
              >
                {DocsInfo.autor1}
              </p>
            </div>
            <div className="author">
              <p
                className="editable"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => EditInformation("autor2", e.target.innerText)}
              >
                {DocsInfo.autor2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="city-container">
        <p
          className="bold center-city editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("locSiAn", e.target.innerText)}
        >
          {DocsInfo.locSiAn}
        </p>
      </div>
      {/* Page 2 */}
      <hr className="page-break" />
      <div className="title-container">
        <p className="center">
          Discutat şi aprobat în şedinţa Catedrei de matematică şi informatică
        </p>
        <p className="center">
          Procesul-verbal{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("procesNumber", e.target.innerText)}
          >
            {DocsInfo.procesNumber}
          </span>{" "}
          din{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("procesDate", e.target.innerText)}
          >
            {DocsInfo.procesDate}
          </span>
        </p>
        <p className="center">
          Şeful Catedrei de matematică şi informatică ______________{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("assistUniv", e.target.innerText)}
          >
            {DocsInfo.assistUniv}
          </span>{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameTeacher", e.target.innerText)}
          >
            {DocsInfo.nameTeacher}
          </span>
        </p>
        <p className="center">
          Analizat și recomandat în ședința Comisiei metodice a{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameFaculty", e.target.innerText)}
          >
            {DocsInfo.nameFaculty}
          </span>
        </p>
        <p className="center">
          Procesul-verbal{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("procesNumber", e.target.innerText)}
          >
            {DocsInfo.procesNumber}
          </span>{" "}
          din{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("procesDate", e.target.innerText)}
          >
            {DocsInfo.procesDate}
          </span>
        </p>
        <p className="center">
          Președintele Comisiei metodice a Consiliului{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameFaculty", e.target.innerText)}
          >
            {DocsInfo.nameFaculty}
          </span>
          ______________{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameTeacher", e.target.innerText)}
          >
            {DocsInfo.nameTeacher}
          </span>
        </p>
        <p className="center">
          Discutat şi aprobat în şedinţa Consiliului{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameFaculty", e.target.innerText)}
          >
            {DocsInfo.nameFaculty}
          </span>
        </p>
        <p className="center">
          Procesul-verbal{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("procesNumber", e.target.innerText)}
          >
            {DocsInfo.procesNumber}
          </span>{" "}
          din{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("procesDate", e.target.innerText)}
          >
            {DocsInfo.procesDate}
          </span>
        </p>
        <p className="center">
          Decanul{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameFaculty", e.target.innerText)}
          >
            {DocsInfo.nameFaculty}
          </span>{" "}
          ______________{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("nameDecan", e.target.innerText)}
          >
            {DocsInfo.nameDecan}
          </span>
        </p>
        <p className="center">
          ©{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              EditInformation("nameTeacherCreator", e.target.innerText)
            }
          >
            {DocsInfo.nameTeacherCreator}
          </span>{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("university", e.target.innerText)}
          >
            {DocsInfo.university}
          </span>{" "}
          <span
            className="editable underline"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => EditInformation("year", e.target.innerText)}
          >
            {DocsInfo.year}
          </span>
        </p>
      </div>
      {/* Page 3 */}
      <hr className="page-break" />
      <Page3 />
      {/* Page 4 */}
      <hr className="page-break" />
      <Page4 />
      {/* Page 5 */}
      <hr className="page-break" />
      <Page5 />
      {/* Page 6 */}
      <hr className="page-break" />
      <Page6 />
      {/* Page 7 */}
      <hr className="page-break" />
      <Page7 />
      {/* Test */}
      <button onClick={GeneratePDF}>Descarcă PDF</button>
    </div>
  );
}

export default App;
