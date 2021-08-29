import './App.css';
import Navbar from './Navbar';
import Information from './Information';

function App() {
  return (
    <div className="background-container">
      <Navbar />
      <div className="green-container">
        <div className="text-container">
          <div className="big-text">NodeFlair.<span style={{color:'#ffe03c'}}>Jobs</span></div>
          <div className="small-text">Aggregated job listings from popular job sites and career pages</div>
        </div>
      </div>
      <Information />
    </div>
  );
}

export default App;
