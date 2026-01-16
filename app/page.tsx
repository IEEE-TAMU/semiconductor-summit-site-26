import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Organizers from '@/components/Organizers';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

/**
 * 
 * TODO LIST:
 * - add location information to about
 * - combine mission and about sections?
 * - page for those interested in sponsoring. collect their contact info and provide the sponsorship packet
 * - button for sign up to speak?
 * - more writing for the different sections in about
 * - write that the event is free and open to all somewhere
 * - some link to the IEEE TAMU website
 * - fix the mobile site
 */

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
      <FAQ />
      <Organizers />
      <Footer />
    </main>
  );
}
