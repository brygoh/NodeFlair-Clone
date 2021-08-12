import React, { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import jobs from './Data';

const tabs = [
  {id:'1', name:'Recruiters'},
  {id:'2', name:'Jobs'},
  {id:'3', name:'Salaries'},
  {id:'4', name:'Insights'},
  {id:'5', name:'Blog'},
  {id:'6', name:'Sign In'},];

function App() {

  const [hamVisible, setHamVisible] = useState(false);

  const showHamburger = () => {
    if (window.innerWidth <= 960) {
      setHamVisible(true);
    } else {
      setHamVisible(false);
    }
  };

  useEffect(() => {
    showHamburger();
  }, []);

  window.addEventListener('resize', showHamburger);

  return (
    <div className="App">

      {/*Header Tabs*/}
      <div className="HeaderTab">
        <img className='Logo' src='logo.png'></img>
        {hamVisible? 
        <div style={{flexDirection:"column", display:'flex'}}>
          <div>Insert Hamburger</div>
        </div>: 
        <div className='TabButtons'>{tabs.map(tab => <div>{tab.name}</div>)}</div>}
      </div>

      <div className="Box">
        <div className="UpperBox"></div>
      </div>

      {/*Description Container */}
      <div className="BoxOne">
        <div className="BigText">NodeFlair.<span style={{color:'#ffe03c'}}>Jobs</span></div>
        <div className="SmallText">Aggregated job listings from popular job sites and career pages</div>

        {/*Search Box Container */}
        <div className="SearchBoxContainer">
          <div className="JobText">SELECT <span style={{color:'#1fc76a'}}>*</span> FROM <span style={{color:'#1fc76a'}}>TECH_JOBS</span> WHERE</div>
          <input className="SearchBox" type="text" placeholder="Try: Frontend, QA Engineer, React.js"/>
          {/* <SearchIcon/> */}
          <div className="FilterText">FILTER BY...</div>
          <div className="FilterSelections">
            <a class="job-filter-tag"><i class="fa fa-chart-bar"></i> Seniority</a>
            <a class="job-filter-tag"><i class="fa fa-chart-bar"></i> Tech Stack</a>
            <a class="job-filter-tag"><i class="fa fa-chart-bar"></i> Specialisation</a>
            <a class="job-filter-tag"><i class="fa fa-chart-bar"></i> Company</a>
          </div>
        </div>

        <div className="Summary">
          <h2>7658 jobs</h2>
          <div className="FilterDropDown"><b>SORT BY</b></div>
        </div>

        <div className="CardContainer">
          {jobs.map(job => <div className="Cards">
            <div className="TopInfo">
              <img className="Image" src={job.image} alt=""></img>
              <div style={{width:'100%', fontSize:'16px'}}>{job.name}</div>
              <div className="DescriptionText">{job.description}</div>
              <div style={{width:'100%', fontSize:'16px'}}>{job.salary}</div>
              <div className="MinutesAndTag"><div>... minutes</div><div><a class="job-filter-tag"><i class="fa fa-chart-bar"></i>Full Stack</a></div></div>
            </div>
            <div style={{borderBottom:'1px solid grey', width:'100%'}}></div>
            <div className="BottomInfo">
              <span class="tech-stack-container false">Rest API</span>
              <span class="tech-stack-container false">Full Stack</span>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
