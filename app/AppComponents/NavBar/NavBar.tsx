"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import "./NavBar.css";
import { NAV_MENU_LIST } from "@/app/constants/navBarConstants";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Menubar className="navBar_container">
        {NAV_MENU_LIST.map((item) => (
          <MenubarMenu key={item.id}>
            <MenubarTrigger className="cursor-pointer">
              {item.icon}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </Menubar>
    </motion.div>
  );
}
