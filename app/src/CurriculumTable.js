import React from "react";

const CurriculumTable = ({ DocsInfo, EditInformation }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border border-black border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2">
              Codul unității de curs
            </th>
            <th className="border border-black px-4 py-2">
              Nr. de credite ECTS
            </th>
            <th className="border border-black px-4 py-2">Total ore</th>
            <th colSpan="4" className="border border-black px-4 py-2">
              Repartizarea orelor
            </th>
            <th className="border border-black px-4 py-2">Forma de evaluare</th>
            <th className="border border-black px-4 py-2">
              Limba de instruire
            </th>
          </tr>
          <tr className="bg-gray-100">
            <td colSpan="3" className="border border-black"></td>
            <th className="border border-black px-4 py-2">Curs</th>
            <th className="border border-black px-4 py-2">Seminar</th>
            <th className="border border-black px-4 py-2">Laborator</th>
            <th className="border border-black px-4 py-2">
              Lucrul individual al studentului
            </th>
            <td colSpan="2" className="border border-black"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("codCurs", e.target.innerText)}
            >
              {DocsInfo.codCurs}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("credite", e.target.innerText)}
            >
              {DocsInfo.credite}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("totalOre", e.target.innerText)}
            >
              {DocsInfo.totalOre}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("curs", e.target.innerText)}
            >
              {DocsInfo.curs}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("seminar", e.target.innerText)}
            >
              {DocsInfo.seminar}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("laborator", e.target.innerText)}
            >
              {DocsInfo.laborator}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("individual", e.target.innerText)}
            >
              {DocsInfo.individual}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("evaluare", e.target.innerText)}
            >
              {DocsInfo.evaluare}
            </td>
            <td
              className="border border-black px-4 py-2 text-center editable underline"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => EditInformation("limba", e.target.innerText)}
            >
              {DocsInfo.limba}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurriculumTable;
