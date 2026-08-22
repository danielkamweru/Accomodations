import { useState } from "react";
import { Upload } from "lucide-react";

const AddProject = () => {
  return (
    <div>
      <h1 className="font-heading text-3xl font-light tracking-wide text-sidebar-foreground">Add Project</h1>
      <p className="mt-1 font-body text-xs text-sidebar-foreground/50">Create a new development listing</p>

      <form className="mt-8 max-w-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
        {[
          { label: "Project Title", type: "text", placeholder: "e.g. 56 Muhoya Avenue" },
          { label: "Location", type: "text", placeholder: "e.g. Lavington, Nairobi" },
        ].map((field) => (
          <div key={field.label}>
            <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">{field.label}</label>
            <input type={field.type} placeholder={field.placeholder} className="mt-2 w-full border border-sidebar-border bg-sidebar-accent px-4 py-3 font-body text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/30 focus:border-sidebar-primary focus:outline-none" />
          </div>
        ))}

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">Status</label>
            <select className="mt-2 w-full border border-sidebar-border bg-sidebar-accent px-4 py-3 font-body text-sm text-sidebar-foreground focus:border-sidebar-primary focus:outline-none">
              <option>Completed</option>
              <option>Ongoing</option>
              <option>Upcoming</option>
            </select>
          </div>
          <div>
            <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">Type</label>
            <select className="mt-2 w-full border border-sidebar-border bg-sidebar-accent px-4 py-3 font-body text-sm text-sidebar-foreground focus:border-sidebar-primary focus:outline-none">
              <option>Townhouses</option>
              <option>Apartments</option>
              <option>Villas</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">Description</label>
          <textarea rows={5} className="mt-2 w-full resize-none border border-sidebar-border bg-sidebar-accent px-4 py-3 font-body text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/30 focus:border-sidebar-primary focus:outline-none" placeholder="Project description..." />
        </div>

        {/* Image Upload */}
        <div>
          <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">Project Images</label>
          <div className="mt-2 flex h-40 cursor-pointer items-center justify-center border-2 border-dashed border-sidebar-border transition-colors hover:border-sidebar-primary">
            <div className="text-center">
              <Upload size={24} className="mx-auto text-sidebar-foreground/30" />
              <p className="mt-2 font-body text-xs text-sidebar-foreground/40">Click to upload images</p>
            </div>
          </div>
        </div>

        {/* Floor Plans Upload */}
        <div>
          <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">Floor Plans</label>
          <div className="mt-2 flex h-32 cursor-pointer items-center justify-center border-2 border-dashed border-sidebar-border transition-colors hover:border-sidebar-primary">
            <div className="text-center">
              <Upload size={24} className="mx-auto text-sidebar-foreground/30" />
              <p className="mt-2 font-body text-xs text-sidebar-foreground/40">Upload floor plan images</p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sidebar-foreground/60">Amenities</label>
          <input type="text" placeholder="e.g. Private Garden, DSQ, Parking (comma separated)" className="mt-2 w-full border border-sidebar-border bg-sidebar-accent px-4 py-3 font-body text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/30 focus:border-sidebar-primary focus:outline-none" />
        </div>

        <button type="submit" className="bg-sidebar-primary px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-sidebar-primary-foreground transition-colors hover:bg-sidebar-primary/90">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
