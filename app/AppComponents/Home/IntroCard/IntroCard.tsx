'use client'

import React from "react";
import Image from "next/image";
import RG_Photo from "../../../../assets/RG_Photo2.jpg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SOCIAL_MEDIA_LIST } from "@/app/constants/introCardSocialIconList";
import { motion } from "framer-motion";

const IntroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="w-[90%] mx-auto mt-[6rem] xl:mt-[5.5rem]">
        <CardHeader className="py-8 px-6">
          <Image
            src={RG_Photo}
            alt=""
            className="aspect-square object-cover rounded-[15px] bg-zinc-800 shadow-2xl mx-auto"
            height={220}
            width={260}
          />
        </CardHeader>
        <CardContent className="mx-auto md:w-1/2 lg:w-[45%]">
          <div className="flex flex-col gap-y-5">
            <h2 className="font-poppins font-bold text-4xl text-zinc-800 text-center">
              Rajdeep Ghosh
            </h2>
            <p className="font-poppins text-center text-[16px] leading-[1.2em] text-zinc-500 font-medium">
              A passionate Software Developer dedicated to crafting cutting-edge
              solutions that drive innovation and impact
            </p>
            <div className="flex justify-center items-center gap-x-5">
              {SOCIAL_MEDIA_LIST.map((item) => (
                <span key={item.id}>{item.icon}</span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default IntroCard;
