
'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Link from "next/link";
function Hero() {
   const { isSignedIn } = useUser();
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage your Money with AI-Driven Personal <br />
                <span className="text-4xl md:text-[6rem] text-teal-800 font-bold mt-1 leading-none">
                  Finance Advisor
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/dashboard1.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      {isSignedIn ? (
        <> 
        <Link href={"/dashboard"}>
        <Button variant="outline" className="rounded-full mb-10 p-10 text-primary text-xl">
              Go to Dashboard
            </Button>
            </Link>
            </>
      ) : (<></>)
    }
    </section>
  );
}

export default Hero;
