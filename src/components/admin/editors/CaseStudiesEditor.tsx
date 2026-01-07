import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, FileText, ExternalLink } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';
import { CaseStudy } from '../../../types/content';

const CaseStudiesEditor: React.FC = () => {
  const { content, updateContent } = useContent();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(content.CASE_STUDIES);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setCaseStudies(content.CASE_STUDIES);
  }, [content]);

  const handleAddCase = () => {
    const newCase: CaseStudy = {
      title: 'Nuevo Caso',
      views: 0,
      link: '',
      platform: 'instagram',
    };
    setCaseStudies(prev => [...prev, newCase]);
    setSaved(false);
  };

  const handleRemoveCase = (index: number) => {
    setCaseStudies(prev => prev.filter((_, i) => i !== index));
    setSaved(false);
  };

  const handleCaseChange = (index: number, field: keyof CaseStudy, value: any) => {
    setCaseStudies(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
    setSaved(false);
  };

  const handleSave = () => {
    updateContent({
      ...content,
      CASE_STUDIES: caseStudies,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Casos de Éxito</h2>
          <p className="text-gray-400">Gestiona tu portafolio de trabajos destacados</p>
        </div>
        <button
          onClick={handleAddCase}
          className="flex items-center gap-2 px-4 py-2 bg-primary-gold/20 text-primary-gold border border-primary-gold/30 rounded-lg hover:bg-primary-gold/30 transition-all"
        >
          <Plus className="w-5 h-5" />
          Agregar Caso
        </button>
      </div>

      {/* Case Studies List */}
      <div className="space-y-4">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-gold" />
                <span className="text-sm font-medium text-gray-300">Caso #{index + 1}</span>
              </div>
              <button
                onClick={() => handleRemoveCase(index)}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Title */}
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-400 mb-1">Título</label>
                <input
                  type="text"
                  value={caseStudy.title}
                  onChange={(e) => handleCaseChange(index, 'title', e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                  placeholder="Título del caso"
                />
              </div>

              {/* Views */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Vistas</label>
                <input
                  type="number"
                  value={caseStudy.views}
                  onChange={(e) => handleCaseChange(index, 'views', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                  placeholder="0"
                />
              </div>

              {/* Platform */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Plataforma</label>
                <select
                  value={caseStudy.platform}
                  onChange={(e) => handleCaseChange(index, 'platform', e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                >
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              {/* Link */}
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  <div className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Enlace
                  </div>
                </label>
                <input
                  type="url"
                  value={caseStudy.link || ''}
                  onChange={(e) => handleCaseChange(index, 'link', e.target.value || null)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>
        ))}

        {caseStudies.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No hay casos de éxito. Haz clic en "Agregar Caso" para comenzar.
          </div>
        )}
      </div>

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

export default CaseStudiesEditor;

