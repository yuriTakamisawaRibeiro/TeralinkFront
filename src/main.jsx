import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import { SigninPatient } from './pages/SignInPatient';
import { LoginP } from './pages/LoginP';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <LoginP />
  </React.StrictMode>,
)
