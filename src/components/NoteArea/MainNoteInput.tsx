"use client"

import React from "react";
import {Textarea} from "@nextui-org/react";

export default function MainNoteInput() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full flex flex-col gap-2 col-span-2">
      <Textarea
        label="Not:"
        labelPlacement="inside"
      />
    </div>
  );
}
