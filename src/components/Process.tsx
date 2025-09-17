import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, BarChart3, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Brief & Estrategia",
      description: "Análisis detallado de objetivos, audiencia target y definición de KPIs específicos para tu marca.",
      duration: "24-48 horas",
      details: [
        "Reunión estratégica inicial",
        "Definición de objetivos medibles",
        "Análisis de audiencia target",
        "Propuesta de contenido personalizada"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Producción & Entrega",
      description: "Creación de contenido premium con revisiones incluidas y entrega en plazos garantizados.",
      duration: "3-7 días",
      details: [
        "Producción de contenido profesional",
        "Una ronda de revisiones incluida",
        "Optimización para cada plataforma",
        "Entrega en formatos requeridos"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reporting & Análisis",
      description: "Seguimiento completo de métricas y reporte detallado de resultados obtenidos.",
      duration: "Post-campaña",
      details: [
        "Monitoreo de métricas en tiempo real",
        "Reporte de performance detallado",
        "Análisis de ROI y conversiones",
        "Recomendaciones para futuras campañas"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-primary-dark/50">
      <div className="container-custom">
        

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-gold via-primary-blue to-primary-gold transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-card-hover p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-gold to-primary-blue rounded-full flex items-center justify-center text-primary-dark font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 glass-card rounded-full text-primary-gold">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-block badge mb-6">
                    {step.duration}
                  </div>

                  {/* Details List */}
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center border-2 border-primary-gold">
                      <ArrowRight className="w-4 h-4 text-primary-gold" />
                    </div>
                  </div>
                )}

                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center border-2 border-primary-gold rotate-90">
                      <ArrowRight className="w-4 h-4 text-primary-gold" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Garantía de Calidad
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada proyecto incluye revisiones sin costo adicional y garantía de satisfacción. 
            Si el contenido no cumple con los estándares acordados, trabajamos hasta lograr el resultado esperado.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold mb-2">100%</div>
              <div className="text-gray-400 text-sm">Satisfacción garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-blue mb-2">24h</div>
              <div className="text-gray-400 text-sm">Tiempo de respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold mb-2">1</div>
              <div className="text-gray-400 text-sm">Ronda de revisiones incluida</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
