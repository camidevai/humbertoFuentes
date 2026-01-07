import React, { useState, useEffect } from 'react';
import { Save, Instagram, Music } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';

const SocialMetricsEditor: React.FC = () => {
  const { content, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok'>('instagram');
  const [saved, setSaved] = useState(false);
  
  const [instagramData, setInstagramData] = useState(content.PLATFORMS.instagram);
  const [tiktokData, setTiktokData] = useState(content.PLATFORMS.tiktok);

  useEffect(() => {
    setInstagramData(content.PLATFORMS.instagram);
    setTiktokData(content.PLATFORMS.tiktok);
  }, [content]);

  const handleInstagramChange = (field: string, value: any) => {
    setInstagramData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleTikTokChange = (field: string, value: any) => {
    setTiktokData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    updateContent({
      ...content,
      PLATFORMS: {
        instagram: instagramData,
        tiktok: tiktokData,
      },
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Métricas de Redes Sociales</h2>
        <p className="text-gray-400">Actualiza tus estadísticas de Instagram y TikTok</p>
      </div>

      {/* Platform Tabs */}
      <div className="flex gap-2 border-b border-white/10">
        <button
          onClick={() => setActiveTab('instagram')}
          className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-all ${
            activeTab === 'instagram'
              ? 'border-primary-gold text-primary-gold'
              : 'border-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </button>
        <button
          onClick={() => setActiveTab('tiktok')}
          className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-all ${
            activeTab === 'tiktok'
              ? 'border-primary-blue text-primary-blue'
              : 'border-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          <Music className="w-5 h-5" />
          TikTok
        </button>
      </div>

      {/* Instagram Metrics */}
      {activeTab === 'instagram' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Seguidores</label>
              <input
                type="number"
                value={instagramData.followers}
                onChange={(e) => handleInstagramChange('followers', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Crecimiento 30d (%)</label>
              <input
                type="number"
                step="0.1"
                value={instagramData.growth_30d_percent}
                onChange={(e) => handleInstagramChange('growth_30d_percent', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vistas 30d</label>
              <input
                type="number"
                value={instagramData.views_30d}
                onChange={(e) => handleInstagramChange('views_30d', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Alcance 30d</label>
              <input
                type="number"
                value={instagramData.reach_30d}
                onChange={(e) => handleInstagramChange('reach_30d', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Interacciones 30d</label>
              <input
                type="number"
                value={instagramData.interactions_30d}
                onChange={(e) => handleInstagramChange('interactions_30d', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
            </div>
          </div>
        </div>
      )}

      {/* TikTok Metrics */}
      {activeTab === 'tiktok' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Seguidores</label>
              <input
                type="number"
                value={tiktokData.followers}
                onChange={(e) => handleTikTokChange('followers', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vistas 60d</label>
              <input
                type="number"
                value={tiktokData.summary_60d.post_views}
                onChange={(e) => handleTikTokChange('summary_60d', { ...tiktokData.summary_60d, post_views: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Vistas Perfil 60d</label>
              <input
                type="number"
                value={tiktokData.summary_60d.profile_views}
                onChange={(e) => handleTikTokChange('summary_60d', { ...tiktokData.summary_60d, profile_views: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Likes 60d</label>
              <input
                type="number"
                value={tiktokData.summary_60d.likes}
                onChange={(e) => handleTikTokChange('summary_60d', { ...tiktokData.summary_60d, likes: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
              />
            </div>
          </div>
        </div>
      )}

      {/* Save Button */}
      <div className="flex items-center gap-4 pt-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-gold to-primary-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          <Save className="w-5 h-5" />
          Guardar Cambios
        </button>
        {saved && <span className="text-green-400 text-sm">✓ Guardado</span>}
      </div>
    </div>
  );
};

export default SocialMetricsEditor;

