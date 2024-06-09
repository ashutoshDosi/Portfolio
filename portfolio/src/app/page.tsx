import Image from "next/image";
import Hero from "../../Components/Hero";
import { Spotlight } from "../../Components/ui/Spotlight";
import { FloatingNav } from "../../Components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "../../Components/Grid";


export default function Home() {
  return (
    <main className="realtive bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon:<FaHome />}
      ]} />
      <Grid />
      <Hero />
    </main>
)
}
