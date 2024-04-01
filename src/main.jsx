import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';
import { SigninPatient } from './pages/SignInPatient';
import { LoginPatient} from './pages/LoginPatient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <LoginPatient/>
    
  </React.StrictMode>,
)
