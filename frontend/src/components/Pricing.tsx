import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
    return (
        <section className="py-20 px-6 bg-slate-950/50 relative overflow-hidden">
            
            <div className="max-w-[7xl] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Choose Your Plan
                    </h2>
                    <p className="text-slate-500 text-lg">Start for free, upgrade when you're ready</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: 'Free',
                            price: '$0',
                            period: 'forever',
                            description: 'Perfect for getting started',
                            features: [
                                '1 resume',
                                'Basic templates',
                                'PDF download',
                                'AI-powered content'
                            ],
                            cta: 'Get Started',
                            popular: false
                        },
                        {
                            name: 'Pro',
                            price: '$2.99',
                            period: 'per month',
                            description: 'Best for active job seekers',
                            features: [
                                'Unlimited resumes',
                                'Premium templates',
                                'Cover letter builder',
                                'Priority AI assistance',
                                'ATS optimization'
                            ],
                            cta: 'Go Pro',
                            popular: true
                        },
                        {
                            name: 'Lifetime',
                            price: '$10',
                            period: 'one-time',
                            description: 'Pay once, use forever',
                            features: [
                                'Everything in Pro',
                                'Lifetime access',
                                'Future updates included',
                                'No recurring fees',
                                'Best value'
                            ],
                            cta: 'Buy Lifetime',
                            popular: false
                        }
                    ].map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`relative p-8 rounded-2xl backdrop-blur-sm ${
                                plan.popular 
                                    ? 'bg-linear-to-br from-blue-600/20 to-blue-700/20 border-2 border-blue-500' 
                                    : 'bg-slate-800/60 border border-slate-700/50'
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.03,
                                y: -5,
                                boxShadow: plan.popular 
                                    ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                                    : "0 25px 50px -12px rgba(59, 130, 246, 0.1)",
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.8,
                                ease: [0.25, 0.4, 0.25, 1],
                                type: "spring"
                            }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-sm font-bold">
                                    Most Popular
                                </div>
                            )}
                            
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                </div>
                                <p className="text-slate-500 text-sm">{plan.period}</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                                plan.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                            }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>  
    )
}