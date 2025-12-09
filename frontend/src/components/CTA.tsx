export default function CTA() {
    return(
        <section className="py-20 px-6 bg-slate-950">
            <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-700 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 via-transparent to-blue-800/20"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to Start Your Career?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join thousands of first-time job seekers who landed their first role with ResumeAI
                    </p>
                    <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50">
                        Build My First Resume - Free
                    </button>
                </div>
            </div>
        </section>
    )
}