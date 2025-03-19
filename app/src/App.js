import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import WebToPdf from '../src/pages/WebToPdf';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
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

  const handleSpanEdit = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleGeneratePDF = async () => {
    const blob = await pdf(<WebToPdf data={formData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Curriculum.pdf';
    a.click();
  };

  return (
    <div className="pdf-preview-style">
      <p className="bold">MINISTERUL EDUCAȚIEI ȘI CERCETĂRII AL REPUBLICII MOLDOVA</p>
      <p className="bold">UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI</p>

      <p
        className="bold editable"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleSpanEdit('facultate', e.target.innerText)}
      >
        {formData.facultate}
      </p>
      <p
        className="bold editable"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleSpanEdit('catedra', e.target.innerText)}
      >
        {formData.catedra}
      </p>

      <h2 className="center bold">CURRICULUM</h2>
      <p className="center">la unitatea de curs</p>
      <h2
        className="center bold editable"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleSpanEdit('unitateCurs', e.target.innerText)}
      >
        {formData.unitateCurs}
      </h2>
      <p className="center">
        pentru studenții de la specialitatea{' '}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleSpanEdit('specialitate', e.target.innerText)}
        >
          {formData.specialitate}
        </span>
      </p>
      <p className="center">
        Ciclul{' '}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleSpanEdit('ciclu', e.target.innerText)}
        >
          {formData.ciclu}
        </span>
        , studii{' '}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleSpanEdit('studii', e.target.innerText)}
        >
          {formData.studii}
        </span>
        , învățământ{' '}
        <span
          className="editable underline"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleSpanEdit('invatamant', e.target.innerText)}
        >
          {formData.invatamant}
        </span>
      </p>

      <div className="authors">
        <p className="bold">Autori:</p>
        <p
          className="editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleSpanEdit('autor1', e.target.innerText)}
        >
          {formData.autor1}
        </p>
        <p
          className="editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleSpanEdit('autor2', e.target.innerText)}
        >
          {formData.autor2}
        </p>
      </div>

      <p
        className="bold center editable"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleSpanEdit('locSiAn', e.target.innerText)}
      >
        {formData.locSiAn}
      </p>

      <button onClick={handleGeneratePDF}>Descarcă PDF</button>
    </div>
  );
}

export default App;