import './App.css';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="knowledgeservices">Knowledge services</NavLink>
              </li>     
            </ul>
          </div>
        </div>
      </nav>
      {/* routes for components*/}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="knowledgeservices" element={<KnowledgeServices />} />
      </Routes>
    </div>
  );
}

export default App;
