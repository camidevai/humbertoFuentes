import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import content from '../content.json';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo funciona el proceso de colaboración?",
      answer: "El proceso es simple: 1) Brief inicial para entender objetivos, 2) Propuesta personalizada con timeline, 3) Producción de contenido, 4) Entrega y reporting de resultados."
    },
    {
      question: "¿Qué incluye cada paquete de colaboración?",
      answer: "Cada colaboración se diseña específicamente según tus objetivos. Incluye creación de contenido, distribución en plataformas, respuesta a comentarios y reporte de métricas."
    },
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "El tiempo varía según el alcance del proyecto. Generalmente entre 3-7 días hábiles para contenido estándar. Proyectos más complejos se coordinan con timeline específico."
    },
    {
      question: "¿Trabajas con marcas fuera del Norte Grande?",
      answer: "Sí, trabajo con marcas de todo Chile. Mi especialidad en el Norte Grande me permite ofrecer insights únicos del mercado regional, pero colaboro con empresas nacionales."
    },
    {
      question: "¿Qué métricas y reportes proporcionas?",
      answer: "Entrego reportes completos con métricas de alcance, engagement, interacciones, demografía de audiencia y análisis de performance comparativo."
    },
    {
      question: "¿Ofreces servicios de whitelisting?",
      answer: "Sí, ofrezco whitelisting para que las marcas puedan usar el contenido en sus propias campañas publicitarias. Los términos se negocian según duración y alcance."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-primary-dark/30">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Preguntas{' '}
            <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Respuestas claras a las consultas más comunes sobre nuestras colaboraciones
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="glass-card overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-gold" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass-card p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            ¿Tienes Más Preguntas?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus dudas sobre colaboraciones, 
            procesos y cómo podemos ayudar a tu marca a alcanzar sus objetivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Contactar Ahora
            </button>
            
            {content.CONTACT.whatsapp && (
              <a
                href={content.CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Directo
              </a>
            )}
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-primary-gold mb-2">
              {content.CONTACT.sla_hours}h
            </div>
            <div className="text-gray-300 text-sm">
              Tiempo máximo de respuesta
            </div>
          </div>
          
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-primary-blue mb-2">
              100%
            </div>
            <div className="text-gray-300 text-sm">
              Transparencia en procesos
            </div>
          </div>
          
          <div className="text-center glass-card p-6">
            <div className="text-2xl font-bold text-primary-gold mb-2">
              24/7
            </div>
            <div className="text-gray-300 text-sm">
              Disponibilidad por email
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
