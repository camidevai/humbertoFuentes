import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ContentData } from '../types/content';
import defaultContent from '../content.json';

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: ContentData) => void;
  resetContent: () => void;
  hasUnsavedChanges: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const STORAGE_KEY = 'media_kit_content';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentData>(defaultContent as ContentData);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    // Load content from localStorage on mount
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedContent = JSON.parse(stored);
        setContent(parsedContent);
      } catch (error) {
        console.error('Error parsing stored content:', error);
        // If parsing fails, use default content
        setContent(defaultContent as ContentData);
      }
    }
  }, []);

  const updateContent = (newContent: ContentData) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    setHasUnsavedChanges(false);
  };

  const resetContent = () => {
    setContent(defaultContent as ContentData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContent));
    setHasUnsavedChanges(false);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, hasUnsavedChanges }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

