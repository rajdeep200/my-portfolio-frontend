// import Image from "next/image";
import HomeSectionRight from "./AppComponents/Home/HomeSectionRight";
import IntroCard from "./AppComponents/Home/IntroCard";
import MyExp from "./AppComponents/Home/MyExpSection";
import TechSkillSection from "./AppComponents/Home/TechSkillSection";
import { NavBar } from "./AppComponents/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-y-8 xl:flex-row xl:justify-center xl:gap-x-10 w-full xl:mt-[4rem]">
        <IntroCard />
        <HomeSectionRight />
      </div>
      <div>
        <TechSkillSection />
        <MyExp/>
      </div>
    </div>
  );
}
