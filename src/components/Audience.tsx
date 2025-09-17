import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Heart } from 'lucide-react';
import content from '../content.json';

const Audience: React.FC = () => {
  const demographicData = [
    {
      icon: <Users className="w-6 h-6 text-primary-gold" />,
      title: "Género (TikTok)",
      data: [
        { label: "Hombres", value: `${content.PLATFORMS.tiktok.audience_gender_percent.male}%`, color: "bg-primary-blue" },
        { label: "Mujeres", value: `${content.PLATFORMS.tiktok.audience_gender_percent.female}%`, color: "bg-primary-gold" }
      ]
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary-blue" />,
      title: "Actividad Pico",
      data: [
        { label: content.PLATFORMS.tiktok.peak_activity.window, value: "Peak", color: "bg-primary-gold" },
        { label: content.PLATFORMS.tiktok.peak_activity.basis, value: "Datos", color: "bg-primary-blue" }
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-gold" />,
      title: "Ubicación",
      data: [
        { label: "Chile", value: "Base Nacional", color: "bg-primary-blue" },
        { label: "Latinoamérica", value: "Alcance Regional", color: "bg-primary-gold" },
        { label: "Internacional", value: "Audiencia Global", color: "bg-primary-blue" }
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-primary-blue" />,
      title: "Distribución Orgánica",
      data: [
        { label: "For You Page", value: `${content.PLATFORMS.tiktok.summary_60d.traffic_for_you_percent}%`, color: "bg-primary-gold" },
        { label: "Alcance orgánico", value: "Principal", color: "bg-primary-blue" }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-primary-dark/50 to-transparent">
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
            Audiencia &{' '}
            <span className="gradient-text">Demografía</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce el perfil de la comunidad que confía en nuestras recomendaciones
          </p>
        </motion.div>

        {/* Demographics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {demographicData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Data Items */}
              <div className="space-y-4">
                {category.data.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300 text-sm">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-white font-medium text-sm">
                        {typeof item.value === 'number' ? `${item.value}%` : item.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Intereses de la Audiencia
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Emprendimiento", "Franquicias", "Negocios Locales"].map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="badge text-base px-5 py-2 capitalize"
              >
                {interest}
              </motion.span>
            ))}
          </div>

          <p className="text-gray-400 text-sm max-w-3xl mx-auto mt-6">
            <strong className="text-primary-gold">Alcance Global:</strong> Aunque mi base está en Chile,
            mi audiencia incluye emprendedores y empresarios de toda Latinoamérica y mercados internacionales.
            Ideal para marcas que buscan expandirse o conectar con audiencias hispanohablantes globales.
          </p>
        </motion.div>

        {/* Privacy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-6 mt-12"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-primary-gold mb-3">
              Nota sobre Privacidad y Datos
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Las métricas demográficas son estimaciones basadas en insights públicos de plataformas sociales 
              y análisis de engagement. Respetamos completamente la privacidad de nuestra audiencia y 
              cumplimos con todas las regulaciones de protección de datos aplicables.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Audience;
