import React from "react";
import StudyTablePage5 from "./StudyTablePage5";
import { useState } from "react";
import "../App.css";

const Page5 = () => {
  const [DocsInfo, setDocsInfo] = useState({
    chapterP1: "CP2.",
    infoChapterP1:
      "Proiectarea si realizarea unui demers de cercetare prin abilități de control și inovație în domeniul informaticii și tehnologiilor informaționale",
    chapterP2: "CP3.",
    infoChapterP2:
      " Identificarea, analiza, aprecierea critică a relațiilor de cauzalitate și interdependență dintre diferite evenimente, procese tehnice, fenomene socio-economice.",
    chapterP3: "CP5.",
    infoChapterP3:
      "Proiectarea activităților de elaborare a produselor informatice, utilizând cunoștințele acumulate la studierea unităților de curs fundamentale și de specialitate.",
    chapterT1: "CT1.",
    infoChapterT1:
      "Aplicarea principiilor, normelor și valorilor eticii și deontologiei profesionale în cadrul propriei strategii de muncă, în situații specifice.",
    chapterT2: "CT2.",
    infoChapterT2:
      "Desfășurarea eficientă și eficace a activităților organizate in echipă.",
    chapterT3: "CT3.",
    infoChapterT3:
      "Identificarea oportunităților de formare continuă și valorificarea eficientă a resurselor și tehnicilor de învățare pentru propria dezvoltare.",
    nameCourseWeb: "Proiectarea paginilor web",
    courseObjectivesOne: "să explice noțiunile de bază studiate;",
    courseObjectivesTwo: "să elaboreze pagini HTML;",
    courseObjectivesThree:
      "să aplice tehnologia CSS la stilizarea paginilor web;",
    courseObjectivesFour:
      "să utilizeze framework-uri CSS(ex: Bootstrap) la crearea paginilor web;",
    courseObjectivesFive:
      "să publice codul sursă pe platforma GitHub(http://github.com);",
    courseObjectivesSix:
      "să publice aplicația în internet (vercel.com, firebase.com sau alt instrument).",
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };
  return (
    <div className="title-container">
      <p className="title, bold">Competențe profesionale:</p>
      {/*CP1.*/}
      <div className="chapter-container">
        <div className="chapter-item">
          <p className="bold">
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) => EditInformation("chapterP1", e.target.innerText)}
            >
              {DocsInfo.chapterP1}
            </span>
          </p>
          <p>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) =>
                EditInformation("infoChapterP1", e.target.innerText)
              }
            >
              {DocsInfo.infoChapterP1}
            </span>
          </p>
        </div>
        {/*CP2.*/}
        <div className="chapter-item">
          <p className="bold">
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) => EditInformation("chapterP2", e.target.innerText)}
            >
              {DocsInfo.chapterP2}
            </span>
          </p>
          <p>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) =>
                EditInformation("infoChapterP2", e.target.innerText)
              }
            >
              {DocsInfo.infoChapterP2}
            </span>
          </p>
        </div>
        {/*CP3.*/}
        <div className="chapter-item">
          <p className="bold">
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) => EditInformation("chapterP3", e.target.innerText)}
            >
              {DocsInfo.chapterP3}
            </span>
          </p>
          <p>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) =>
                EditInformation("infoChapterP3", e.target.innerText)
              }
            >
              {DocsInfo.infoChapterP3}
            </span>
          </p>
        </div>
      </div>
      <p className="title, bold">Competențe transversale:</p>
      {/*CT1.*/}
      <div className="chapter-container">
        <div className="chapter-item">
          <p className="bold">
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) => EditInformation("chapterT1", e.target.innerText)}
            >
              {DocsInfo.chapterT1}
            </span>
          </p>
          <p>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) =>
                EditInformation("infoChapterT1", e.target.innerText)
              }
            >
              {DocsInfo.infoChapterT1}
            </span>
          </p>
        </div>
        {/*CT2.*/}
        <div className="chapter-item">
          <p className="bold">
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) => EditInformation("chapterT2", e.target.innerText)}
            >
              {DocsInfo.chapterT2}
            </span>
          </p>
          <p>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) =>
                EditInformation("infoChapterT2", e.target.innerText)
              }
            >
              {DocsInfo.infoChapterT2}
            </span>
          </p>
        </div>
        {/*CT3.*/}
        <div className="chapter-item">
          <p className="bold">
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) => EditInformation("chapterT3", e.target.innerText)}
            >
              {DocsInfo.chapterT3}
            </span>
          </p>
          <p>
            <span
              className="editable underline"
              contentEditable
              suppressContentEditableWarning
              onChange={(e) =>
                EditInformation("infoChapterT3", e.target.innerText)
              }
            >
              {DocsInfo.infoChapterT3}
            </span>
          </p>
        </div>
      </div>
      {/*End chapter info*/}
      <p className="title, bold">Finalităţile unității de curs</p>
      <p>
        La finalizarea studierii unității de curs{" "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) => EditInformation("nameCourseWeb", e.target.innerText)}
        >
          {DocsInfo.nameCourseWeb}
        </span>{" "}
        și realizarea sarcinilor de învățare, studentul va fi capabil:
      </p>
      <p>
        —{"    "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) =>
            EditInformation("courseObjectivesOne", e.target.innerText)
          }
        >
          {DocsInfo.courseObjectivesOne}
        </span>
      </p>
      <p>
        —{"    "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) =>
            EditInformation("courseObjectivesTwo", e.target.innerText)
          }
        >
          {DocsInfo.courseObjectivesTwo}
        </span>
      </p>
      <p>
        —{"    "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) =>
            EditInformation("courseObjectivesThree", e.target.innerText)
          }
        >
          {DocsInfo.courseObjectivesThree}
        </span>
      </p>
      <p>
        —{"    "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) =>
            EditInformation("courseObjectivesFour", e.target.innerText)
          }
        >
          {DocsInfo.courseObjectivesFour}
        </span>
      </p>
      <p>
        —{"    "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) =>
            EditInformation("courseObjectivesFive", e.target.innerText)
          }
        >
          {DocsInfo.courseObjectivesFive}
        </span>
      </p>
      <p>
        —{"    "}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onChange={(e) =>
            EditInformation("courseObjectivesSix", e.target.innerText)
          }
        >
          {DocsInfo.courseObjectivesSix}
        </span>
      </p>
      {/*New table*/}
      <p className="title, bold">Conținutul unității de curs</p>
      <p className="bold">a{")"}Curs-30ore</p>
      <StudyTablePage5 />
    </div>
  );
};

export default Page5;
