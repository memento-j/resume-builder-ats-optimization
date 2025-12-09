import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/")
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center overflow-hidden relative">
            {/* Animated Blur Orbs */}
            <motion.div
                className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="mb-8"
                >
                    <h1 className="text-9xl md:text-[200px] font-bold bg-linear-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30">
                        <Search className="w-10 h-10 text-blue-400" />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg mx-auto">
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button
                        onClick={handleGoHome}
                        className="group px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Go to Homepage
                    </button>
                    
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 bg-slate-800/60 backdrop-blur-sm rounded-full font-semibold text-lg border border-slate-700/50 hover:border-blue-500 transition-all duration-300 flex items-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </motion.div>
            </div>
        </div>
    );
}