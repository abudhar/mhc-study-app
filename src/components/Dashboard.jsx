import React from 'react';
import { planData } from '../data/planData';
import { CheckCircle, PlayCircle, Calendar, Trophy, Target } from 'lucide-react';

export default function Dashboard({ completedDays, onSelectDay }) {
  const totalDays = planData.length;
  const completedCount = Object.keys(completedDays).filter(k => completedDays[k]).length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);

  // Find next incomplete day
  const nextDay = planData.find(d => !completedDays[d.day]) || planData[0];

  // Calculate days until exam (Sept 6, 2026)
  const examDate = new Date('2026-09-06T00:00:00');
  const today = new Date();
  const timeDiff = examDate - today;
  const daysUntilExam = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className="dashboard-overview">
      <div className="dash-hero">
        <div className="hero-content">
          <h2>Welcome Back, Future Assistant Programmer!</h2>
          <p>You have <strong>{daysUntilExam > 0 ? daysUntilExam : 0} days left</strong> until your exam. Keep up the momentum!</p>
          <div className="main-progress">
            <div className="progress-bar-container large">
              <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="progress-stats">
              <span>{completedCount} of {totalDays} Days Completed</span>
              <span>{progressPercent}%</span>
            </div>
          </div>
          <button className="btn-resume-journey" onClick={() => onSelectDay(nextDay)}>
            <PlayCircle size={24} />
            <span>Continue to Day {nextDay.day}: {nextDay.title}</span>
          </button>
        </div>
      </div>

      <div className="dash-stats-row">
        <div className="stat-card">
          <Calendar size={32} className="stat-icon" />
          <div className="stat-info">
            <h4>Target Date</h4>
            <p>Sept 6, 2026</p>
          </div>
        </div>
        <div className="stat-card">
          <Target size={32} className="stat-icon" />
          <div className="stat-info">
            <h4>Current Focus</h4>
            <p>Day {nextDay.day}</p>
          </div>
        </div>
        <div className="stat-card">
          <Trophy size={32} className="stat-icon" />
          <div className="stat-info">
            <h4>Milestone</h4>
            <p>{progressPercent === 100 ? "Ready for Exam!" : progressPercent >= 50 ? "Halfway There!" : "Just Started"}</p>
          </div>
        </div>
      </div>

      <div className="dash-grid-section">
        <h3>Study Roadmap</h3>
        <div className="roadmap-grid">
          {planData.map(day => {
            const isCompleted = completedDays[day.day];
            const isNext = day.day === nextDay.day;
            
            let cardClass = "roadmap-card";
            if (isCompleted) cardClass += " completed";
            if (isNext) cardClass += " current";

            return (
              <div key={day.day} className={cardClass} onClick={() => onSelectDay(day)}>
                <div className="roadmap-card-header">
                  <span className="day-number">Day {day.day}</span>
                  {isCompleted && <CheckCircle size={20} className="check-icon" />}
                </div>
                <h4>{day.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
