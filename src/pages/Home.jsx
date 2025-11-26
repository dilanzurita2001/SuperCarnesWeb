import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChefHat, Award, Users, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Calidad Premium',
      description: 'Los mejores cortes seleccionados con los más altos estándares de calidad'
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: 'Preparaciones Especiales',
      description: 'Parrilladas, entradas y platos preparados listos para disfrutar'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Precios Mayoristas',
      description: 'Ofertas especiales para empresas y negocios de comida'
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: 'Calculadora de Presupuesto',
      description: 'Calcula el costo de tu compra antes de ordenar'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Super Carnes - Inicio | Carnicería Premium Valle de los Chillos</title>
        <meta name="description" content="Bienvenido a Super Carnes, tu carnicería de confianza en Valle de los Chillos. Cortes premium, parrilladas y precios especiales para mayoristas." />
      </Helmet>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Parrillada de carnes premium" src="https://images.unsplash.com/photo-1571451223213-ab396a71ba74" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bienvenido a Super Carnes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Los mejores cortes de carne premium en Valle de los Chillos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/productos">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                  Ver Productos
                </Button>
              </Link>
              <Link to="/mayoristas">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  Precios Mayoristas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Ofrecemos la mejor experiencia en carnes premium con servicios diseñados para ti
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-red-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">¿Listo para hacer tu pedido?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contáctanos ahora y descubre nuestros productos premium
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/593981854964', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-lg px-8"
            >
              Contactar por WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;