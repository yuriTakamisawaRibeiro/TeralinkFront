import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';


import { SignInPatient } from './pages/SignInPatient';
import { SignUpPatient } from './pages/SignUpPatient';
import { Home } from './pages/Home';
import { UserPatientProfile } from './pages/UserPatientProfile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
  </React.StrictMode>,
)
