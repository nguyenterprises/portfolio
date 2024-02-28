import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/landing/Landing";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import ReturnToTop from "@/components/ui/ReturnToTop";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center w-full ">
        <Landing />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
      <ReturnToTop />
    </div>
  );
}
