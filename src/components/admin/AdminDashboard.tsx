import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, RotateCcw, BarChart3, Users, Package, FileText, MessageSquare, Eye, Key } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useContent } from '../../contexts/ContentContext';
import SocialMetricsEditor from './editors/SocialMetricsEditor';
import ContactEditor from './editors/ContactEditor';
import PackagesEditor from './editors/PackagesEditor';
import CaseStudiesEditor from './editors/CaseStudiesEditor';
import TestimonialsEditor from './editors/TestimonialsEditor';
import BasicInfoEditor from './editors/BasicInfoEditor';
import PasswordChange from './editors/PasswordChange';
import PreviewPanel from './PreviewPanel';

type TabType = 'basic' | 'social' | 'contact' | 'packages' | 'cases' | 'testimonials' | 'password';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const [showPreview, setShowPreview] = useState(false);
  const { logout } = useAuth();
  const { resetContent } = useContent();

  const tabs = [
    { id: 'basic' as TabType, label: 'Información Básica', icon: <FileText className="w-5 h-5" /> },
    { id: 'social' as TabType, label: 'Métricas Sociales', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'contact' as TabType, label: 'Contacto', icon: <Users className="w-5 h-5" /> },
    { id: 'packages' as TabType, label: 'Paquetes', icon: <Package className="w-5 h-5" /> },
    { id: 'cases' as TabType, label: 'Casos de Éxito', icon: <FileText className="w-5 h-5" /> },
    { id: 'testimonials' as TabType, label: 'Testimonios', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'password' as TabType, label: 'Cambiar Contraseña', icon: <Key className="w-5 h-5" /> },
  ];

  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que quieres restaurar los valores por defecto? Esta acción no se puede deshacer.')) {
      resetContent();
      alert('Contenido restaurado a valores por defecto');
    }
  };

  const renderEditor = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicInfoEditor />;
      case 'social':
        return <SocialMetricsEditor />;
      case 'contact':
        return <ContactEditor />;
      case 'packages':
        return <PackagesEditor />;
      case 'cases':
        return <CaseStudiesEditor />;
      case 'testimonials':
        return <TestimonialsEditor />;
      case 'password':
        return <PasswordChange />;
      default:
        return <BasicInfoEditor />;
    }
  };

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <header className="bg-white/5 border-b border-white/10 sticky top-0 z-50 backdrop-blur-lg">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Panel de <span className="gradient-text">Administración</span>
              </h1>
              <p className="text-sm text-gray-400 mt-1">Gestiona el contenido de tu Media Kit</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-blue/20 text-primary-blue border border-primary-blue/30 rounded-lg hover:bg-primary-blue/30 transition-all"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? 'Ocultar' : 'Vista Previa'}
              </button>
              
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg hover:bg-orange-500/30 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Restaurar
              </button>
              
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="glass-card p-4 rounded-xl sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-gold to-primary-blue text-white'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className={showPreview ? 'lg:col-span-5' : 'lg:col-span-9'}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              {renderEditor()}
            </motion.div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="lg:col-span-4">
              <PreviewPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

