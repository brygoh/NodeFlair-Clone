import React, { useState, useEffect } from 'react';
import './JobCards.css';
import data from './Data';

function JobCards() {
    return (
        <div className="big-daddy-cards">
            {data.map(jobs=> <div className="individual-cards">
                <div className="top-information">
                    <div className="image-container">
                        <img src={jobs.image} style={{width:'150px', height:'150px'}}/>
                    </div>
                    <div style={{padding:'0px 20px', fontSize:'1.1rem'}}>{jobs.name}</div>
                    <h2 className="job-listing-card-title">{jobs.description}</h2>
                    <div style={{padding:'0px 20px', fontSize:'1.1rem'}}>{jobs.salary}</div>
                    <div className="extra-information">
                        <div style={{fontSize:'1.1rem', color:'grey', fontStyle:'italic'}}>3 days ago</div>
                        <span class="specialisation-container">Data Eng</span>
                    </div>
                </div>
                <div className="bottom-information">
                    <span class="tech-stack-container">Rest API</span>
                    <span class="tech-stack-container">Full Stack</span>
                </div>
            </div>)}
        </div>
    );
}

export default JobCards;