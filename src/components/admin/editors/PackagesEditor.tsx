import React, { useState, useEffect } from 'react';
import { Save, Package, Plus, Trash2 } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';

const PackagesEditor: React.FC = () => {
  const { content, updateContent } = useContent();
  const [packages, setPackages] = useState(content.PACKAGES);
  const [addons, setAddons] = useState(content.ADDONS);
  const [newAddon, setNewAddon] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPackages(content.PACKAGES);
    setAddons(content.ADDONS);
  }, [content]);

  const handlePackageChange = (packageType: 'starter' | 'performance' | 'full', value: any) => {
    setPackages(prev => ({ ...prev, [packageType]: value }));
    setSaved(false);
  };

  const handleAddAddon = () => {
    if (newAddon.trim()) {
      setAddons(prev => [...prev, newAddon.trim()]);
      setNewAddon('');
      setSaved(false);
    }
  };

  const handleRemoveAddon = (index: number) => {
    setAddons(prev => prev.filter((_, i) => i !== index));
    setSaved(false);
  };

  const handleSave = () => {
    updateContent({
      ...content,
      PACKAGES: packages,
      ADDONS: addons,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Paquetes y Add-ons</h2>
        <p className="text-gray-400">Configura tus paquetes de colaboración</p>
      </div>

      {/* Packages Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-200">Paquetes</h3>
        <p className="text-sm text-gray-400">
          Nota: Los paquetes actualmente están configurados como null. Puedes agregar información personalizada aquí.
        </p>
        
        <div className="grid gap-4">
          {/* Starter Package */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Paquete Starter
            </label>
            <textarea
              value={packages.starter || ''}
              onChange={(e) => handlePackageChange('starter', e.target.value || null)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              placeholder="Descripción del paquete Starter (opcional)"
              rows={3}
            />
          </div>

          {/* Performance Package */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Paquete Performance
            </label>
            <textarea
              value={packages.performance || ''}
              onChange={(e) => handlePackageChange('performance', e.target.value || null)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              placeholder="Descripción del paquete Performance (opcional)"
              rows={3}
            />
          </div>

          {/* Full Package */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Paquete Full
            </label>
            <textarea
              value={packages.full || ''}
              onChange={(e) => handlePackageChange('full', e.target.value || null)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              placeholder="Descripción del paquete Full (opcional)"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-200">Add-ons</h3>
        
        {/* Add-ons List */}
        <div className="space-y-2">
          {addons.map((addon, index) => (
            <div key={index} className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg">
              <Package className="w-4 h-4 text-primary-gold flex-shrink-0" />
              <span className="flex-1 text-white">{addon}</span>
              <button
                onClick={() => handleRemoveAddon(index)}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add New Add-on */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newAddon}
            onChange={(e) => setNewAddon(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddAddon()}
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
            placeholder="Nuevo add-on..."
          />
          <button
            onClick={handleAddAddon}
            className="px-4 py-3 bg-primary-gold/20 text-primary-gold border border-primary-gold/30 rounded-lg hover:bg-primary-gold/30 transition-all"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
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

export default PackagesEditor;

