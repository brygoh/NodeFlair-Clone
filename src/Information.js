import React, { useState, useEffect } from 'react';
import './Information.css';
import { FaSearch, FaRegChartBar, FaBuilding, FaStream, FaCog } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import JobCards from './JobCards';

function Information() {
    return (
        <div className="big-daddy">
            <div className="search-card">
                <div className="search-header">SELECT <span style={{color:'#1fc76a'}}>*</span> FROM <span style={{color:'#1fc76a'}}>TECH_JOBS</span> WHERE</div>
                <div className="search-bar">
                    <input className="search-form" placeholder="Try: Frontend, QA Engineer, React.js"></input>
                    <div className='search-logo'><FaSearch style={{fontSize:'1.5rem'}}/></div>
                </div>
                <div className="filter-header">FILTER BY...</div>
                <div className="filter-tags">
                    <a class="job-filter-tag"><i class="job-filter-icons"><FaRegChartBar /></i> Seniority</a>
                    <a class="job-filter-tag"><i class="job-filter-icons"><FaStream /></i> Tech Stack</a>
                    <a class="job-filter-tag"><i class="job-filter-icons"><FaCog /></i> Specialisation</a>
                    <a class="job-filter-tag"><i class="job-filter-icons"><FaBuilding /></i> Company</a>
                </div>
            </div>
            <div className="summary-info">
                <h2>7864 jobs</h2>
                <div className="sort-by-button">
                    <b>SORT BY</b>
                    <div className="sort-box">
                        <div style={{borderRight:'1px solid grey', padding:'5px', }}>Relevance</div>
                        <div style={{display:'flex', justifyContent:'center', padding:'5px'}}><MdKeyboardArrowDown /></div>
                    </div>
                </div>
            </div>
            <div>
                <JobCards />
            </div>
        </div>
    )
}

export default Information;