import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
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
      <Mission />
      <About />
      {/* <Schedule /> */}
      {/* <Sponsors /> */}
      {/* TODO: support the summit section. button takes sponsors to a contact form and provides the sponsorship packet */}
      <Organizers />
      <Footer />
    </main>
  );
}
