"use client"

import React, { useEffect } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { Baby, Cog, Link, LucideIcon, MessageCircleHeart, ScrollText, Search, Stethoscope, icons } from "lucide-react";
import { useRouter } from 'next/navigation';


export default function HomeMenuButton() {
  const { push } = useRouter();
  const onPressProcess = (path: string) => {
    push(path);
  }

  return (
    <>
    <div className="grid grid-cols-2 w-full">
      <div className="w-full p-3">
          <Card isPressable shadow="sm" className="w-full p-3 bg-gradient-to-tl from-purple-200 to-purple-500 text-purple-100" onPress={() => onPressProcess("/home/social")}>
            <CardBody className={"overflow-visible"} >
              <MessageCircleHeart/>
              <b className="mt-2" >Sosyal</b>
            </CardBody>
          </Card>
      </div>
      <div className="w-full p-3">
          <Card isPressable shadow="sm" className="w-full p-3 bg-gradient-to-tl from-pink-200 to-pink-500 text-pink-100" onPress={() => onPressProcess("/baby/[babyId]")}>
            <CardBody className={"overflow-visible"}>
            <Baby />
              <b className="mt-2">Bebek</b>
            </CardBody>
          </Card>
      </div>
      <div className="w-full p-3">
          <Card isPressable shadow="sm" className="w-full p-3 bg-gradient-to-tl from-sky-200 to-sky-500 text-sky-100" onPress={() => onPressProcess("/doctor/[doktorId]")}>
            <CardBody className={"overflow-visible"}>
            <Stethoscope />
              <b className="mt-2">Doktor</b>
            </CardBody>
          </Card>
      </div>
      <div className="w-full p-3">
          <Card isPressable shadow="sm" className="w-full p-3 bg-gradient-to-tl from-yellow-200 to-yellow-500 text-yellow-100" onPress={() => onPressProcess("/notepad")}>
            <CardBody className={"overflow-visible"}>
            <ScrollText />
              <b className="mt-2">Not Defteri</b>
            </CardBody>
          </Card>
      </div>
      <div className="w-full p-3">
          <Card isPressable shadow="sm" className="w-full p-3 bg-gradient-to-tl from-slate-300 to-slate-400 text-slate-100" >
            <CardBody className={"overflow-visible"}>
            <Search />
              <b className="mt-2">Arama</b>
            </CardBody>
          </Card>
      </div>
      <div className="w-full p-3">
          <Card isPressable shadow="sm" className="w-full p-3 bg-gradient-to-tl from-slate-300 to-slate-400 text-slate-100">
            <CardBody className={"overflow-visible"}>
            <Cog />
              <b className="mt-2">Ayarlar</b>
            </CardBody>
          </Card>
      </div>
    </div>
    </>
  );
}
