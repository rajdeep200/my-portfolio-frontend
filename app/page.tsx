// import Image from "next/image";
import HomeSectionRight from "./AppComponents/Home/HomeSectionRight";
import IntroCard from "./AppComponents/Home/IntroCard/IntroCard";
import { NavBar } from "./AppComponents/NavBar/NavBar";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <NavBar />
      <div className="flex flex-col gap-y-8 xl:flex-row xl:justify-start w-full">
        <IntroCard />
        <HomeSectionRight/>
      </div>
    </RootLayout>
  );
}
