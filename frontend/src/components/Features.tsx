import { motion } from 'framer-motion';
import { Sparkles, Zap, Target } from 'lucide-react';

export default function Features() {
    return(
        <section className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Why Choose <span className="text-blue-400">ResumeAI</span>?
                    </h2>
                    <p className="text-slate-500 text-lg">The resume builder made for people starting out</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                    {
                        icon: <Sparkles className="w-8 h-8" />,
                        title: 'Built for Beginners',
                        description: 'Specifically designed for those entering the workforce. Our AI highlights your transferable skills, coursework, and potential'
                    },
                    {
                        icon: <Zap className="w-8 h-8" />,
                        title: 'Experience Optional',
                        description: 'No job history? We focus on your education, volunteer work, projects, and skills that employers actually care about'
                    },
                    {
                        icon: <Target className="w-8 h-8" />,
                        title: 'Entry-Level Focused',
                        description: 'Every resume is optimized for entry-level positions and showcases what makes you hireable right now'
                    }
                    ].map((feature, i) => (
                    <motion.div 
                        key={i}
                        className="group p-8 bg-slate-800/80 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                            scale: 1.05,
                            borderColor: "rgb(59 130 246)",
                            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)",
                            transition: {duration: 0.3}
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}