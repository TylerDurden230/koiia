import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col items-center${inter.className}`}>
        <Section title={"Title1"} image={""}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellendus tenetur nemo nihil harum! Saepe cupiditate dicta omnis eos quae dolores architecto est illum? Corrupti nihil reprehenderit quos quibusdam fuga!</p>
        </Section>
        <Section title={"Title2"} image={""}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellendus tenetur nemo nihil harum! Saepe cupiditate dicta omnis eos quae dolores architecto est illum? Corrupti nihil reprehenderit quos quibusdam fuga!</p>
        </Section>
        <Section title={"Title3"} image={""}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repellendus tenetur nemo nihil harum! Saepe cupiditate dicta omnis eos quae dolores architecto est illum? Corrupti nihil reprehenderit quos quibusdam fuga!</p>
        </Section>
      </main>
      <Footer />
    </>
  )
}