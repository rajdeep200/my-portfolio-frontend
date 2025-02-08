import React from "react";
import { motion } from "framer-motion";

type Item = {
  id: number;
  label: string;
  icon: React.ReactNode;
};

const DynamicFlexSection: React.FC<{ items: Item[] }> = ({ items }) => {
  const isMobile = window.innerWidth <= 640
  const isTab = window.innerWidth >= 640 && window.innerWidth <= 1024
  const maxPerRow = isMobile ? 2 : isTab ? 3 : 6;
  const remainingItems = [...items];
  let rowSize = maxPerRow;
  const rows: Item[][] = [];

  console.log("isTab :: ", isTab)

  // Generate rows in decreasing order
  while (remainingItems.length > 0) {
    console.log('rowSize :: ', rowSize)
    const row = remainingItems.splice(0, rowSize);
    rows.push(row);
    rowSize = isMobile ? 2 : isTab ? 3 : Math.max(1, rowSize - 1); // Ensure at least 1 item per row
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
              <div
                className="bg-black px-6 py-3 shadow-md shadow-zinc-400  text-white flex items-center justify-center gap-x-3 text-sm lg:text-2xl font-semibold rounded-2xl border-t-[1px] border-x-[1px] border-t-white/60 border-x-white/60"
              >
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
