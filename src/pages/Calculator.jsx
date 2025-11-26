import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Calculator = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, name: 'Lomo Fino', price: 12.50, unit: 'kg' },
    { id: 2, name: 'Churrasco', price: 10.00, unit: 'kg' },
    { id: 3, name: 'Costillas', price: 8.50, unit: 'kg' },
    { id: 4, name: 'Punta de Anca', price: 9.50, unit: 'kg' },
    { id: 5, name: 'Osobuco', price: 7.50, unit: 'kg' },
    { id: 6, name: 'Carne Molida Premium', price: 7.00, unit: 'kg' },
    { id: 7, name: 'Parrillada Familiar', price: 45.00, unit: 'unidad' },
    { id: 8, name: 'Brochetas Mixtas', price: 15.00, unit: 'paquete' },
    { id: 9, name: 'Anticuchos', price: 12.00, unit: 'paquete' },
    { id: 10, name: 'Hamburguesas Gourmet', price: 18.00, unit: 'paquete' }
  ];

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast({
      title: "Producto agregado",
      description: `${product.name} agregado al presupuesto`,
    });
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado del presupuesto",
    });
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Presupuesto limpiado",
      description: "Todos los productos han sido eliminados",
    });
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos antes de enviar el presupuesto",
        variant: "destructive"
      });
      return;
    }

    let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
    cart.forEach(item => {
      message += `• ${item.name}: ${item.quantity} ${item.unit} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: $${total.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/593981854964?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Presupuesto - Super Carnes</title>
        <meta name="description" content="Calcula el costo de tu compra antes de ordenar. Selecciona tus productos y obtén un presupuesto instantáneo." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Presupuesto</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Selecciona tus productos y calcula el costo total de tu compra
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Productos Disponibles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border border-slate-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-slate-600 text-sm">Por {product.unit}</p>
                      </div>
                      <span className="text-red-600 font-bold text-xl">${product.price.toFixed(2)}</span>
                    </div>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Agregar
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Tu Presupuesto</h2>
                {cart.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Limpiar
                  </Button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>No hay productos seleccionados</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="border-b border-slate-100 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">{item.name}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-bold text-red-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-slate-200 pt-4 mb-6">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>Total:</span>
                      <span className="text-red-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={sendToWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;