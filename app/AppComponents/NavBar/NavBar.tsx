"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import "./NavBar.css";
import { NAV_MENU_LIST } from "@/app/constants/navBarConstants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function NavBar() {
  const router = useRouter();

  const handleScrollToTechSection = (id: string) => {
    let section = document.getElementById("tech-skills-section");
    switch (id) {
      case "tech":
        section = document.getElementById("tech-skills-section");
        break;
      case "exp":
        section = document.getElementById("exp-section");
        break;
      case "contact":
        section = document.getElementById("contact-section");
        break;

      default:
        break;
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id: string) => {
    if (id === "home") {
      console.log("home");
      router.push("/");
    } else if (id === "tech") {
      handleScrollToTechSection(id);
      console.log("tech");
    } else if (id === "exp") {
      handleScrollToTechSection(id);
      console.log("exp");
    } else if (id === "contact") {
      handleScrollToTechSection(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Menubar className="navBar_container">
        {NAV_MENU_LIST.map((item) => (
          <MenubarMenu key={item.id}>
            <MenubarTrigger
              className="cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              {item.icon}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </motion.div>
  );
}
