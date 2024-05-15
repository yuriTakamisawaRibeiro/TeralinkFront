import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignInPatient } from './pages/SignInPatient';
import { SignUpPatient } from './pages/SignUpPatient';
import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
  </React.StrictMode>,
)
