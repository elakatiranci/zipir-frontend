"use client"

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function MainNoteArea() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="h-[330px] w-[450px] mt-2">
      <CardBody className="px-5 py-10 text-small text-default-400">
        <span className="pt-2">
          <span className="py-2" aria-label="computer" role="img">
          </span>
        </span>
      </CardBody>
    </Card>
  );
}
