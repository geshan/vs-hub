
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CompaniesPage from './pages/CompaniesPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import CommunityPage from './pages/CommunityPage'; // Added import

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-bg">
      <Header />
      <main className="pt-4 pb-12">
        <Routes>
          <Route path="/" element={<Navigate to="/companies" replace />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/companies/:companyId" element={<CompanyDetailPage />} />
          {/* Placeholder routes for other nav items */}
          <Route path="/resources" element={<div className="container mx-auto px-4 py-8 text-center">Resources Page (Placeholder)</div>} />
          <Route path="/community" element={<CommunityPage />} /> {/* Updated route */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
