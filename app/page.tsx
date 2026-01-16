import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import About from '@/components/About';
import LocationInfo from '@/components/LocationInfo';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Organizers from '@/components/Organizers';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

/**
 * 
 * TODO LIST:
 * - page for those interested in sponsoring. collect their contact info and provide the sponsorship packet
 * - button for sign up to speak?
 * - more writing for the different sections in about
 * - some link to the IEEE TAMU website
 * - date on the hero
 */

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <LocationInfo />
      {/* <Schedule /> */}
      {/* <Sponsors /> */}
      {/* TODO: support the summit section. button takes sponsors to a contact form and provides the sponsorship packet */}
      <FAQ />
      <Organizers />
      <Footer />
    </main>
  );
}
