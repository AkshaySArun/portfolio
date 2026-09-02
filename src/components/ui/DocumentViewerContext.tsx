"use client";

import React, { createContext, useContext, useState } from "react";
import { DocumentItem, RESUME_DOCUMENT } from "@/data/certificates";
import { CertificateViewer } from "@/components/journey/CertificateViewer";

interface DocumentViewerContextType {
  openDocument: (doc: DocumentItem) => void;
  openResume: () => void;
  closeDocument: () => void;
  activeDocument: DocumentItem | null;
}

const DocumentViewerContext = createContext<DocumentViewerContextType | null>(null);

export const DocumentViewerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDocument, setActiveDocument] = useState<DocumentItem | null>(null);

  const openDocument = (doc: DocumentItem) => setActiveDocument(doc);
  const openResume = () => setActiveDocument(RESUME_DOCUMENT);
  const closeDocument = () => setActiveDocument(null);

  return (
    <DocumentViewerContext.Provider value={{ openDocument, openResume, closeDocument, activeDocument }}>
      {children}
      <CertificateViewer certificate={activeDocument} onClose={closeDocument} />
    </DocumentViewerContext.Provider>
  );
};

export const useDocumentViewer = () => {
  const context = useContext(DocumentViewerContext);
  if (!context) {
    return {
      openDocument: () => {},
      openResume: () => {},
      closeDocument: () => {},
      activeDocument: null,
    };
  }
  return context;
};
