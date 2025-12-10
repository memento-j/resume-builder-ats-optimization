import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LandingPage from '@/pages/LandingPage';
import CreateResumePage from '@/pages/CreateResumePage';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import { AuthProvider } from '@/contexts/AuthContext';

export default function AppRoutes() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/create-resume" element={<CreateResumePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage/>} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}