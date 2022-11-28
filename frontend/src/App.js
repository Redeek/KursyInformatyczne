import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import Header from './components/Header';
import TutorialDetails from './pages/TutorialDetails';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import './bootstrap.css'

function App() {
  return (<>
  
    <Router>
      <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<TutorialDetails />} />
      </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>);
}

export default App;
