"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/FinTrack.svg"} alt="logo" width={40} height={25} />
        <span className="text-teal-800  font-bold text-xl">FinTrack</span>
      </div>
      {isSignedIn ? (
        <>
          <div className="flex items-center justify-evenly">
            <UserButton />
          </div>
        </>
      ) : (
        <div className="flex items-evenly">
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
   
    </div>

    
  );
}

export default Header;
