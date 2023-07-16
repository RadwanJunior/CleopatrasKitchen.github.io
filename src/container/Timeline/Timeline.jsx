// Timeline.js
import React from 'react';
import events from './events.json';
import './Timeline.css';

const Timeline = () => (
    <section className="timeline">
        <h2 className="timeline-title">Our History</h2>
        <h1 className="timeline-subtitle">Take a stroll down memory lane!</h1>
        <div className="timeline-wrapper">
            <div className="timeline-container">
                {events.map((event, idx) => (
                    <div key={event.id} className={`timeline-item timeline-item-${idx % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <h2>{event.date}</h2>
                            <p>{event.event}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Timeline;
