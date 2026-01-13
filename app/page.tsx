import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Organizers from '@/components/Organizers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Sponsors />
      <Organizers />
      <Footer />
    </main>
  );
}
