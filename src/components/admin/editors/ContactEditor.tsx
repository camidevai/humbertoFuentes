import React, { useState, useEffect } from 'react';
import { Save, Mail, MessageCircle, Clock } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';

const ContactEditor: React.FC = () => {
  const { content, updateContent } = useContent();
  const [formData, setFormData] = useState(content.CONTACT);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFormData(content.CONTACT);
  }, [content]);

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateContent({
      ...content,
      CONTACT: formData,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
        <p className="text-gray-400">Actualiza tus datos de contacto</p>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </div>
          </label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all"
            placeholder="tu@email.com"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp (URL completa)
            </div>
          </label>
          <input
            type="url"
            value={formData.whatsapp || ''}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all"
            placeholder="https://wa.me/56XXXXXXXXX"
          />
          <p className="text-xs text-gray-500 mt-1">
            Formato: https://wa.me/56XXXXXXXXX
          </p>
        </div>

        {/* SLA Hours */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Tiempo de Respuesta (horas)
            </div>
          </label>
          <input
            type="number"
            value={formData.sla_hours}
            onChange={(e) => handleChange('sla_hours', parseInt(e.target.value))}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all"
            placeholder="24"
          />
          <p className="text-xs text-gray-500 mt-1">
            Tiempo promedio de respuesta a consultas
          </p>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4 pt-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-gold to-primary-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-gold/20 transition-all duration-300"
        >
          <Save className="w-5 h-5" />
          Guardar Cambios
        </button>
        
        {saved && (
          <span className="text-green-400 text-sm font-medium">
            ✓ Cambios guardados exitosamente
          </span>
        )}
      </div>
    </div>
  );
};

export default ContactEditor;

