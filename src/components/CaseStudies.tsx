import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Instagram } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const CaseStudies: React.FC = () => {
  const { content } = useContent();

  // Function to format large numbers for mobile display
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'tiktok':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
          </svg>
        );
      default:
        return <Eye className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return 'text-pink-400 bg-pink-400/20 border-pink-400/30';
      case 'tiktok':
        return 'text-primary-blue bg-primary-blue/20 border-primary-blue/30';
      default:
        return 'text-gray-300 bg-gray-300/20 border-gray-300/30';
    }
  };

  const getPlatformLogo = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return (
          <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg className="w-8 h-8 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
          </svg>
        );
      default:
        return <Eye className="w-8 h-8 text-gray-400" />;
    }
  };

  const getPlatformText = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return 'Ver en Instagram';
      case 'tiktok':
        return 'Ver en TikTok';
      default:
        return 'Ver contenido';
    }
  };

  const getTikTokImage = (index: number) => {
    const tiktokImages = [
      'https://subir-imagen.com/images/2025/09/17/1.jpg',
      'https://subir-imagen.com/images/2025/09/17/2a80773f0a3c197cc.jpg',
      'https://subir-imagen.com/images/2025/09/17/3.jpg',
      'https://subir-imagen.com/images/2025/09/17/4.jpg',
      'https://subir-imagen.com/images/2025/09/17/5.jpg'
    ];
    return tiktokImages[index] || null;
  };

  const getInstagramImage = (index: number) => {
    const instagramImages = [
      'https://subir-imagen.com/images/2025/09/17/4188b458ac94411a9.jpg',
      'https://subir-imagen.com/images/2025/09/17/5a488fa037f4d245e.jpg',
      'https://subir-imagen.com/images/2025/09/17/1c8f716fa83ed6e6f.md.jpg',
      'https://subir-imagen.com/images/2025/09/17/2.jpg',
      'https://subir-imagen.com/images/2025/09/17/3.jpg'
    ];
    return instagramImages[index] || null;
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
          {content.CASE_STUDIES.map((caseStudy, index) => {
            // Contadores específicos por plataforma
            const tiktokIndex = content.CASE_STUDIES.slice(0, index).filter(c => c.platform === 'tiktok').length;
            const instagramIndex = content.CASE_STUDIES.slice(0, index).filter(c => c.platform === 'instagram').length;
            
            const tiktokImage = caseStudy.platform === 'tiktok' ? getTikTokImage(tiktokIndex) : null;
            const instagramImage = caseStudy.platform === 'instagram' ? getInstagramImage(instagramIndex) : null;
            const backgroundImage = tiktokImage || instagramImage;
            
            // Debug temporal
            console.log(`Case ${index}: Platform: ${caseStudy.platform}, Title: ${caseStudy.title}`);
            console.log(`TikTok Index: ${tiktokIndex}, Instagram Index: ${instagramIndex}`);
            console.log(`TikTok Image: ${tiktokImage}`);
            console.log(`Instagram Image: ${instagramImage}`);
            console.log(`Final Background Image: ${backgroundImage}`);
            console.log('---');
            
            return (
              <motion.a
                key={index}
                href={caseStudy.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover group overflow-hidden cursor-pointer block"
              >
                {/* Case Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Background Image */}
                    {backgroundImage && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                      />
                    )}
                    
                    {/* Platform Preview */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          {getPlatformLogo(caseStudy.platform)}
                        </div>
                        <div className="text-sm font-medium">{getPlatformText(caseStudy.platform)}</div>
                      </div>
                    </div>
                    
                    {/* Background pattern for non-TikTok */}
                    {!tiktokImage && (
                      <div className="absolute inset-0 opacity-10">
                        <div className={`w-full h-full bg-gradient-to-br ${
                          caseStudy.platform === 'instagram'
                            ? 'from-pink-400/20 to-purple-500/20'
                            : 'from-primary-blue/20 to-primary-gold/20'
                        }`}></div>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-center gap-2 text-white bg-black/50 backdrop-blur-sm rounded-lg py-2 px-4">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">{getPlatformText(caseStudy.platform)}</span>
                      </div>
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
                      {typeof caseStudy.views === 'string' ? caseStudy.views : formatNumber(caseStudy.views as number)} views
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
                      {typeof caseStudy.views === 'string' ? caseStudy.views : formatNumber(caseStudy.views as number)}
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
              </motion.a>
            );
          })}
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





