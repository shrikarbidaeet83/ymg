import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "4.25rem" }}>{children}</main>
      <Footer />
    </>
  );
}
