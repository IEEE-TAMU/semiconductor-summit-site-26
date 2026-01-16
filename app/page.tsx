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
 * - button for sign up to speak?
 * - more writing for the different sections in about
 * - organizers icons use transparent backgrounds with their face zoomed at a different speed than the background (crowd or smth) could look cool and polished
 * - countdown to the summit
 * - schedule updates throughout the day of the event. current event highlighted at top of schedule. schedule is modifiable somehow
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
