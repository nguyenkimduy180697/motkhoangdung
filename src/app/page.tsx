import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import AboutProgram from '@/components/AboutProgram';
import TargetAudience from '@/components/TargetAudience';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Gifts from '@/components/Gifts';
import Testimonials from '@/components/Testimonials';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream font-body text-ink">
      <Header />
      <Hero />
      <PainPoints />
      <AboutProgram />
      <TargetAudience />
      <Speakers />
      <Schedule />
      <Gifts />
      <Testimonials />
      <Registration />
      <Footer />
    </main>
  );
}
