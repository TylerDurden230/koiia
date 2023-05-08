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
            Azienda leader nella formazione informatica sul cloud. Siamo qui per
            aiutarvi a sviluppare le vostre competenze, offrendovi corsi di alta qualità sui principali
            strumenti e tecnologie del settore, come Kubernetes, Docker,
            Terraform e molto altro ancora.
          </p>
        </Cover>
        <Section
          title={"Chi Siamo"}
          image={"/koiia-home-img.png"}
          rightImg={true}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>
        <Section title={"Formazione"} image={"/koiia-home-img.png"}>
          <p>
            Sia che siate principianti o esperti, il nostro programma di
            formazione su misura vi aiuterà a raggiungere i vostri obiettivi. I
            nostri corsi sono progettati per adattarsi alle vostre esigenze e al
            vostro livello di esperienza, in modo da garantire che possiate
            trarre il massimo beneficio dal nostro approccio hands-on e dalla
            nostra metodologia di apprendimento basata sulla pratica.
          </p>
          <p>
            Offriamo una vasta gamma di corsi di formazione online e in aula, in
            modo da poter scegliere il metodo che meglio si adatta alle vostre
            esigenze e alla vostra agenda. I nostri formatori altamente
            qualificati e certificati vi guideranno attraverso ogni aspetto del
            processo di apprendimento, fornendo un supporto personalizzato e
            rispondendo alle vostre domande in tempo reale.
          </p>
        </Section>
        <Section
          title={"Contatti"}
          image={"/koiia-home-img.png"}
          rightImg={true}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Section>
      </main>
      <Footer>
        
      </Footer>
    </>
  );
}
