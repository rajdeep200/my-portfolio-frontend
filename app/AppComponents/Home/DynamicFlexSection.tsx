"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Item = {
  id: number;
  label: string;
  icon: React.ReactNode;
};

const DynamicFlexSection: React.FC<{ items: Item[] }> = ({ items }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 640;
  const isTab = windowWidth >= 640 && windowWidth <= 1024;
  const maxPerRow = isMobile ? 2 : isTab ? 3 : 6;

  const remainingItems = [...items];
  let rowSize = maxPerRow;
  const rows: Item[][] = [];

  while (remainingItems.length > 0) {
    const row = remainingItems.splice(0, rowSize);
    rows.push(row);
    rowSize = isMobile ? 2 : isTab ? 3 : Math.max(1, rowSize - 1);
  }

  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto font-poppins">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-3 gap-y-6">
          {row.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="bg-black px-6 py-3 shadow-md shadow-zinc-400 text-white flex items-center justify-center gap-x-3 text-sm lg:text-2xl font-semibold rounded-2xl border-t-[1px] border-x-[1px] border-t-white/60 border-x-white/60">
                {item.icon}
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DynamicFlexSection;
