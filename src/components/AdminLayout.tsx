import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Building, PlusCircle, Image, Star, MessageSquare, Users, Settings } from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Projects", path: "/admin/projects", icon: Building },
  { label: "Add Project", path: "/admin/add-project", icon: PlusCircle },
  { label: "Gallery", path: "/admin/gallery", icon: Image },
  { label: "Amenities", path: "/admin/amenities", icon: Star },
  { label: "Enquiries", path: "/admin/enquiries", icon: MessageSquare },
  { label: "Subscribers", path: "/admin/subscribers", icon: Users },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-sidebar">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
        <div className="flex h-16 items-center px-6">
          <h1 className="font-heading text-lg font-semibold tracking-wider text-sidebar-foreground">
            ACCOMODATIONS<span className="font-light text-sidebar-primary"> ADMIN</span>
          </h1>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-sm px-3 py-2.5 font-body text-xs font-medium tracking-wider transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="ml-64 flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
