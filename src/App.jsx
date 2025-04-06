import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Incidents from './pages/Incidents';
import Locations from './pages/Locations';
import Activities from './pages/Activities';
import Documents from './pages/Documents';
import Getstarted from './components/Getstarted';
import Incidenttype from './components/Incidenttype';
import Cypher from './pages/Cypher';
import './App.css'

function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/incidents" element={<Incidents/>} />
        <Route path="/locations" element={<Locations/>} />
        <Route path='getstarted' element={<Getstarted/>}/>
        <Route path='incidenttype' element={<Incidenttype/>}/>
        <Route path="/activities" element={<Activities/>} />
        <Route path="/documents" element={<Documents/>} />
        <Route path="/cypher-ai" element={<Cypher/>} />
      </Routes>
    </Router>
     
    
    </>
  )
}

export default App
