import React from 'react';
import events from './events.json';
import './Timeline.css';

const Timeline = () => (
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

);

export default Timeline;
