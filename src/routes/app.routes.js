import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignInPatient } from './pages/SignInPatient';
import { SignUpPatient } from './pages/SignUpPatient';
import { UserPatientProfile } from './pages/UserPatientProfile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signinpatient" element={<SignInPatient />} />
            <Route path="/signuppatient" element={<SignUpPatient />} />
            <Route path="/userpatientprofile" element={<UserPatientProfile />} />
        </Routes>
    );
}
