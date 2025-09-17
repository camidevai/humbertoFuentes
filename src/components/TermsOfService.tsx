import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Shield, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <div className="container-custom py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary-gold hover:text-primary-blue transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Media Kit
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary-gold" />
            <h1 className="text-3xl md:text-4xl font-bold">Términos de Servicio</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Última actualización: {new Date().toLocaleDateString('es-CL')}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 space-y-8"
        >
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">1. Aceptación de los Términos</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Al utilizar el formulario de contacto del Media Kit de Humberto Pablo Fuentes Lagos, usted acepta 
              estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguno de estos términos, 
              no utilice nuestros servicios.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">2. Descripción del Servicio</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                Nuestro Media Kit proporciona información sobre servicios de colaboración estratégica para marcas, 
                incluyendo:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Consultas sobre colaboraciones comerciales</li>
                <li>Información sobre paquetes de servicios de marketing</li>
                <li>Propuestas de contenido estratégico</li>
                <li>Asesorías en emprendimiento y franquicias</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">3. Uso del Formulario de Contacto</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Al enviar información a través de nuestro formulario de contacto, usted declara que:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>La información proporcionada es veraz y exacta</li>
                <li>Tiene autoridad para representar a la empresa mencionada</li>
                <li>Su consulta es de naturaleza comercial legítima</li>
                <li>No utilizará el servicio para spam o actividades fraudulentas</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-gray-300 leading-relaxed">
              De acuerdo con la legislación chilena y la Ley del Consumidor (Ley N° 19.496), nuestros servicios 
              se proporcionan "tal como están". No garantizamos resultados específicos de las colaboraciones 
              comerciales. Nuestra responsabilidad se limita al valor de los servicios contratados.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-300 leading-relaxed">
              Todo el contenido del Media Kit, incluyendo textos, imágenes, casos de estudio y diseño, 
              está protegido por derechos de autor. El uso no autorizado está prohibido según la 
              Ley N° 17.336 sobre Propiedad Intelectual de Chile.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">6. Modificaciones</h2>
            <p className="text-gray-300 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">7. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-300 leading-relaxed">
              Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa 
              será resuelta en los tribunales competentes de la Región de Antofagasta, Chile.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">Contacto Legal</h2>
            <p className="text-gray-300 leading-relaxed">
              Para consultas legales relacionadas con estos términos, contacte a:<br />
              <span className="text-primary-blue">Humberto Pablo Fuentes Lagos</span><br />
              Tocopilla, Región de Antofagasta, Chile
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
