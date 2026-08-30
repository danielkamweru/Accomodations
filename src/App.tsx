import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { FavouritesProvider } from "@/contexts/FavouritesContext";
import { RecentlyViewedProvider } from "@/contexts/RecentlyViewedContext";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { ProfilePreferencesProvider } from "@/contexts/ProfilePreferencesContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import RecentlyViewed from "./pages/RecentlyViewed";
import Compare from "./pages/Compare";
import Affordability from "./pages/Affordability";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Account pages
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";

// Admin pages (existing — kept as-is)
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProjects from "./pages/admin/Projects";
import AddProject from "./pages/admin/AddProject";
import AdminEnquiries from "./pages/admin/Enquiries";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <FavouritesProvider>
            <RecentlyViewedProvider>
              <ComparisonProvider>
                <ProfilePreferencesProvider>
                  <Routes>
                  {/* Public */}
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />

                  {/* Protected */}
                  <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                  <Route path="/properties" element={<ProtectedRoute><Properties /></ProtectedRoute>} />
                  <Route path="/properties/:slug" element={<ProtectedRoute><PropertyDetail /></ProtectedRoute>} />
                  <Route path="/recently-viewed" element={<ProtectedRoute><RecentlyViewed /></ProtectedRoute>} />
                  <Route path="/compare" element={<ProtectedRoute><Compare /></ProtectedRoute>} />
                  <Route path="/affordability" element={<ProtectedRoute><Affordability /></ProtectedRoute>} />
                  <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
                  <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route path="/favourites" element={<ProtectedRoute><Favourites /></ProtectedRoute>} />

                  {/* Admin (existing — now protected) */}
                  <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="projects" element={<AdminProjects />} />
                    <Route path="add-project" element={<AddProject />} />
                    <Route path="enquiries" element={<AdminEnquiries />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ProfilePreferencesProvider>
            </ComparisonProvider>
          </RecentlyViewedProvider>
        </FavouritesProvider>
      </AuthProvider>
    </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
