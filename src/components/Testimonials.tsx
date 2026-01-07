import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Testimonials: React.FC = () => {
  const { content } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter out testimonials with null values for demo
  const validTestimonials = content.TESTIMONIALS.filter(t => t.name && t.company && t.quote);
  
  // Fallback testimonials for demo purposes
  const fallbackTestimonials = [
    {
      name: "Pendiente",
      company: "Empresa Colaboradora",
      rating: 5,
      quote: "Testimonial pendiente de cliente. Los resultados hablan por sí solos en cada colaboración."
    },
    {
      name: "Por confirmar",
      company: "Marca Regional",
      rating: 5,
      quote: "Esperando testimonial de marca colaboradora. El profesionalismo y resultados son excepcionales."
    },
    {
      name: "En proceso",
      company: "Franquicia Nacional",
      rating: 5,
      quote: "Testimonial en proceso de aprobación. La estrategia de contenido superó nuestras expectativas."
    }
  ];

  const testimonials = validTestimonials.length > 0 ? validTestimonials : fallbackTestimonials;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };



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
            Lo que dicen las{' '}
            <span className="gradient-text">Marcas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonios reales de colaboraciones exitosas que generaron resultados medibles
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-colors"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 glass-card rounded-full hover:bg-white/10 transition-colors"
              aria-label="Siguiente testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary-gold mx-auto mb-6" />

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-gold fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-primary-blue">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-gold'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ir al testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            ¿Listo para ser el próximo caso de éxito?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Iniciar Colaboración
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
