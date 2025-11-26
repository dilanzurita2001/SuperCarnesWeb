import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Mayoristas', path: '/mayoristas' },
    { name: 'Calculadora', path: '/calculadora' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/593981854964', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://horizons-cdn.hostinger.com/818a7a5c-b13e-4303-b796-d5d9d24b6040/57f9ffaac70f148b146e45be44fedfb7.jpg" 
              alt="Super Carnes Logo" 
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium hover:text-red-600 transition-colors ${
                  location.pathname === item.path ? 'text-red-600' : 'text-slate-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:0981854964" className="flex items-center space-x-2 text-slate-700 hover:text-red-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">0981854964</span>
            </a>
            <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-red-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${
                    location.pathname === item.path ? 'text-red-600' : 'text-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:0981854964" className="flex items-center space-x-2 text-slate-700 hover:text-red-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">0981854964</span>
              </a>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;