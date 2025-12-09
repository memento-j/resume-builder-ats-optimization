import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <Navbar/>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Pricing/>
            <CTA/>
            <Footer/>
        </div>
    );
}