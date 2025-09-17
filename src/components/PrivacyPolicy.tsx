import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Database, Eye, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
            <Lock className="w-8 h-8 text-primary-gold" />
            <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
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
              <Database className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">1. Información que Recopilamos</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>A través del formulario de contacto del Media Kit, recopilamos la siguiente información:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Nombre completo:</strong> Para personalizar nuestra comunicación</li>
                <li><strong>Correo electrónico:</strong> Para responder a su consulta</li>
                <li><strong>Empresa/Organización:</strong> Para entender el contexto comercial</li>
                <li><strong>Mensaje:</strong> Para conocer sus necesidades específicas</li>
                <li><strong>Fecha y hora:</strong> Para gestión interna de consultas</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">2. Cómo Utilizamos su Información</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Responder a sus consultas sobre colaboraciones comerciales</li>
                <li>Proporcionar información sobre nuestros servicios</li>
                <li>Enviar propuestas comerciales personalizadas</li>
                <li>Mantener registros de comunicaciones comerciales</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">3. Procesamiento de Datos - EmailJS</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                Utilizamos EmailJS como servicio de terceros para procesar y enviar los formularios de contacto. 
                EmailJS actúa como procesador de datos bajo nuestras instrucciones y cumple con estándares 
                internacionales de seguridad.
              </p>
              <p>
                Los datos se transmiten de forma segura y no se almacenan permanentemente en servidores de EmailJS 
                más allá del tiempo necesario para el envío del mensaje.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">4. Retención de Datos</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Conservamos su información personal durante los siguientes períodos:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Consultas activas:</strong> Hasta 2 años después del último contacto</li>
                <li><strong>Colaboraciones comerciales:</strong> Durante la vigencia del contrato + 5 años</li>
                <li><strong>Datos de marketing:</strong> Hasta que solicite su eliminación</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">5. Sus Derechos (Ley N° 19.628)</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>De acuerdo con la Ley de Protección de Datos Personales de Chile, usted tiene derecho a:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Información:</strong> Conocer el uso que damos a sus datos</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">6. Seguridad de los Datos</h2>
            <p className="text-gray-300 leading-relaxed">
              Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales 
              contra el acceso no autorizado, alteración, divulgación o destrucción. Esto incluye el uso 
              de conexiones seguras (HTTPS) y servicios de terceros confiables.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">7. Compartir Información</h2>
            <p className="text-gray-300 leading-relaxed">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-300">
              <li>Cuando sea requerido por ley o autoridad competente</li>
              <li>Con proveedores de servicios que nos ayudan a operar (como EmailJS)</li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">8. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-300 leading-relaxed">
              Este Media Kit no utiliza cookies de seguimiento. Solo utilizamos tecnologías necesarias 
              para el funcionamiento básico del sitio web y el envío de formularios.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">Contacto para Privacidad</h2>
            <p className="text-gray-300 leading-relaxed">
              Para ejercer sus derechos o realizar consultas sobre privacidad, contacte a:<br />
              <span className="text-primary-blue">Humberto Pablo Fuentes Lagos</span><br />
              Responsable del Tratamiento de Datos<br />
              Tocopilla, Región de Antofagasta, Chile<br />
              <span className="text-primary-gold">Tiempo de respuesta: 15 días hábiles</span>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
