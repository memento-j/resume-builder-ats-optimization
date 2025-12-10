import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const handleGoCreateResume = () => {
        navigate("/create-resume")
    };
    console.log(user);
    
    return(
        <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-blue-500/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                        ResumeAI
                    </span>
                </div>
                <button onClick={handleGoCreateResume} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:cursor-pointer shadow-lg shadow-blue-500/20">
                    Get Started
                </button>
            </div>
        </nav>
    );
}