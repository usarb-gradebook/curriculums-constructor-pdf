import React from "react";
import { useState } from "react";
import "../App.css";

const Page3 = () => {
  const [DocsInfo, setDocsInfo] = useState({
    specialitate: "0613.4 Informatică",
    facultySmall: "Științe Reale, Economice și ale Mediului",
    department: "Matematică și Informatică",
    nameCourse: "061 Tehnologii ale informației și comunicațiilor",
    nameTraining: "0613 Dezvoltarea produselor program și a aplicațiilor",
    tableOne: "S.010004",
    tableTwo: "5",
    tableThree: "150",
    tableFour: "30",
    tableFive: "0",
    tableSix: "45",
    tableSeven: "75",
    tableEight: "Examen",
    tableNine: "Română, Rusă, Engleză",
    halfYear: "Anul II, Semestrul 4",
    studyMode: "Învățământ cu frecvență",
    typeCourse: "Obligatorie",
    categoryFormat: "De orientare spre o specialitate",
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };
  return (
    <div className="title-container">
      <p className="bold">Informaţii de identificare a unității de curs</p>
      <p className="bold">
        Facultatea:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("facultySmall", e.target.innerText)}
        >
          {DocsInfo.facultySmall}
        </span>
      </p>
      <p className="bold">
        Catedra:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("department", e.target.innerText)}
        >
          {DocsInfo.department}
        </span>
      </p>
      <p className="bold">
        Codul și denumirea domeniului general de studiu:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("nameCourse", e.target.innerText)}
        >
          {DocsInfo.nameCourse}
        </span>
      </p>
      <p className="bold">
        Codul și denumirea domeniului de formare profesională:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("nameTraining", e.target.innerText)}
        >
          {DocsInfo.nameTraining}
        </span>
      </p>
      <p className="bold">
        Codul și denumirea specialității:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("specialitate", e.target.innerText)}
        >
          {DocsInfo.specialitate}
        </span>
      </p>
      <p className="bold">Administrarea unității de curs</p>
      <h1>Curriculum</h1>
      {/*Table*/}
      <table>
        <tr>
          <th rowspan="2">Codul unității de curs</th>
          <th rowspan="2">Nr. de credite ECTS</th>
          <th rowspan="2">Total ore</th>
          <th colspan="4">Repartizarea orelor</th>
          <th rowspan="2">Forma de evaluare</th>
          <th rowspan="2">Limba de instruire</th>
        </tr>
        <tr>
          <th>Curs</th>
          <th>Seminar</th>
          <th>Laborator</th>
          <th>Lucrul individual al studentului</th>
        </tr>
        <tr>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableOne", e.target.innerText)}
            >
              {DocsInfo.tableOne}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableTwo", e.target.innerText)}
            >
              {DocsInfo.tableTwo}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableThree", e.target.innerText)}
            >
              {DocsInfo.tableThree}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableFour", e.target.innerText)}
            >
              {DocsInfo.tableFour}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableFive", e.target.innerText)}
            >
              {DocsInfo.tableFive}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableSix", e.target.innerText)}
            >
              {DocsInfo.tableSix}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableSeven", e.target.innerText)}
            >
              {DocsInfo.tableSeven}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableEight", e.target.innerText)}
            >
              {DocsInfo.tableEight}
            </span>
          </td>
          <td>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("tableNine", e.target.innerText)}
            >
              {DocsInfo.tableNine}
            </span>
          </td>
        </tr>
      </table>
      {/*End of Table*/}
      <p className="bold">
        Anul de studiu și semestrul în care se studiază:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("halfYear", e.target.innerText)}
        >
          {DocsInfo.halfYear}
        </span>
      </p>
      <p className="bold">
        Forma de organizare a învățământului:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("studyMode", e.target.innerText)}
        >
          {DocsInfo.studyMode}
        </span>
      </p>
      <p className="bold">
        Regimul unității de curs:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("typeCourse", e.target.innerText)}
        >
          {DocsInfo.courseType}
        </span>
      </p>
      <p className="bold">
        Categoria formativă:{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("categoryFormat", e.target.innerText)}
        >
          {DocsInfo.categoryFormat}
        </span>
      </p>
    </div>
  );
};

export default Page3;
