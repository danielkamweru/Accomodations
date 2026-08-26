import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { FavouritesProvider } from "@/contexts/FavouritesContext";
import { RecentlyViewedProvider } from "@/contexts/RecentlyViewedContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import RecentlyViewed from "./pages/RecentlyViewed";
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
              <Routes>
                {/* Public */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/properties/:slug" element={<PropertyDetail />} />
                <Route path="/recently-viewed" element={<RecentlyViewed />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />

              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Protected account pages */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favourites"
                element={
                  <ProtectedRoute>
                    <Favourites />
                  </ProtectedRoute>
                }
              />

              {/* Admin (existing) */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="add-project" element={<AddProject />} />
                <Route path="enquiries" element={<AdminEnquiries />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </RecentlyViewedProvider>
        </FavouritesProvider>
      </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
