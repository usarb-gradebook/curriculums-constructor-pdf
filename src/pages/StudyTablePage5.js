import React from "react";
import { useState } from "react";
import "../App.css";

const StudyTablePage5 = () => {
  const [DocsInfo, setDocsInfo] = useState({});

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };

  return (
    <div className="table-container">
      {/* Table 1 */}
      <table border="1">
        <thead>
          <tr>
            <th>Nr. d/o</th>
            <th>Subiectele de studiu</th>
            <th>Nr. de ore</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_1", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_1"] ||
                  "Standarde HTML. Noțiuni de bază. Structura unui fișier HTML. Atribute. Elemente de marcare. Meta taguri. Caractere speciale și entități. Formatarea textului"}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_1", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_1"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_2", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_2"] ||
                  "Arborale DOM. Tabele. Hyperlinkuri. Imagini. Liste. Crearea machetului paginii"}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_2", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_2"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_3", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_3"] ||
                  "Comentarii. Formulare. Structura semantică a documentului conform standardului HTML5. Validarea documentului."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_3", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_3"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_4", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_4"] ||
                  "Publicarea proiectului în internet. Instrumentul DevTools."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_4", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_4"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_5", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_5"] ||
                  "Publicarea codului sursă pe platforma GitHub"}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_5", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_5"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_6", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_6"] ||
                  "Sintaxa CSS. Standarde CSS. Selectori și proprietăți. Valorile proprietăților."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_6", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_6"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_7", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_7"] ||
                  "Metode de conectare a stilurilor CSS în pagină. Clase CSS. Fișiere de stiluri."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_7", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_7"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableOne_8", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableOne_8"] ||
                  "Aplicarea stilurilor CSS unuia sau mai multor elemente. Selectori compuși. Setarea proprietăților fundalului."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableOne_8", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableOne_8"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <strong>Total</strong>
            </td>
            <td>
              <strong>15</strong>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Table 2 */}
      <table border="1">
        <thead>
          <tr>
            <th>Nr. d/o</th>
            <th>Subiectele de studiu</th>
            <th>Nr. de ore</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_9", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_9"] ||
                  "Pozitionarea elementelor în pagină."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_9", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_9"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_10", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_10"] || "CSS box model."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_10", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_10"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_11", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_11"] || "CSS Flexbox și CSS Grid."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_11", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_11"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_12", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_12"] ||
                  "CSS media queries. Crearea machetelor de tip fixat, fluid, responsiv și adaptiv."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_12", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_12"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_13", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_13"] ||
                  "Metode de stilizare a machetului paginii cu utilizarea CSS."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_13", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_13"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_14", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_14"] ||
                  "Pseudo selectori CSS. CSS animation."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_14", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_14"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_15", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_15"] ||
                  "Utilizarea frameworkurilor CSS la machetarea paginilor."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_15", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_15"] || "2"}
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <strong>Total</strong>
            </td>
            <td>
              <strong>30</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudyTablePage5;
