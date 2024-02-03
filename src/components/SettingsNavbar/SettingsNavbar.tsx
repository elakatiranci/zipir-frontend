"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { BookOpenText, Home, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function App() {
    const { push } = useRouter();
  const onPressProcess = (path: string) => {
    push(path);
  }

  return (
    <Navbar isBordered isBlurred={false} className="mb-10">
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} variant="light"  color="secondary" href="#">
          Ayarlar ve Gizlilik
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Button as={Link} variant="light" color="secondary" href="#">
          Yardım ve Destek
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="#">
          Görünüm ve Erişebilirlik
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="#">
          Görüş Bildir
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="#" onPress={() => onPressProcess("/")}>
            Çıkış Yap
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
    </Navbar>
  );
}

