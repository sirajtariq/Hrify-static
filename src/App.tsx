import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Solutions } from './pages/Solutions';
import { Pricing } from './pages/Pricing';
import { Resources } from './pages/Resources';
import { Company } from './pages/Company';
import { BookDemoModal } from './components/BookDemoModal';
import { AIAssistantModal } from './components/AIAssistantModal';

// Derive a contextual AI topic from the current page
const getAiTopic = (page: string): 'general' | 'pricing' | 'solutions' | 'resources' => {
  if (page === 'pricing') return 'pricing';
  if (page === 'solutions') return 'solutions';
  if (page === 'resources') return 'resources';
  return 'general';
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState<'general' | 'pricing' | 'solutions' | 'resources'>('general');

  // Sync with browser hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'product', 'solutions', 'pricing', 'resources', 'company'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAi = (topic?: string) => {
    if (topic && ['general', 'pricing', 'solutions', 'resources'].includes(topic)) {
      setAiTopic(topic as any);
    } else {
      setAiTopic(getAiTopic(currentPage));
    }
    setAiModalOpen(true);
  };

  const openAiChat = () => {
    handleOpenAi();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-slate-900 transition-colors duration-200">
      {/* Sticky Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDemo={() => setDemoModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenDemo={() => setDemoModalOpen(true)}
          />
        )}
        {currentPage === 'product' && (
          <Product
            onOpenDemo={() => setDemoModalOpen(true)}
          />
        )}
        {currentPage === 'solutions' && (
          <Solutions
            onOpenDemo={() => setDemoModalOpen(true)}
            onOpenAI={handleOpenAi}
          />
        )}
        {currentPage === 'pricing' && (
          <Pricing
            onOpenDemo={() => setDemoModalOpen(true)}
            onOpenAI={handleOpenAi}
          />
        )}
        {currentPage === 'resources' && (
          <Resources
            onOpenDemo={() => setDemoModalOpen(true)}
            onOpenAI={handleOpenAi}
          />
        )}
        {currentPage === 'company' && (
          <Company
            onOpenDemo={() => setDemoModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* ============================================================ */}
      {/* GLOBAL FLOATING AI CHAT BUTTON — rendered at root level so   */}
      {/* it is never clipped by page overflow-hidden containers        */}
      {/* ============================================================ */}
      {!aiModalOpen && (
        <button
          onClick={openAiChat}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-brand text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-105 active:scale-[0.97] transition-all duration-200 group"
          title="Chat with HRIFY AI"
        >
          <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform duration-200" />
          <span className="text-xs font-bold">Ask HRIFY AI</span>
        </button>
      )}

      {/* Interactive Modals */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <AIAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        initialTopic={aiTopic}
        onOpenDemo={() => {
          setAiModalOpen(false);
          setDemoModalOpen(true);
        }}
      />
    </div>
  );
};
