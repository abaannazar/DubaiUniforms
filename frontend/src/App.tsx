import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import TermsAndConditions from './pages/term and conditions';
import PrivacyPolicy from './pages/privacypolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:category" element={<CategoryDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;