import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, MessageSquare, Star } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';
import { Testimonial } from '../../../types/content';

const TestimonialsEditor: React.FC = () => {
  const { content, updateContent } = useContent();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(content.TESTIMONIALS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setTestimonials(content.TESTIMONIALS);
  }, [content]);

  const handleAddTestimonial = () => {
    const newTestimonial: Testimonial = {
      name: '',
      company: '',
      rating: 5,
      quote: '',
    };
    setTestimonials(prev => [...prev, newTestimonial]);
    setSaved(false);
  };

  const handleRemoveTestimonial = (index: number) => {
    setTestimonials(prev => prev.filter((_, i) => i !== index));
    setSaved(false);
  };

  const handleTestimonialChange = (index: number, field: keyof Testimonial, value: any) => {
    setTestimonials(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
    setSaved(false);
  };

  const handleSave = () => {
    updateContent({
      ...content,
      TESTIMONIALS: testimonials,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Testimonios</h2>
          <p className="text-gray-400">Gestiona las reseñas de tus clientes</p>
        </div>
        <button
          onClick={handleAddTestimonial}
          className="flex items-center gap-2 px-4 py-2 bg-primary-gold/20 text-primary-gold border border-primary-gold/30 rounded-lg hover:bg-primary-gold/30 transition-all"
        >
          <Plus className="w-5 h-5" />
          Agregar Testimonio
        </button>
      </div>

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-gold" />
                <span className="text-sm font-medium text-gray-300">Testimonio #{index + 1}</span>
              </div>
              <button
                onClick={() => handleRemoveTestimonial(index)}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Nombre</label>
                <input
                  type="text"
                  value={testimonial.name || ''}
                  onChange={(e) => handleTestimonialChange(index, 'name', e.target.value || null)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                  placeholder="Nombre del cliente"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Empresa</label>
                <input
                  type="text"
                  value={testimonial.company || ''}
                  onChange={(e) => handleTestimonialChange(index, 'company', e.target.value || null)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                  placeholder="Nombre de la empresa"
                />
              </div>

              {/* Rating */}
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Calificación
                  </div>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleTestimonialChange(index, 'rating', rating)}
                      className={`p-2 rounded transition-all ${
                        testimonial.rating >= rating
                          ? 'text-yellow-400'
                          : 'text-gray-600 hover:text-gray-400'
                      }`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-400 mb-1">Testimonio</label>
                <textarea
                  value={testimonial.quote || ''}
                  onChange={(e) => handleTestimonialChange(index, 'quote', e.target.value || null)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
                  placeholder="Escribe el testimonio del cliente..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No hay testimonios. Haz clic en "Agregar Testimonio" para comenzar.
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

export default TestimonialsEditor;

