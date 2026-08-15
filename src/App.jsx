import React, { useState, useEffect } from 'react';
import { planData } from './data/planData';
import DocumentViewer from './components/DocumentViewer';
import { requestNotificationPermission } from './utils/notifications';
import { CheckCircle, Circle, BookOpen } from 'lucide-react';
import './index.css';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(planData[0]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [completedDays, setCompletedDays] = useState({});

  useEffect(() => {
    // Request notification permissions on start
    requestNotificationPermission();

    // Load progress
    const saved = localStorage.getItem('studyProgress');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  const toggleDayComplete = (dayId) => {
    const updated = { ...completedDays, [dayId]: !completedDays[dayId] };
    setCompletedDays(updated);
    localStorage.setItem('studyProgress', JSON.stringify(updated));
  };

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / planData.length) * 100);

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>MHC AP Study</h1>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="progress-text">{progressPercent}% Completed</div>
        </div>
        
        <div className="days-list">
          {planData.map((day) => (
            <div 
              key={day.day} 
              className={`day-item ${selectedDay.day === day.day ? 'active' : ''}`}
              onClick={() => { setSelectedDay(day); setSelectedPdf(null); }}
            >
              <button 
                className="check-btn"
                onClick={(e) => { e.stopPropagation(); toggleDayComplete(day.day); }}
              >
                {completedDays[day.day] ? <CheckCircle size={18} /> : <Circle size={18} />}
              </button>
              <div className="day-info">
                <strong>Day {day.day}</strong>
                <span>{day.title}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        {!selectedPdf ? (
          <div className="dashboard">
            <h2>Day {selectedDay.day}: {selectedDay.title}</h2>
            {selectedDay.tasks.length === 0 ? (
              <p className="rest-day">This is a rest & revision day! Take a break or review past notes.</p>
            ) : (
              <div className="tasks-container">
                <h3>Today's Materials</h3>
                <div className="task-cards">
                  {selectedDay.tasks.map(task => (
                    <div key={task.id} className="task-card" onClick={() => setSelectedPdf(task.pdf)}>
                      <BookOpen size={32} />
                      <h4>{task.title}</h4>
                      <button className="btn-read">Read Material</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="viewer-layout">
            <div className="viewer-header">
              <button className="btn-back" onClick={() => setSelectedPdf(null)}>← Back to Day {selectedDay.day}</button>
              <h2>{selectedPdf}</h2>
            </div>
            <DocumentViewer pdfFile={selectedPdf} />
          </div>
        )}
      </main>
    </div>
  );
}
