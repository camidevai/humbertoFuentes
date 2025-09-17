import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Zap } from 'lucide-react';
import content from '../content.json';

const WhyMe: React.FC = () => {
  // Function to format large numbers for mobile display
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };
  const reasons = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-gold" />,
      title: "Conversión Comprobada",
      description: "Storytelling comercial que conecta con audiencias del Norte Grande y genera resultados medibles para marcas."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-blue" />,
      title: "Audiencia Comprometida",
      description: "Comunidad activa de emprendedores y profesionales que confían en recomendaciones auténticas."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-gold" />,
      title: "Alcance Estratégico",
      description: "Conexión única con el Norte Grande de Chile, mercado clave para franquicias y negocios regionales."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-blue" />,
      title: "Constancia Premium",
      description: "Publicación consistente y profesional que mantiene tu marca siempre visible ante la audiencia correcta."
    }
  ];

  const metrics = [
    {
      value: formatNumber(content.PLATFORMS.instagram.followers),
      label: "Seguidores Instagram",
      suffix: ""
    },
    {
      value: formatNumber(content.PLATFORMS.instagram.views_30d),
      label: "Vistas IG (30 días)",
      suffix: ""
    },
    {
      value: formatNumber(content.PLATFORMS.tiktok.summary_60d.post_views),
      label: "Vistas TikTok (60 días)",
      suffix: ""
    },
    {
      value: `${content.PLATFORMS.tiktok.summary_60d.traffic_for_you_percent}%`,
      label: "Distribución For You",
      suffix: ""
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-primary-dark/50">
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
            ¿Por qué elegir esta{' '}
            <span className="gradient-text">alianza estratégica</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más que un influencer, un socio estratégico para el crecimiento de tu marca
          </p>
        </motion.div>

        {/* Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="metric-card"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-gold mb-2">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-sm text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 glass-card rounded-lg">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Regions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Regiones de Mayor Alcance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Antofagasta", "Tarapacá", "Norte Grande"].map((region, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="badge text-lg px-6 py-3"
              >
                {region}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            *Métricas basadas en insights de plataformas sociales
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyMe;
