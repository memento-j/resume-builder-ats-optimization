import CountUp from '@/components/CountUp';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight} from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Hero() {
    const navigate = useNavigate();

    const handleGoCreateResume = () => {
        navigate("/create-resume")
    };


    return(
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Animated Blur Orbs */}
            <motion.div
                className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
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
                className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
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
            <motion.div
                className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                    x: [-250, -150, -250],
                    y: [-250, -300, -250],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-blue-600/5" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="inline-block mb-4 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-400/40 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="text-sm font-medium flex gap-2 text-blue-200">
                            <Sparkles className="w-4 h-4 mt-0.5"/> 
                            <p>Perfect for First-Time Job Seekers</p>
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-white">Build a Standout Resume</span>
                        <span className="block bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-2">
                            Even With Zero Experience
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Starting your career journey? Our AI transforms your skills, education, and potential 
                        into a professional resume that gets you noticed—no prior work history required.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <button onClick={handleGoCreateResume} className="group px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer shadow-2xl shadow-blue-500/30 flex items-center gap-2">
                            Create Your Resume
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                        className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        {[
                            { number: 50, metric: 'K+', label: 'Resumes Created' },
                            { number: 95, metric: '%', label: 'Success Rate' },
                            { number: 5, metric: 'min', label: 'Average Time' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center transform hover:scale-110 transition-transform duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-blue-400">
                                <CountUp
                                    from={0}
                                    to={stat.number}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    delay={1}
                                    className="count-up-text"
                                />
                                {stat.metric}
                            </div>
                            <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>

    );
}