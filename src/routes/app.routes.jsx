import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home"
import { SignInPatient } from '../pages/SignInPatient';
import { SignUpPatient } from '../pages/SignUpPatient';
import { UserPatientProfile } from '../pages/UserPatientProfile';
import { SingUpTerapeuta } from '../pages/SingUpTerapeuta';
import { UserPassword }from '../pages/UserPassword';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signinpatient" element={<SignInPatient />} />
            <Route path="/signuppatient" element={<SignUpPatient />} />
            <Route path="/userpatientprofile" element={<UserPatientProfile />} />
            <Route path ="/singupterapeuta" element={<SingUpTerapeuta/>} />
            <Route path="/userpassword" element={<UserPassword/>} />
            
        </Routes>
    );
}
