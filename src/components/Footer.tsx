import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import SandSLogo from './../assets/SandSLogo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img src={SandSLogo} alt='Steam & Soul Logo' className={`h-10 w-10`} />
            <span className="ml-2 text-xl font-bold text-white">
              Steam & Soul
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/steamandsoul_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.instagram.com/steamandsoul_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/steamandsoul_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-orange-200 hover:text-white transition-colors">Home</a>
            <a href="#menu" className="text-orange-200 hover:text-white transition-colors">Menu</a>
            <a href="#gallery" className="text-orange-200 hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="text-orange-200 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-orange-200">
            <p>Follow us <a href="https://www.instagram.com/steamandsoul_/" className="text-white hover:text-orange-300">@steamandsoul_</a></p>
            <p className="mt-2">&copy; {currentYear} Steam & Soul. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;