import React, { useEffect } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

const PDFExport: React.FC = () => {
  useEffect(() => {
    const handleDownloadPDF = () => {
      // Create a clean version of the page for PDF
      const element = document.body.cloneNode(true) as HTMLElement;
      
      // Remove interactive elements that shouldn't be in PDF
      const elementsToRemove = [
        'button[aria-label="Volver arriba"]',
        '.fixed',
        'form',
        'input',
        'textarea',
        'select',
        'button:not(.btn-primary):not(.btn-secondary):not(.btn-outline)',
        '[class*="hover:"]',
        '.animate-pulse',
        '.animate-spin'
      ];
      
      elementsToRemove.forEach(selector => {
        const elements = element.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });

      // Clean up animations and interactive classes
      const allElements = element.querySelectorAll('*');
      allElements.forEach(el => {
        // Remove animation classes
        const classList = Array.from(el.classList);
        classList.forEach(className => {
          if (className.includes('animate-') || 
              className.includes('hover:') || 
              className.includes('transition-') ||
              className.includes('duration-')) {
            el.classList.remove(className);
          }
        });
      });

      // Add PDF-specific styles
      const style = document.createElement('style');
      style.textContent = `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          .glass-card {
            background: #f8f9fa !important;
            border: 1px solid #dee2e6 !important;
            backdrop-filter: none !important;
          }
          
          .gradient-text {
            background: linear-gradient(45deg, #D4AF37, #2F7BFF) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
          }
          
          .text-primary-gold {
            color: #D4AF37 !important;
          }
          
          .text-primary-blue {
            color: #2F7BFF !important;
          }
          
          .bg-primary-dark {
            background: white !important;
          }
          
          .text-white {
            color: #212529 !important;
          }
          
          .text-gray-300,
          .text-gray-400 {
            color: #6c757d !important;
          }
          
          .btn-primary,
          .btn-secondary,
          .btn-outline {
            background: #D4AF37 !important;
            color: white !important;
            border: 1px solid #D4AF37 !important;
            padding: 8px 16px !important;
            border-radius: 6px !important;
            text-decoration: none !important;
            display: inline-block !important;
          }
          
          .section-padding {
            padding: 2rem 1rem !important;
          }
          
          .container-custom {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 1rem !important;
          }
          
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          
          .grid {
            display: block !important;
          }
          
          .grid > * {
            margin-bottom: 1rem !important;
          }
          
          .hidden {
            display: none !important;
          }
          
          .fixed {
            display: none !important;
          }
          
          .absolute {
            position: relative !important;
          }
          
          .overflow-hidden {
            overflow: visible !important;
          }
          
          .backdrop-blur-md {
            backdrop-filter: none !important;
          }
          
          .bg-gradient-to-r,
          .bg-gradient-to-b,
          .bg-gradient-to-t {
            background: #f8f9fa !important;
          }
          
          .shadow-lg,
          .shadow-xl {
            box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
          }
        }
      `;
      element.appendChild(style);

      // PDF options
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'Humberto-Fuentes-Media-Kit.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          letterRendering: true,
          removeContainer: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after'
        }
      };

      // Generate PDF
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .catch((error: any) => {
          console.error('Error generating PDF:', error);
          // Fallback: try to print the page
          window.print();
        });
    };

    // Listen for the custom download event
    window.addEventListener('downloadPDF', handleDownloadPDF);

    return () => {
      window.removeEventListener('downloadPDF', handleDownloadPDF);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PDFExport;
