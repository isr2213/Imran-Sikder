import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import IndustryDetails from "./pages/IndustryDetails";
import BlogHub from "./pages/BlogHub";
import BlogArticle from "./pages/BlogArticle";
import OurExperience from "./pages/OurExperience";
import { BgcShowcasePage } from "./pages/our-experience/BgcShowcasePage";
import PortfolioDetails from "./pages/PortfolioDetails";
import TrustCenter from "./pages/TrustCenter";
import LocationLandingPage from "./pages/LocationLandingPage";
import ScrollToTop from "./components/ScrollToTop";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { AdminPortal } from "./pages/admin/AdminPortal";

export default function App() {
  return (
    <AdminAuthProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Navigate to="/services/digital-marketing-360" replace />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/services/business-growth-challenge" element={<BgcShowcasePage />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
        <Route path="/industry/:slug" element={<IndustryDetails />} />
        <Route path="/blog" element={<BlogHub />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/our-experience" element={<OurExperience />} />
        <Route path="/our-experience/business-growth-challenge" element={<BgcShowcasePage />} />
        <Route path="/our-experience/bgc" element={<Navigate to="/our-experience/business-growth-challenge" replace />} />
        <Route path="/business-growth-challenge" element={<Navigate to="/our-experience/business-growth-challenge" replace />} />
        <Route path="/our-experience/project/:projectSlug" element={<OurExperience />} />
        <Route path="/our-experience/:categorySlug" element={<OurExperience />} />
        <Route path="/case-studies" element={<Navigate to="/our-experience" replace />} />
        <Route path="/case-study/:slug" element={<Navigate to="/our-experience" replace />} />
        <Route path="/portfolio" element={<PortfolioDetails />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
        <Route path="/trust-center" element={<TrustCenter />} />
        <Route path="/locations" element={<LocationLandingPage />} />
        <Route path="/locations/:citySlug" element={<LocationLandingPage />} />
        <Route path="/seo-agency/:citySlug" element={<LocationLandingPage />} />
        <Route path="/admin/*" element={<AdminPortal />} />
        <Route path="/login" element={<AdminPortal />} />
      </Routes>
    </AdminAuthProvider>
  );
}


