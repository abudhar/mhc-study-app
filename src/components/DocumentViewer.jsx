import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize, CheckCircle, Circle } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function DocumentViewer({ pdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [completedPages, setCompletedPages] = useState([]);
  const viewerRef = useRef(null);

  // Load resume state & completion
  useEffect(() => {
    const savedPage = localStorage.getItem(`pdf-page-${pdfFile}`);
    if (savedPage) {
      setPageNumber(parseInt(savedPage, 10));
    } else {
      setPageNumber(1);
    }
    
    const savedCompleted = localStorage.getItem(`pdf-completed-${pdfFile}`);
    if (savedCompleted) {
      setCompletedPages(JSON.parse(savedCompleted));
    } else {
      setCompletedPages([]);
    }
  }, [pdfFile]);

  // Save resume state
  useEffect(() => {
    if (pageNumber > 0) {
      localStorage.setItem(`pdf-page-${pdfFile}`, pageNumber.toString());
    }
  }, [pageNumber, pdfFile]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const togglePageComplete = () => {
    let newCompleted;
    if (completedPages.includes(pageNumber)) {
      newCompleted = completedPages.filter(p => p !== pageNumber);
    } else {
      newCompleted = [...completedPages, pageNumber];
    }
    setCompletedPages(newCompleted);
    localStorage.setItem(`pdf-completed-${pdfFile}`, JSON.stringify(newCompleted));
  };

  const pdfUrl = `./materials/${pdfFile}`;
  const isCompleted = completedPages.includes(pageNumber);
  const completionPercent = numPages ? Math.round((completedPages.length / numPages) * 100) : 0;

  return (
    <div className="document-viewer-container" ref={viewerRef} style={{ background: isFullscreen ? '#f8f8f8' : undefined, height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* PDF Progress Bar */}
      {numPages && (
        <div className="pdf-progress-container">
          <div className="pdf-progress-bar" style={{ width: `${completionPercent}%` }}></div>
        </div>
      )}

      <div className="toolbar">
        <div className="toolbar-group">
          <button 
            disabled={pageNumber <= 1} 
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            className="icon-btn"
            title="Previous Page"
          >
            <ChevronLeft size={20} />
          </button>
          <span>Page {pageNumber} of {numPages || '--'}</span>
          <button 
            disabled={pageNumber >= numPages} 
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            className="icon-btn"
            title="Next Page"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="divider"></div>
          
          <button 
            className="mark-complete-btn"
            onClick={togglePageComplete}
            title="Mark Page as Completed"
          >
            {isCompleted ? <CheckCircle size={18} fill="#000" color="#fff" /> : <Circle size={18} />}
            <span>{isCompleted ? 'Page Read' : 'Mark as Read'}</span>
          </button>
        </div>
        
        <div className="toolbar-group">
          <button className="icon-btn" onClick={() => setScale(s => Math.max(0.5, s - 0.2))} title="Zoom Out">
            <ZoomOut size={20} />
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button className="icon-btn" onClick={() => setScale(s => Math.min(3, s + 0.2))} title="Zoom In">
            <ZoomIn size={20} />
          </button>
          
          <div className="divider"></div>
          
          <button className="icon-btn" onClick={toggleFullscreen} title="Toggle Fullscreen">
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
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
