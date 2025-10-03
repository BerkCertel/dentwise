import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { Activity } from "lucide-react";

function Header() {
  return (
    <nav className="fixed  top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl h-full mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Activity size={32} strokeWidth={2.5} color="#7033ff" />

          <span className="font-semibold text-lg text-primary">Dentwise</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-its-works"
            className="text-muted-foreground hover:text-foreground"
          >
            How Its Works
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant={"outline"} className="text-primary" size={"sm"}>
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant={"default"} size={"sm"}>
              Sign Up
            </Button>
          </SignUpButton>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Header;
