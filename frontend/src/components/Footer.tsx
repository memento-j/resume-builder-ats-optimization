import { Sparkles } from "lucide-react";

export default function Footer() {
    return(
        <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
            <div className="max-w-7xl mx-auto text-center text-slate-500">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span className="font-bold text-white">ResumeAI</span>
                </div>
                <p>© 2025 ResumeAI. Helping you take the first step toward your future.</p>
            </div>
        </footer>        
    );
}