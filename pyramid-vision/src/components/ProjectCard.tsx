import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${project.slug}`} className="group block">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.15em] text-background">
              View Project <ArrowRight size={14} />
            </span>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              {project.status}
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {project.type}
            </span>
          </div>
          <h3 className="mt-2 font-heading text-2xl font-medium tracking-wide text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 font-body text-xs font-light text-muted-foreground">
            <MapPin size={12} />
            {project.location}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
