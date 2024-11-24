import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import KeyBenefitsPage from './pages/KeyBenefits/KeyBenefitsPage';
import TrustElementsPage from './pages/TrustElements/TrustElementsPage';
import PersonalInformationsPage from './pages/PersonalInformations/PersonalInformationsPage';
import HealthProfilePage from './pages/HealthProfile/HealthProfilePage';
import InsurancePreferencesPage from './pages/InsurancePreferences/InsurancePreferencesPage';
import AdditionalFactorsPage from './pages/AdditionalFactors/AdditionalFactorsPage';
import MatchingPage from './pages/Matching/MatchingPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/key-benefits" element={<KeyBenefitsPage />} />
        <Route path="/data-protection" element={<TrustElementsPage />} />
        <Route path="/recommendations" element={<PersonalInformationsPage />} />
        <Route path="/health-profile" element={<HealthProfilePage />} />
        <Route path="/insurance-preferences" element={<InsurancePreferencesPage />} />
        <Route path="/additional-factors" element={<AdditionalFactorsPage />} />
        <Route path="/matching" element={<MatchingPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
