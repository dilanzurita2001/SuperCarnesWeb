import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const cuts = [
    { id: 1, name: 'Lomo Fino', description: 'Corte premium, tierno y jugoso', image: 'Lomo fino de res premium, calidad de restaurante, sobre una tabla de cortar de mármol oscuro' },
    { id: 2, name: 'Churrasco', description: 'Ideal para parrilla', image: 'Churrasco de res fresco listo para asar' },
    { id: 3, name: 'Costillas', description: 'Perfectas para BBQ', image: 'Costillas de res crudas, estilo St. Louis, con un adobo seco, listas para la parrilla' },
    { id: 4, name: 'Punta de Anca', description: 'Versátil y sabroso', image: 'Punta de anca de res cortada en filetes' },
    { id: 5, name: 'Osobuco', description: 'Ideal para guisos', image: 'Osobuco de res con hueso y tuétano' },
    { id: 6, name: 'Carne Molida Premium', description: 'Selección especial', image: 'Carne molida de res premium, 90/10, en un tazón de cerámica blanca, vista desde arriba' }
  ];

  const preparations = [
    { id: 7, name: 'Parrillada Familiar', description: 'Variedad de cortes para 4-6 personas', image: 'Parrillada mixta con diferentes cortes de carne sobre parrilla' },
    { id: 8, name: 'Brochetas Mixtas', description: 'Carne marinada lista para asar', image: 'Brochetas de carne con vegetales listas para cocinar' },
    { id: 9, name: 'Anticuchos', description: 'Tradicionales y deliciosos', image: 'Anticuchos de corazón marinados en palitos' },
    { id: 10, name: 'Hamburguesas Gourmet', description: 'Carne premium molida y condimentada', image: 'Hamburguesas gourmet de carne premium crudas' },
    { id: 11, name: 'Albóndigas Caseras', description: 'Preparadas con receta tradicional', image: 'Albóndigas de carne caseras crudas' },
    { id: 12, name: 'Carne Adobada', description: 'Marinada con especias especiales', image: 'Carne adobada con especias rojas lista para cocinar' }
  ];

  return (
    <>
      <Helmet>
        <title>Productos - Super Carnes | Cortes Premium y Preparaciones</title>
        <meta name="description" content="Descubre nuestros cortes de carne premium y preparaciones especiales. Parrilladas, brochetas, anticuchos y más en Super Carnes." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de cortes premium y preparaciones especiales
          </p>
        </motion.div>

        <Tabs defaultValue="cuts" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="cuts">Cortes Finos</TabsTrigger>
            <TabsTrigger value="preparations">Preparaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="cuts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cuts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="preparations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preparations.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Products;