import React from "react";
import { useState } from "react";
import "../App.css";

const Page6 = () => {
  const [DocsInfo, setDocsInfo] = useState({
    chapterP1: "CP2.",
    infoTableTwo:
      "Subiectele de studiu la lucrările de laborator, reflectate în tabel, sunt însoţite de materialul teoretic corespunzător. Studenţii, înainte de a efectua o lucrare de laborator, studiază materialul teoretic respectiv plasat în diverse locuri disponibil tuturor: platforma GitHub; poșta electronică comună a grupei academice etc. Aceștia îndeplinesc lucrările de laborator conform indicaţiilor metodice şi le prezintă profesorului în termenul stabilit. Din start, studenții își crează conturi pe platforma GitHub și au acces liber la cursul respectiv și la toate materialele aferente acestuia. Printre aceste materiale sunt incluse activităţi interactive, lucrări de laborator însoțite de diverse cerinţe, temele pentru lucrul individual etc.",
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };
  return (
    <div className="title-container">
      <table border="1">
        <thead>
          <tr>
            <th>Nr. d/o</th>
            <th>Subiectele de studiu</th>
            <th>Nr. de ore</th>
          </tr>
        </thead>
        <tbody>
          {/* 1 */}
          <tr>
            <td>1</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_1", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_1"] ||
                  "Utilizarea editorarelor de cod: Visual Studio Code. Code Sandbox etc."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_1", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_1"] || 2}
              </span>
            </td>
          </tr>
          {/* 2 */}
          <tr>
            <td>2</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_2", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_2"] ||
                  "Utilizarea platformei GitHub. Crearea contului și publicarea codului sursă."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_2", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_2"] || 2}
              </span>
            </td>
          </tr>
          {/* 3 */}
          <tr>
            <td>3</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_3", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_3"] ||
                  "Crearea unui fișier HTML. Practici eficiente de formatare a codului."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_3", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_3"] || 2}
              </span>
            </td>
          </tr>
          {/* 4 */}
          <tr>
            <td>4</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_4", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_4"] ||
                  "Arborele DOM. Tabele. Hyperlinkuri. Imagini. Liste. Crearea machetului paginii."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_4", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_4"] || 2}
              </span>
            </td>
          </tr>
          {/* 5 */}
          <tr>
            <td>5</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_5", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_5"] || "Validarea documentului HTML"}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_5", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_5"] || 2}
              </span>
            </td>
          </tr>
          {/* 6 */}
          <tr>
            <td>6</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_6", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_6"] ||
                  "Metode de conectare a stilurilor CSS în pagină. Foi de stiluri și fișiere CSS."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_6", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_6"] || 2}
              </span>
            </td>
          </tr>
          {/* 7 */}
          <tr>
            <td>2</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_7", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_7"] || "Sintaxa CSS. Standarde CSS."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_7", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_7"] || 2}
              </span>
            </td>
          </tr>
          {/* 8 */}
          <tr>
            <td>8</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_8", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_8"] ||
                  "Selectori și proprietăți. Valorile proprietăților. Clase CSS."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_8", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_8"] || 2}
              </span>
            </td>
          </tr>
          {/* 9 */}
          <tr>
            <td>2</td>
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
                  "Aplicarea stilurilor CSS unuia sau mai multor elemente. Selectori compuși. Setarea proprietăților fundalului."}
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
                {DocsInfo["hoursTableTwo_9"] || 2}
              </span>
            </td>
          </tr>
          {/* 10 */}
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
                {DocsInfo["subjectTableTwo_10"] ||
                  "Aplicarea stilurilor CSS unuia sau mai multor elemente. Selectori compuși. Setarea proprietăților fundalului."}
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
                {DocsInfo["hoursTableTwo_10"] || 2}
              </span>
            </td>
          </tr>
          {/* 11 */}
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
                {DocsInfo["subjectTableTwo_11"] ||
                  "Crearea sarcinii tehnice pentru realizarea unui site web."}
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
                {DocsInfo["hoursTableTwo_11"] || 2}
              </span>
            </td>
          </tr>
          {/* 12 */}
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
                  "Machetarea paginii cu utilizarea CSS Flexbox"}
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
                {DocsInfo["hoursTableTwo_12"] || 2}
              </span>
            </td>
          </tr>
          {/* 13 */}
          <tr>
            <td>2</td>
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
                  "Machetarea paginii cu utilizarea CSS Grid."}
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
                {DocsInfo["hoursTableTwo_13"] || 2}
              </span>
            </td>
          </tr>
          {/* 14 */}
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
                  "Utilizarea instrumentului Figma(figma.com)."}
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
                {DocsInfo["hoursTableTwo_14"] || 2}
              </span>
            </td>
          </tr>
          {/* 15 */}
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
                  "Machetarea pe pași a unui design."}
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
                {DocsInfo["hoursTableTwo_15"] || 2}
              </span>
            </td>
          </tr>
          {/* 16 */}
          <tr>
            <td>16</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_16", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_16"] ||
                  "CSS media queries. Crearea machetelor de tip fixat, fluid, responsiv și adaptiv."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_16", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_16"] || 2}
              </span>
            </td>
          </tr>
          {/* 17 */}
          <tr>
            <td>15</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_17", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_17"] ||
                  "Crearea designului adaptiv pentru dispozitive mobile."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_17", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_17"] || 2}
              </span>
            </td>
          </tr>
          {/* 18 */}
          <tr>
            <td>15</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_18", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_18"] ||
                  "MPreprocesoare CSS. Sass, Less."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_18", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_18"] || 2}
              </span>
            </td>
          </tr>
          {/* 19 */}
          <tr>
            <td>19</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_19", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_19"] ||
                  "Pseudo selectori CSS. CSS animation."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_19", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_19"] || 2}
              </span>
            </td>
          </tr>
          {/* 20 */}
          <tr>
            <td>20</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_20", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_20"] ||
                  "Utilizarea frameworkurilor CSS la machetarea paginilor."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_20", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_20"] || 2}
              </span>
            </td>
          </tr>
          {/* 21 */}
          <tr>
            <td>21</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_21", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_21"] ||
                  "Utilizarea Framework-ul Tailwind. Componente."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_21", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_21"] || 2}
              </span>
            </td>
          </tr>
          {/* 22 */}
          <tr>
            <td>22</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_22", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_22"] ||
                  "Utilizarea Framework-ul Bootstrap. Componente."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_22", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_22"] || 2}
              </span>
            </td>
          </tr>
          {/* 23 */}
          <tr>
            <td>23</td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("subjectTableTwo_23", e.target.innerText)
                }
              >
                {DocsInfo["subjectTableTwo_23"] ||
                  "Publicarea proiectului în internet pe platformele Vercel, Firebase, etc."}
              </span>
            </td>
            <td>
              <span
                className="editable underline"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  EditInformation("hoursTableTwo_23", e.target.innerText)
                }
              >
                {DocsInfo["hoursTableTwo_23"] || 2}
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <strong>Total</strong>
            </td>
            <td>
              <strong>45</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => EditInformation("infoTableTwo", e.target.innerText)}
        >
          {DocsInfo.infoTableTwo}
        </span>
      </p>
    </div>
  );
};

export default Page6;
