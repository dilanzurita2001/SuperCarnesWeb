import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ProductCard = ({
  product,
  index
}) => {
  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en: ${product.name}`;
    window.open(`https://wa.me/593981854964?text=${encodeURIComponent(message)}`, '_blank');
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={product.name} src={product.image}
/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold mb-1">{product.name}</h3>
          <p className="text-white/90 text-sm">{product.description}</p>
        </div>
      </div>
      <div className="p-6">
        <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
          <MessageCircle className="h-4 w-4 mr-2" />
          Consultar por WhatsApp
        </Button>
      </div>
    </motion.div>;
};
export default ProductCard;