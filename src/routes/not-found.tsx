import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import logo from "@/assets/quilim-logo.jpg";

function NotFound() {
  usePageTitle("Page Not Found — Quilim Restaurant");
  return (
    <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
      <div className="max-w-md">
        <img src={logo} alt="Quilim Restaurant" className="mx-auto w-32 h-32 rounded-full object-cover shadow-elegant mb-8" />
        <h1 className="font-serif text-5xl text-primary font-bold">404</h1>
        <p className="text-xl text-foreground mt-4 font-serif">
          This table doesn't exist — but great food does.
        </p>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90 h-12 px-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
