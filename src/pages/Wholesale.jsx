import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, TrendingDown, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Wholesale = () => {
  const benefits = [
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: 'Precios Especiales',
      description: 'Descuentos significativos en compras por volumen'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Entregas Programadas',
      description: 'Coordinamos entregas según tus necesidades'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Calidad Garantizada',
      description: 'Los mismos estándares premium en grandes cantidades'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Atención Personalizada',
      description: 'Un ejecutivo dedicado para tu negocio'
    }
  ];

  const wholesalePrices = [
    { product: 'Lomo Fino', retail: '$12.50/kg', wholesale: '$10.00/kg', minQty: '10kg' },
    { product: 'Churrasco', retail: '$10.00/kg', wholesale: '$8.50/kg', minQty: '15kg' },
    { product: 'Costillas', retail: '$8.50/kg', wholesale: '$7.00/kg', minQty: '20kg' },
    { product: 'Punta de Anca', retail: '$9.50/kg', wholesale: '$8.00/kg', minQty: '15kg' },
    { product: 'Carne Molida Premium', retail: '$7.00/kg', wholesale: '$5.50/kg', minQty: '25kg' },
    { product: 'Parrillada Familiar', retail: '$45.00/unidad', wholesale: '$38.00/unidad', minQty: '10 unidades' }
  ];

  return (
    <>
      <Helmet>
        <title>Precios Mayoristas - Super Carnes | Ofertas para Empresas</title>
        <meta name="description" content="Precios especiales para mayoristas, restaurantes y negocios de comida. Descuentos en compras por volumen con la calidad de Super Carnes." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Precios Mayoristas</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ofertas especiales para empresas, restaurantes y negocios de comida
          </p>
        </motion.div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-red-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Lista de Precios Mayoristas</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold">Producto</th>
                  <th className="text-left py-4 px-4 font-bold">Precio Retail</th>
                  <th className="text-left py-4 px-4 font-bold text-red-600">Precio Mayorista</th>
                  <th className="text-left py-4 px-4 font-bold">Cantidad Mínima</th>
                </tr>
              </thead>
              <tbody>
                {wholesalePrices.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-slate-100 hover:bg-red-50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium">{item.product}</td>
                    <td className="py-4 px-4 text-slate-600 line-through">{item.retail}</td>
                    <td className="py-4 px-4 text-red-600 font-bold text-lg">{item.wholesale}</td>
                    <td className="py-4 px-4 text-slate-600">{item.minQty}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-6 text-center">
            * Precios sujetos a cambios. Válidos para compras en efectivo o transferencia.
          </p>
        </section>

        <section className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en nuestros precios mayoristas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para más información y cotizaciones personalizadas
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open('https://wa.me/593981854964?text=Hola, estoy interesado en precios mayoristas', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-lg px-8"
          >
            Contactar por WhatsApp
          </Button>
        </section>
      </div>
    </>
  );
};

export default Wholesale;