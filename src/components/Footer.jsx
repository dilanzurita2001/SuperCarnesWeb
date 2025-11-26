import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/593981854964', '_blank');
  };

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://horizons-cdn.hostinger.com/818a7a5c-b13e-4303-b796-d5d9d24b6040/57f9ffaac70f148b146e45be44fedfb7.jpg" 
              alt="Super Carnes Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-slate-300 text-sm">
              Los mejores cortes de carne premium en Valle de los Chillos. Calidad garantizada para tu mesa.
            </p>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">Valle de los Chillos, Ecuador</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <a href="tel:0981854964" className="text-slate-300 text-sm hover:text-white">
                  0981854964
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <button onClick={handleWhatsApp} className="text-slate-300 text-sm hover:text-white">
                  Escríbenos por WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-bold mb-4 block">Horarios</span>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>Lunes - Viernes: 8:00 AM - 7:00 PM</p>
              <p>Sábados: 8:00 AM - 6:00 PM</p>
              <p>Domingos: 8:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Super Carnes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;