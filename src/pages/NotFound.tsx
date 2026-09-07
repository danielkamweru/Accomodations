import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-secondary/20 pt-20">
        <div className="text-center">
          <p className="font-heading text-8xl font-light tracking-wide text-muted-foreground/30 md:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-light tracking-wide text-foreground md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md font-body text-sm font-light text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-primary px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
