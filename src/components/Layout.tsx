import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-20 pb-16 sm:pb-0">{children}</main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </div>
  );
}
