import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import content from '../content.json';

interface FormData {
  name: string;
  company: string;
  email: string;
  budget: string;
  objective: string;
  deadline: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    budget: '',
    objective: '',
    deadline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgetOptions = [
    'Menos de $500.000 CLP',
    '$500.000 - $1.000.000 CLP',
    '$1.000.000 - $2.000.000 CLP',
    'Más de $2.000.000 CLP',
    'A consultar'
  ];

  const objectiveOptions = [
    'Lanzamiento de franquicia',
    'Awareness regional',
    'Generación de UGC',
    'Campaña de performance',
    'Colaboración a largo plazo',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - these should come from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        budget: formData.budget,
        objective: formData.objective,
        deadline: formData.deadline,
        message: formData.message,
        to_email: content.CONTACT.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        budget: '',
        objective: '',
        deadline: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary-dark/30 to-primary-dark">
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
            Trabajemos{' '}
            <span className="gradient-text">Juntos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cuéntanos sobre tu proyecto y descubre cómo podemos impulsar tu marca
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Solicitar Propuesta
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="email@empresa.com"
                  />
                </div>

                {/* Budget & Objective */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-gold transition-colors"
                    >
                      <option value="">Seleccionar rango</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option} className="bg-primary-dark">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="objective" className="block text-sm font-medium text-gray-300 mb-2">
                      Objetivo principal *
                    </label>
                    <select
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-gold transition-colors"
                    >
                      <option value="">Seleccionar objetivo</option>
                      {objectiveOptions.map((option, index) => (
                        <option key={index} value={option} className="bg-primary-dark">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-2">
                    Fecha límite del proyecto
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-gold transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Detalles del proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold transition-colors resize-none"
                    placeholder="Cuéntanos más sobre tu proyecto, audiencia objetivo, y cualquier detalle relevante..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Propuesta
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>¡Mensaje enviado exitosamente! Te responderemos en menos de {content.CONTACT.sla_hours} horas.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contacto Directo
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-lg text-primary-gold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Email</div>
                    <a
                      href={`mailto:${content.CONTACT.email}`}
                      className="text-gray-300 hover:text-primary-gold transition-colors"
                    >
                      {content.CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-lg text-primary-blue">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">WhatsApp</div>
                    {content.CONTACT.whatsapp ? (
                      <a
                        href={content.CONTACT.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-primary-blue transition-colors"
                      >
                        Mensaje directo
                      </a>
                    ) : (
                      <span className="text-gray-500">Disponible vía formulario</span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-lg text-primary-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Ubicación</div>
                    <div className="text-gray-300">
                      {content.LOCATION}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass-card rounded-lg text-primary-blue">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Tiempo de respuesta</div>
                    <div className="text-gray-300">
                      Máximo {content.CONTACT.sla_hours} horas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Objetivos Específicos
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, objective: 'Lanzamiento de franquicia' }));
                    document.getElementById('objective')?.focus();
                  }}
                  className="w-full text-left p-4 glass-card rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary-gold font-medium mb-1">Lanzamiento Franquicia</div>
                  <div className="text-gray-400 text-sm">Estrategia completa para nuevas franquicias</div>
                </button>

                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, objective: 'Awareness regional' }));
                    document.getElementById('objective')?.focus();
                  }}
                  className="w-full text-left p-4 glass-card rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary-blue font-medium mb-1">Awareness Regional</div>
                  <div className="text-gray-400 text-sm">Posicionamiento en el Norte Grande</div>
                </button>

                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, objective: 'Generación de UGC' }));
                    document.getElementById('objective')?.focus();
                  }}
                  className="w-full text-left p-4 glass-card rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary-gold font-medium mb-1">UGC Premium</div>
                  <div className="text-gray-400 text-sm">Contenido auténtico para tu marca</div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
