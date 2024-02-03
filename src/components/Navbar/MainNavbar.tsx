"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { BookOpenText, Home, Search } from "lucide-react";
import Profile from "./Profile";

export default function App() {
  return (
    <Navbar isBordered isBlurred={false} className="mb-10">
      <NavbarBrand>
        <p className="font-extrabold text-inherit text-4xl text-purple-700" style={{ fontFamily: 'Abel, sans-serif' }}>ZIPIR</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="/home">
          <Home></Home>
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Button as={Link} variant="light" color="secondary" href="/home/social" >
          <BookOpenText />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" color="secondary" href="/home/search">
          <Search />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Button as={Link}  color="default" variant="light"  href="/home/profile">
          <Profile></Profile>
          </Button>
          <Button as={Link}  color="secondary" href="/sign" variant="flat">
          <p className="font-bold text-md text-purple-700">Sign Up</p>
          </Button>
          </NavbarContent>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

