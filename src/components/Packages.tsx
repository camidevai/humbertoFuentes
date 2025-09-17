import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Package } from 'lucide-react';
import content from '../content.json';

const Packages: React.FC = () => {
  // Check if packages are available
  const packagesAvailable = content.PACKAGES.starter !== null;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-transparent to-primary-dark/30">
      <div className="container-custom">
        
     

        {/* Packages Grid */}
        {!packagesAvailable ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center glass-card p-12 mb-16"
          >
            <Package className="w-16 h-16 text-primary-gold mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Colaboraciones Estratégicas
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cada marca tiene objetivos únicos. Diseño estrategias de contenido personalizadas
              que se adaptan a tu presupuesto, audiencia objetivo y metas específicas de conversión.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {content.ADDONS.map((addon, index) => (
                <div key={index} className="glass-card p-4 rounded-lg">
                  <Check className="w-5 h-5 text-primary-gold mb-2" />
                  <div className="text-sm text-gray-300">{addon}</div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Solicitar Propuesta Comercial
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Packages would be rendered here if available */}
          </div>
        )}

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Servicios Adicionales Disponibles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.ADDONS.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 glass-card rounded-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-primary-gold mb-2">
                  <Star className="w-6 h-6 mx-auto" />
                </div>
                <p className="text-gray-300 text-sm">
                  {addon}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Los add-ons se cotizan según duración y alcance específico del proyecto
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Packages;
