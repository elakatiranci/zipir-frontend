"use client"

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { Heart, MessageCircleMore } from "lucide-react";

export default function BaseCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="mt-5  max-w-[800px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="color-black-500 text-small font-semibold leading-none ">Neva Şanel</h4>
            <h5 className="text-small tracking-tight text-default-400">Uzman Doktor</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-purple-500 text-white border-0" : "bg-purple-500 text-white"}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Takibi Bırak" : "Takip Et"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-4 text-small overflow-hidden g-purple-500 text-color-white">
        <p>
        Emzirme düzeni
        İlk haftalarda emzirme düzensizdir ve bebek her istediğinde emzirilmelidir. Her iki göğsü de eşit sürelerde emzirtmek idealdir. Ancak bu her zaman gerçekleşmez. 
        Bebek bir seferde tek göğsü emerse bir sonraki sefer diğer taraftan emzirmek gerekir. İlk 10 dakikadan sonra gelen süt daha yağlıdır; bebekte doygunluk hissi uyandırır. 
        Bir göğsü emmesi bu nedenle yeterli olabilir. Günde yaklaşık 10-12 kere emmesi ve ilk 4-6 ay gece beslenmesi normaldir. Emzirilen bebeğe su vermek gerekmez. 
        Meyve püresi ve pirinçli mama benzeri ek besinler 6 aydan sonra verilmelidir.
        </p>
        
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold  color-black-500 text-small">4</p>
          <p className="color-black-500 text-small"><Heart />Beğen</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold color-black-500 text-small">97.1K</p>
          <p className="color-black-500 text-small"><MessageCircleMore />Yorum Yap</p>
        </div>
      </CardFooter>
    </Card>
  );
}
