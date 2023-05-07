import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Cover from "@/components/Cover";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col items-center${inter.className}`}>
        <Cover image={"/koiia-home-img.png"} title={"KOIIA"}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium temporibus nostrum animi quia aperiam quibusdam
            reprehenderit ratione, ducimus laudantium nobis, asperiores id
            incidunt. Dolorem, quibusdam recusandae tempora accusamus culpa
            ducimus!
          </p>
        </Cover>
        <Section title={"Chi Siamo"} image={""}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus repellendus tenetur nemo nihil harum! Saepe cupiditate
            dicta omnis eos quae dolores architecto est illum? Corrupti nihil
            reprehenderit quos quibusdam fuga!
          </p>
        </Section>
        <Section title={"Formazione"} image={""}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus repellendus tenetur nemo nihil harum! Saepe cupiditate
            dicta omnis eos quae dolores architecto est illum? Corrupti nihil
            reprehenderit quos quibusdam fuga!
          </p>
        </Section>
        <Section title={"Contatti"} image={""}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus repellendus tenetur nemo nihil harum! Saepe cupiditate
            dicta omnis eos quae dolores architecto est illum? Corrupti nihil
            reprehenderit quos quibusdam fuga!
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
