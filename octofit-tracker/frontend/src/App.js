import React from 'react';
import octofitLogo from './assets/octofitapp-small.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark rounded mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo me-2" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="card shadow-lg p-4" style={{ maxWidth: 500 }}>
                  <h1 className="card-title text-center mb-3 text-primary">Welcome to OctoFit Tracker</h1>
                  <p className="card-text text-center">Track your activities, join teams, and compete on the leaderboard!</p>
                  <div className="d-flex justify-content-center">
                    <Link to="/activities" className="btn btn-primary mx-2">Activities</Link>
                    <Link to="/leaderboard" className="btn btn-outline-primary mx-2">Leaderboard</Link>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
