import { Sparkles, Zap, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-blue-500/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-blue-400" />
                        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                            ResumeAI
                        </span>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-400/30">
                            <div className="text-sm font-medium flex gap-2 text-blue-300">
                                <Sparkles className="w-4 h-4"/> 
                                <p className='mt-0.5'>Perfect for First-Time Job Seekers</p>
                            </div>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Build a Standout Resume
                            <span className="block bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                Even With Zero Experience
                            </span>
                        </h1>
                        
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Starting your career journey? Our AI transforms your skills, education, and potential 
                            into a professional resume that gets you noticed—no prior work history required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center gap-2">
                                Create Your Resume
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
                            {[
                                { number: '50K+', label: 'Resumes Created' },
                                { number: '95%', label: 'Success Rate' },
                                { number: '5 min', label: 'Average Time' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center transform hover:scale-110 transition-transform duration-300">
                                <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.number}</div>
                                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose <span className="text-blue-400">ResumeAI</span>?
                        </h2>
                        <p className="text-slate-400 text-lg">The resume builder made for people starting out</p>
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
                        <div 
                            key={i}
                            className="group p-8 bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Process</h2>
                        <p className="text-slate-400 text-lg">Three easy steps to your perfect resume</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { step: '1', title: 'Tell Us About You', desc: 'Share your education, skills, interests, and goals. No work experience needed—we work with what you have' },
                            { step: '2', title: 'AI Does the Heavy Lifting', desc: 'Our AI identifies your strengths and crafts professional content that positions you as a strong candidate' },
                            { step: '3', title: 'Land Your First Role', desc: 'Download your polished, entry-level optimized resume and start your career journey with confidence' }
                        ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start group">
                            <div className="shrink-0 w-16 h-16 bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                {item.step}
                            </div>
                            <div className="grow pt-2">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-lg">{item.desc}</p>
                            </div>
                            <CheckCircle2 className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-12 shrink-0"/>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Career?
                        </h2>
                        <p className="text-xl mb-8 text-blue-50">
                        Join thousands of first-time job seekers who landed their first role with ResumeAI
                        </p>
                        <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50">
                        Build My First Resume - Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-slate-800">
                <div className="max-w-7xl mx-auto text-center text-slate-400">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                        <span className="font-bold text-white">ResumeAI</span>
                    </div>
                    <p>© 2025 ResumeAI. Helping you take the first step toward your future.</p>
                </div>
            </footer>
        </div>
    );
}