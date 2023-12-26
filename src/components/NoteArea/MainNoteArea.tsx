import React from "react";
import {Textarea} from "@nextui-org/react";

export default function NoteArea() {
  return (
    <div className="flex h-full text-2xl w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-10 font-purple-500 text-inherit  bg-color-purple-500">
      <Textarea
        label="Yenidoğan/Bebek/Çocuk Dönem Özellikleri"
        placeholder="Lütfen notunuzu ekleyiniz."
      />
      <Textarea className=" text-purple-500"
        label="Yenidoğan/Bebek/Çocuk Gelişim Takibi"
        placeholder="Lütfen notunuzu ekleyiniz."
      />
      <Textarea
        label="Yenidoğan/Bebek/Çocuk Hastalık Takibi"
        placeholder="Lütfen notunuzu ekleyiniz."
      />
    </div>
  );
}
