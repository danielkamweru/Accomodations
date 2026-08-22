import { motion } from "framer-motion";
import { Building, MessageSquare, Users, Eye } from "lucide-react";

const stats = [
  { label: "Total Projects", value: "7", icon: Building, change: "+2 this year" },
  { label: "Enquiries", value: "24", icon: MessageSquare, change: "+5 this week" },
  { label: "Subscribers", value: "156", icon: Users, change: "+12 this month" },
  { label: "Page Views", value: "3.2K", icon: Eye, change: "+18% this month" },
];

const recentEnquiries = [
  { name: "Alice Njeri", project: "56 Muhoya Avenue", date: "2 hours ago", status: "New" },
  { name: "James Otieno", project: "Pyramid Ridge", date: "5 hours ago", status: "New" },
  { name: "Grace Muthoni", project: "Apple Creek", date: "1 day ago", status: "Read" },
  { name: "Peter Kamau", project: "Pyramid Palms", date: "2 days ago", status: "Replied" },
];

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="font-heading text-3xl font-light tracking-wide text-sidebar-foreground">Dashboard</h1>
      <p className="mt-1 font-body text-xs text-sidebar-foreground/50">Overview of your website activity</p>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-sm border border-sidebar-border bg-sidebar-accent p-6"
          >
            <div className="flex items-center justify-between">
              <stat.icon size={20} className="text-sidebar-primary" />
              <span className="font-body text-[10px] font-medium text-sidebar-primary">{stat.change}</span>
            </div>
            <p className="mt-4 font-heading text-3xl font-light text-sidebar-foreground">{stat.value}</p>
            <p className="mt-1 font-body text-xs text-sidebar-foreground/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Enquiries */}
      <div className="mt-8 rounded-sm border border-sidebar-border bg-sidebar-accent p-6">
        <h2 className="font-heading text-xl font-light text-sidebar-foreground">Recent Enquiries</h2>
        <div className="mt-4 space-y-3">
          {recentEnquiries.map((e, i) => (
            <div key={i} className="flex items-center justify-between border-b border-sidebar-border pb-3 last:border-0">
              <div>
                <p className="font-body text-sm font-medium text-sidebar-foreground">{e.name}</p>
                <p className="font-body text-xs text-sidebar-foreground/50">{e.project}</p>
              </div>
              <div className="text-right">
                <span className={`inline-block rounded-full px-2 py-0.5 font-body text-[10px] font-semibold uppercase ${
                  e.status === "New" ? "bg-sidebar-primary/20 text-sidebar-primary" : e.status === "Read" ? "bg-sidebar-foreground/10 text-sidebar-foreground/50" : "bg-green-500/20 text-green-400"
                }`}>
                  {e.status}
                </span>
                <p className="mt-1 font-body text-[10px] text-sidebar-foreground/40">{e.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
