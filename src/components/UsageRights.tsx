import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Copyright, Image, AlertTriangle, CheckCircle } from 'lucide-react';

interface UsageRightsProps {
  onBack: () => void;
}

const UsageRights: React.FC<UsageRightsProps> = ({ onBack }) => {
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
            <Copyright className="w-8 h-8 text-primary-gold" />
            <h1 className="text-3xl md:text-4xl font-bold">Derechos de Uso</h1>
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
              <Copyright className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">1. Propiedad Intelectual</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                Todo el contenido presente en este Media Kit, incluyendo pero no limitado a textos, imágenes, 
                gráficos, logos, casos de estudio, métricas, diseño y estructura, es propiedad exclusiva de 
                <strong className="text-primary-gold"> Humberto Pablo Fuentes Lagos</strong> y está protegido 
                por las leyes de propiedad intelectual de Chile (Ley N° 17.336).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-semibold text-primary-gold">2. Usos Permitidos</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Se permite el uso del contenido de este Media Kit únicamente para:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Evaluación comercial:</strong> Revisar información para posibles colaboraciones</li>
                <li><strong>Presentaciones internas:</strong> Mostrar a equipos internos para toma de decisiones</li>
                <li><strong>Propuestas comerciales:</strong> Incluir información en propuestas dirigidas al titular</li>
                <li><strong>Referencias profesionales:</strong> Citar métricas con atribución adecuada</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-semibold text-primary-gold">3. Usos Prohibidos</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Está estrictamente prohibido:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Reproducción no autorizada:</strong> Copiar o distribuir el contenido sin permiso</li>
                <li><strong>Uso comercial directo:</strong> Utilizar el contenido para promocionar otros servicios</li>
                <li><strong>Modificación:</strong> Alterar, editar o manipular el contenido original</li>
                <li><strong>Competencia desleal:</strong> Usar la información para crear productos competidores</li>
                <li><strong>Distribución masiva:</strong> Compartir públicamente sin autorización escrita</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Image className="w-6 h-6 text-primary-blue" />
              <h2 className="text-2xl font-semibold text-primary-gold">4. Casos de Estudio y Métricas</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Los casos de estudio y métricas presentados en este Media Kit:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Son propiedad intelectual del titular y sus respectivas plataformas</li>
                <li>Reflejan resultados reales obtenidos en colaboraciones anteriores</li>
                <li>No pueden ser utilizados como garantía de resultados futuros</li>
                <li>Requieren autorización escrita para uso en materiales de terceros</li>
                <li>Están sujetos a las políticas de las plataformas originales (TikTok, Instagram)</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">5. Atribución Requerida</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Cuando se permita el uso del contenido, debe incluirse la siguiente atribución:</p>
              <div className="bg-gray-800 p-4 rounded-lg mt-4">
                <code className="text-primary-gold">
                  "Fuente: Media Kit de Humberto Pablo Fuentes Lagos (@humbertofuentescl) - 
                  Tocopilla, Región de Antofagasta, Chile"
                </code>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">6. Licencias de Terceros</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>Este Media Kit utiliza contenido bajo las siguientes licencias:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Iconos:</strong> Lucide React (Licencia MIT)</li>
                <li><strong>Fuentes:</strong> Google Fonts (Licencia SIL Open Font)</li>
                <li><strong>Frameworks:</strong> React, Tailwind CSS (Licencias MIT)</li>
                <li><strong>Contenido de redes sociales:</strong> Sujeto a términos de TikTok e Instagram</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">7. Solicitud de Permisos</h2>
            <p className="text-gray-300 leading-relaxed">
              Para solicitar permisos de uso comercial, distribución o modificación del contenido, 
              debe contactar directamente al titular con al menos 15 días de anticipación, 
              especificando el uso previsto, duración y alcance de la utilización.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">8. Violaciones y Sanciones</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                El uso no autorizado del contenido constituye una violación de los derechos de autor 
                y puede resultar en:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Acciones legales bajo la Ley N° 17.336 de Propiedad Intelectual</li>
                <li>Solicitudes de cese y desistimiento</li>
                <li>Reclamaciones por daños y perjuicios</li>
                <li>Medidas cautelares para proteger los derechos</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">9. Actualizaciones de Derechos</h2>
            <p className="text-gray-300 leading-relaxed">
              Estos derechos de uso pueden ser modificados en cualquier momento. Las modificaciones 
              entrarán en vigor inmediatamente después de su publicación en este Media Kit. 
              Es responsabilidad del usuario revisar periódicamente estos términos.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold text-primary-gold mb-4">Contacto para Derechos de Uso</h2>
            <p className="text-gray-300 leading-relaxed">
              Para consultas sobre derechos de uso, permisos o licencias, contacte a:<br />
              <span className="text-primary-blue">Humberto Pablo Fuentes Lagos</span><br />
              Titular de los Derechos de Propiedad Intelectual<br />
              Tocopilla, Región de Antofagasta, Chile<br />
              <span className="text-primary-gold">Respuesta en 5-10 días hábiles</span>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default UsageRights;
