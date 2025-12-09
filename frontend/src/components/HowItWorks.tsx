import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
    return(
        <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Simple Process</h2>
                    <p className="text-slate-500 text-lg">Three easy steps to your perfect resume</p>
                </div>

                <div className="space-y-8">
                    {[
                        { step: '1', title: 'Tell Us About You', desc: 'Share your education, skills, interests, and goals. No work experience needed—we work with what you have' },
                        { step: '2', title: 'AI Does the Heavy Lifting', desc: 'Our AI identifies your strengths and crafts professional content that positions you as a strong candidate' },
                        { step: '3', title: 'Land Your First Role', desc: 'Download your polished, entry-level optimized resume and start your career journey with confidence' }
                    ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        className="flex gap-6 items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
                    >
                        <div className="shrink-0 w-16 h-16 bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                            {item.step}
                        </div>
                        <div className="grow pt-2">
                            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-slate-400 text-lg">{item.desc}</p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-12 shrink-0"/>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}