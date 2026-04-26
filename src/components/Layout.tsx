import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-14 sm:pb-0">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
