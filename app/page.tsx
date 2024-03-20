import Banner from "@/components/sections/1.Banner";
import Languages from "@/components/sections/2.languages";
import Work from "@/components/sections/3.Work-Done";
import Process from "@/components/sections/4.Process";
import Portfolio from "@/components/sections/5.Portfolio";
import Testimonials from "@/components/sections/6.Testimonials";
import Blogs from "@/components/sections/7.Blogs";
import Contact from "@/components/sections/8.Contact";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <Languages />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Blogs />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
