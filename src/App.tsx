import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import OutletInfo from './components/OutletInfo';
import GoogleMap from './components/GoogleMap';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';
import { AnimatedMomos } from './components/UI/AnimatedMomos';

function App() {
  return (
    <div className="relative overflow-hidden bg-amber-50 font-sans">
      {/* Animated momos in the background */}
      <AnimatedMomos />
      
      {/* Main content */}
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-800 mb-10">
              Our Delicious Menu
            </h2>
            <ImageCarousel />
          </div>
        </section>
        
        <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-800 mb-10">
              Instagram Gallery
            </h2>
            <InstagramGallery />
          </div>
        </section>
        
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-800 mb-10">
              Visit Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <OutletInfo />
              <GoogleMap />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;