import React, { useState, useEffect } from 'react';
import { planData } from './data/planData';
import DocumentViewer from './components/DocumentViewer';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import { quizData } from './data/quizData';
import { requestNotificationPermission } from './utils/notifications';
import { CheckCircle, Circle, BookOpen, Menu, X, LayoutDashboard } from 'lucide-react';
import './index.css';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null); // null = Dashboard
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedDays, setCompletedDays] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
      {sidebarOpen && (
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="header-top">
              <h1>MHC AP Study</h1>
              <button className="icon-btn" onClick={() => setSidebarOpen(false)} title="Close Sidebar">
                <X size={24} />
              </button>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="progress-text">{progressPercent}% Completed</div>
          </div>
          
          <div className="days-list">
            <div 
              className={`day-item ${!selectedDay ? 'active' : ''}`}
              onClick={() => { setSelectedDay(null); setSelectedPdf(null); setShowQuiz(false); }}
            >
              <LayoutDashboard size={20} className="icon-mr" style={{marginRight: '12px'}} />
              <div className="day-info">
                <strong>Overview</strong>
                <span>My Dashboard</span>
              </div>
            </div>

            {planData.map((day) => (
              <div 
                key={day.day} 
                className={`day-item ${selectedDay?.day === day.day ? 'active' : ''}`}
                onClick={() => { setSelectedDay(day); setSelectedPdf(null); setShowQuiz(false); }}
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
      )}

      <main className="main-content">
        {!sidebarOpen && (
          <div className="floating-menu">
            <button className="icon-btn" onClick={() => setSidebarOpen(true)} title="Open Sidebar">
              <Menu size={24} />
            </button>
          </div>
        )}

        {!selectedDay ? (
          <Dashboard 
            completedDays={completedDays} 
            onSelectDay={(day) => { setSelectedDay(day); setSelectedPdf(null); setShowQuiz(false); }} 
          />
        ) : !selectedPdf && !showQuiz ? (
          <div className="dashboard-day">
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
                  
                  {/* Quiz Card */}
                  <div className="task-card quiz-card" onClick={() => setShowQuiz(true)}>
                    <CheckCircle size={32} />
                    <h4>Day {selectedDay.day} Quiz</h4>
                    <button className="btn-read" style={{background: 'var(--text-color)'}}>Take Quiz</button>
                  </div>

                </div>
              </div>
            )}
          </div>
        ) : showQuiz ? (
          <div className="viewer-layout">
            <div className="viewer-header">
              <button className="btn-back" onClick={() => setShowQuiz(false)}>← Back to Day {selectedDay.day}</button>
              <h2>Quiz</h2>
            </div>
            <Quiz 
              dayId={selectedDay.day} 
              title={selectedDay.title}
              questions={quizData[selectedDay.day]} 
              onComplete={() => { toggleDayComplete(selectedDay.day); setShowQuiz(false); setSelectedDay(null); }}
            />
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
