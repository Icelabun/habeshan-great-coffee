import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Services from '@/components/sections/Services';
import Quality from '@/components/sections/Quality';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Services />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}
