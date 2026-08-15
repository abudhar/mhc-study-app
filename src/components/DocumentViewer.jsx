import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function DocumentViewer({ pdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // Use the local public folder for the PDF
  const pdfUrl = `./materials/${pdfFile}`;

  return (
    <div className="document-viewer-container">
      <div className="toolbar">
        <div className="toolbar-group">
          <button 
            disabled={pageNumber <= 1} 
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            className="icon-btn"
          >
            <ChevronLeft size={20} />
          </button>
          <span>Page {pageNumber} of {numPages || '--'}</span>
          <button 
            disabled={pageNumber >= numPages} 
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            className="icon-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="toolbar-group">
          <button className="icon-btn" onClick={() => setScale(s => Math.max(0.5, s - 0.2))}>
            <ZoomOut size={20} />
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button className="icon-btn" onClick={() => setScale(s => Math.min(3, s + 0.2))}>
            <ZoomIn size={20} />
          </button>
        </div>
      </div>

      <div className="pdf-container">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
          loading={<div className="loading">Loading document...</div>}
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>
  );
}
