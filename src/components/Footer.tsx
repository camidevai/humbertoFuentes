import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';
import content from '../content.json';

type PageType = 'main' | 'terms' | 'privacy' | 'usage';

interface FooterProps {
  onPageChange: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: `https://instagram.com/${content.HANDLE.replace('@', '')}`,
      color: 'hover:text-pink-400'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-red-400'
    },
    ...(content.CONTACT.whatsapp ? [{
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: content.CONTACT.whatsapp,
      color: 'hover:text-green-400'
    }] : [])
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Paquetes', href: '#packages' },
    { name: 'Casos de éxito', href: '#cases' },
    { name: 'Contacto', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Términos de servicio', action: () => onPageChange('terms') },
    { name: 'Política de privacidad', action: () => onPageChange('privacy') },
    { name: 'Derechos de uso', action: () => onPageChange('usage') }
  ];

  return (
    <footer className="bg-gradient-to-t from-primary-dark to-gray-900 border-t border-white/10">
      <div className="container-custom">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {content.CREATOR_NAME}
                </h3>
                <p className="text-primary-gold font-medium mb-4">
                  {content.HANDLE}
                </p>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Mentor y emprendedor del Norte Grande especializado en colaboraciones 
                  estratégicas que generan resultados medibles para marcas y franquicias.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-gold" />
                  <span className="text-sm">{content.LOCATION}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary-blue" />
                  <a
                    href={`mailto:${content.CONTACT.email}`}
                    className="text-sm hover:text-primary-blue transition-colors"
                  >
                    {content.CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 glass-card rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={`Seguir en ${social.name}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Navegación
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Servicios
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-300 text-sm">Colaboraciones estratégicas</li>
                <li className="text-gray-300 text-sm">Contenido para franquicias</li>
                <li className="text-gray-300 text-sm">UGC personalizado</li>
                <li className="text-gray-300 text-sm">Mentorías empresariales</li>
                <li className="text-gray-300 text-sm">Campañas de performance</li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {content.CREATOR_NAME}. Todos los derechos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-gray-400 hover:text-primary-gold transition-colors text-sm underline"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Developer Credit */}
            <div className="text-gray-500 text-xs text-center md:text-right">
              Desarrollado con ❤️ para el crecimiento de marcas por{' '}
              <a
                href="https://www.camidevai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-primary-blue transition-colors"
              >
                www.camidevai.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 glass-card rounded-full text-primary-gold hover:bg-white/10 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Volver arriba"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>

      </div>
    </footer>
  );
};

export default Footer;
