"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { BookOpenText, Home, Search } from "lucide-react";

export default function App() {
  return (
    <Navbar isBordered isBlurred={false} className="mb-10">
      <NavbarBrand>
        <p className="font-bold text-inherit text-2xl text-purple-500">ZIPIR</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="/home">
          <Home></Home>
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Button as={Link} variant="light" color="secondary" href="/home/social" aria-current="page">
          <BookOpenText />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="#">
          <Search />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="/sign" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

