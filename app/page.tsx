// import Image from "next/image";
import ContactSection from "./AppComponents/ContactSection";
import HomeSectionRight from "./AppComponents/Home/HomeSectionRight";
import IntroCard from "./AppComponents/Home/IntroCard";
import MyExp from "./AppComponents/Home/MyExpSection";
import TechSkillSection from "./AppComponents/Home/TechSkillSection";
import { NavBar } from "./AppComponents/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-y-8 xl:flex-row xl:justify-center xl:gap-x-10 w-full">
        <IntroCard />
        <HomeSectionRight />
      </div>
      <div>
        <TechSkillSection />
        <MyExp/>
        <ContactSection/>
      </div>
      <p className="my-[10%] text-center text-zinc-600 text-xs tracking-wide">Created by Me using NextJS & Tailwind</p>
    </div>
  );
}
