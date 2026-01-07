import React from 'react';
import { useContent } from '../../contexts/ContentContext';
import { Eye, Instagram, Music, Mail, MessageCircle } from 'lucide-react';

const PreviewPanel: React.FC = () => {
  const { content } = useContent();

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="glass-card p-6 rounded-xl sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <Eye className="w-5 h-5 text-primary-gold" />
        <h3 className="text-lg font-bold">Vista Previa</h3>
      </div>

      <div className="space-y-6">
        {/* Basic Info */}
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Información Básica</h4>
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-500">Nombre</p>
              <p className="text-white font-medium">{content.CREATOR_NAME}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Handle</p>
              <p className="text-primary-gold">{content.HANDLE}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Ubicación</p>
              <p className="text-gray-300">{content.LOCATION}</p>
            </div>
          </div>
        </div>

        {/* Social Metrics */}
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Métricas Sociales</h4>
          
          {/* Instagram */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Instagram className="w-4 h-4 text-primary-gold" />
              <span className="text-xs font-medium text-gray-400">Instagram</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-gray-500">Seguidores</p>
                <p className="text-white font-semibold">{formatNumber(content.PLATFORMS.instagram.followers)}</p>
              </div>
              <div>
                <p className="text-gray-500">Vistas 30d</p>
                <p className="text-white font-semibold">{formatNumber(content.PLATFORMS.instagram.views_30d)}</p>
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Music className="w-4 h-4 text-primary-blue" />
              <span className="text-xs font-medium text-gray-400">TikTok</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-gray-500">Seguidores</p>
                <p className="text-white font-semibold">{formatNumber(content.PLATFORMS.tiktok.followers)}</p>
              </div>
              <div>
                <p className="text-gray-500">Vistas 60d</p>
                <p className="text-white font-semibold">{formatNumber(content.PLATFORMS.tiktok.summary_60d.post_views)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Contacto</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-gray-500" />
              <span className="text-gray-300">{content.CONTACT.email || 'No configurado'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-3 h-3 text-gray-500" />
              <span className="text-gray-300">
                {content.CONTACT.whatsapp ? 'WhatsApp configurado' : 'No configurado'}
              </span>
            </div>
          </div>
        </div>

        {/* Case Studies Count */}
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Casos de Éxito</h4>
          <p className="text-2xl font-bold text-primary-gold">{content.CASE_STUDIES.length}</p>
          <p className="text-xs text-gray-500">casos registrados</p>
        </div>

        {/* Testimonials Count */}
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Testimonios</h4>
          <p className="text-2xl font-bold text-primary-blue">{content.TESTIMONIALS.length}</p>
          <p className="text-xs text-gray-500">testimonios registrados</p>
        </div>

        {/* Add-ons Count */}
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Add-ons</h4>
          <p className="text-2xl font-bold text-white">{content.ADDONS.length}</p>
          <p className="text-xs text-gray-500">servicios adicionales</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;

