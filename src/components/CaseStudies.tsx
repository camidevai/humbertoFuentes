import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, TrendingUp, Award } from 'lucide-react';
import content from '../content.json';

const CaseStudies: React.FC = () => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Award className="w-4 h-4" />;
      case 'tiktok':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Eye className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return 'text-primary-gold bg-primary-gold/20 border-primary-gold/30';
      case 'tiktok':
        return 'text-primary-blue bg-primary-blue/20 border-primary-blue/30';
      default:
        return 'text-gray-300 bg-gray-300/20 border-gray-300/30';
    }
  };

  return (
    <section id="cases" className="section-padding bg-gradient-to-b from-primary-dark/30 to-transparent">
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
            Casos de Éxito &{' '}
            <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reales que demuestran el impacto de nuestras colaboraciones estratégicas
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.CASE_STUDIES.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Case Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* TikTok Video Preview */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                        </svg>
                      </div>
                      <div className="text-sm font-medium">Ver en TikTok</div>
                    </div>
                  </div>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-primary-gold/20 to-primary-blue/20"></div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a
                      href={caseStudy.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-white hover:text-primary-gold transition-colors bg-black/50 backdrop-blur-sm rounded-lg py-2 px-4"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                      </svg>
                      <span className="text-sm font-medium">Ver en TikTok</span>
                    </a>
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getPlatformColor(caseStudy.platform)}`}>
                    {getPlatformIcon(caseStudy.platform)}
                    {caseStudy.platform.toUpperCase()}
                  </span>
                </div>

                {/* Performance Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-gold/90 text-primary-dark px-2 py-1 rounded text-xs font-semibold">
                    {caseStudy.views.toLocaleString()} views
                  </div>
                </div>
              </div>

              {/* Case Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-gold transition-colors">
                  {caseStudy.title}
                </h3>

                {/* Metrics */}
                <div className="text-center p-4 glass-card rounded-lg mb-4">
                  <div className="flex items-center justify-center gap-1 text-primary-gold mb-2">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {caseStudy.views.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Views totales</div>
                  <div className="text-xs text-primary-gold mt-1 font-medium">
                    {caseStudy.platform.toUpperCase()}
                  </div>
                </div>

                {/* CTA */}
                {caseStudy.link ? (
                  <a
                    href={caseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-gold hover:text-primary-blue transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver contenido
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">Contenido archivado</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Resultados que Hablan por Sí Solos
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-gold mb-2">
                {content.CASE_STUDIES.length}+
              </div>
              <div className="text-gray-300">
                Casos documentados
              </div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-primary-blue mb-2">
                100%
              </div>
              <div className="text-gray-300">
                Satisfacción cliente
              </div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-primary-gold mb-2">
                24h
              </div>
              <div className="text-gray-300">
                Tiempo respuesta
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            *Métricas actualizadas mensualmente basadas en reportes de plataformas
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudies;
