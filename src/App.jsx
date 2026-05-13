import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages - Lazy Loaded
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Academics = React.lazy(() => import('./pages/Academics'));
const Publication = React.lazy(() => import('./pages/Publication'));
const Conferences = React.lazy(() => import('./pages/Conferences'));
const Patents = React.lazy(() => import('./pages/Patents'));
const Archive = React.lazy(() => import('./pages/Archive'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Media = React.lazy(() => import('./pages/Media'));
const Engagements = React.lazy(() => import('./pages/Engagements'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Fallback Loader
const PageLoader = () => (
  <div className="page-wrap flex-1 flex items-center justify-center min-h-[70vh]">
    <div className="w-8 h-8 border-4 border-dashed border-[var(--accent)] rounded-full animate-spin"></div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isFocusMode = location.pathname === '/archive' && !!searchParams.get('tab');
  
  const hideFooter = location.pathname === '/contact' || isFocusMode;
  const hideHeader = isFocusMode;

  return (
    <div className="app-container">
      <div className="ambient-page-glow" />
      {!hideHeader && <Header />}
      <main id="main-content" className={`main-content flex-1 flex flex-col ${isFocusMode ? 'pt-0' : ''}`}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/patents" element={<Patents />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/engagements" element={<Engagements />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
