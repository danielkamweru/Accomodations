import { projects } from "@/data/projects";
import { Pencil, Trash2 } from "lucide-react";

const AdminProjects = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-light tracking-wide text-sidebar-foreground">Projects</h1>
          <p className="mt-1 font-body text-xs text-sidebar-foreground/50">Manage your developments</p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-sm border border-sidebar-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-sidebar-border bg-sidebar-accent">
              {["Project", "Location", "Status", "Type", "Units", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/50">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-sidebar-border transition-colors hover:bg-sidebar-accent/50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.heroImage} alt="" className="h-10 w-14 rounded-sm object-cover" />
                    <span className="font-body text-sm font-medium text-sidebar-foreground">{p.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3 font-body text-xs text-sidebar-foreground/60">{p.location}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-sidebar-primary/20 px-2 py-0.5 font-body text-[10px] font-semibold text-sidebar-primary">{p.status}</span>
                </td>
                <td className="px-4 py-3 font-body text-xs text-sidebar-foreground/60">{p.type}</td>
                <td className="px-4 py-3 font-body text-xs text-sidebar-foreground/60">{p.units}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="rounded-sm p-1.5 text-sidebar-foreground/40 transition-colors hover:bg-sidebar-accent hover:text-sidebar-primary"><Pencil size={14} /></button>
                    <button className="rounded-sm p-1.5 text-sidebar-foreground/40 transition-colors hover:bg-red-500/10 hover:text-red-400"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProjects;
