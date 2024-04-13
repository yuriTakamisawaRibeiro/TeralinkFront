import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import { SigninPatient } from './pages/SignInPatient';
import { SignUpPatient } from './pages/SignUpPatient';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <SigninPatient />
  </React.StrictMode>,
)
