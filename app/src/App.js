import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import WebToPdf from '../src/pages/WebToPdf';
import './App.css';

function App() {
  const [DocsInfo, setDocsInfo] = useState({
    facultate: 'FACULTATEA DE ȘTIINȚE REALE, ECONOMICE ȘI ALE MEDIULUI',
    catedra: 'CATEDRA DE MATEMATICĂ ȘI INFORMATICĂ',
    unitateCurs: 'Proiectarea paginilor Web',
    specialitate: '0613.4 Informatică',
    ciclu: 'I',
    studii: 'superioare de licență',
    invatamant: 'cu frecvență',
    autor1: 'dr. conf. univ., Ghenadie CABAC',
    autor2: 'asist. univ., Sergiu CHILAT',
    locSiAn: 'BĂLȚI, 2025',
  });

  const EditInformation = (key, value) => {
    setDocsInfo({ ...DocsInfo, [key]: value });
  };

  const GeneratePDF = async () => {
    const blob = await pdf(<WebToPdf data={DocsInfo} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Curriculum.pdf';
    a.click();
  };

  return (
    <div className="pdf-preview-style">
        <div className="title-container">
            <p className="bold">MINISTERUL EDUCAȚIEI ȘI CERCETĂRII AL REPUBLICII MOLDOVA</p>
            <p className="bold">UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI</p>
            <p
                className="bold editable"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => EditInformation('facultate', e.target.innerText)}
            >
                {DocsInfo.facultate}
            </p>
            <p
                className="bold editable"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => EditInformation('catedra', e.target.innerText)}
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
                onBlur={(e) => EditInformation('unitateCurs', e.target.innerText)}
            >
                {DocsInfo.unitateCurs}
            </h2>
            <p className="center">
                pentru studenții de la specialitatea{' '}
                <span
                    className="editable underline"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => EditInformation('specialitate', e.target.innerText)}
                >
          {DocsInfo.specialitate}
        </span>
            </p>
            <p className="center">
                Ciclul{' '}
                <span
                    className="editable underline"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => EditInformation('ciclu', e.target.innerText)}
                >
          {DocsInfo.ciclu}
        </span>
                , studii{' '}
                <span
                    className="editable underline"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => EditInformation('studii', e.target.innerText)}
                >
          {DocsInfo.studii}
        </span>
                , învățământ{' '}
                <span
                    className="editable underline"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => EditInformation('invatamant', e.target.innerText)}
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
                            onBlur={(e) => EditInformation('autor1', e.target.innerText)}
                        >
                            {DocsInfo.autor1}
                        </p>
                    </div>
                    <div className="author">
                        <p
                            className="editable"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={(e) => EditInformation('autor2', e.target.innerText)}
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
                onBlur={(e) => EditInformation('locSiAn', e.target.innerText)}
            >
                {DocsInfo.locSiAn}
            </p>
        </div>
        <button onClick={GeneratePDF}>Descarcă PDF</button>
    </div>
  );
}

export default App;