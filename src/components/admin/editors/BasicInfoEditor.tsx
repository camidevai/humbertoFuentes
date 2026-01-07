import React, { useState, useEffect } from 'react';
import { Save, User, AtSign, MapPin } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';

const BasicInfoEditor: React.FC = () => {
  const { content, updateContent } = useContent();
  const [formData, setFormData] = useState({
    CREATOR_NAME: content.CREATOR_NAME,
    HANDLE: content.HANDLE,
    LOCATION: content.LOCATION,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFormData({
      CREATOR_NAME: content.CREATOR_NAME,
      HANDLE: content.HANDLE,
      LOCATION: content.LOCATION,
    });
  }, [content]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateContent({
      ...content,
      ...formData,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Información Básica</h2>
        <p className="text-gray-400">Actualiza tu información personal y de ubicación</p>
      </div>

      <div className="space-y-4">
        {/* Creator Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nombre Completo
            </div>
          </label>
          <input
            type="text"
            value={formData.CREATOR_NAME}
            onChange={(e) => handleChange('CREATOR_NAME', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all"
            placeholder="Tu nombre completo"
          />
        </div>

        {/* Handle */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <AtSign className="w-4 h-4" />
              Handle / Usuario
            </div>
          </label>
          <input
            type="text"
            value={formData.HANDLE}
            onChange={(e) => handleChange('HANDLE', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all"
            placeholder="@tuhandle"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Ubicación
            </div>
          </label>
          <input
            type="text"
            value={formData.LOCATION}
            onChange={(e) => handleChange('LOCATION', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent transition-all"
            placeholder="Ciudad, Región, País"
          />
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

export default BasicInfoEditor;

