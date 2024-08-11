import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
export default function Navbar(){
    return(
        <div className="w-full h-[70px] flex justify-between items-center px-[40px] shadow-md">
            <ul>
                <li className="font-bold">FlipCards</li>
            </ul>
            <ul className="flex items-center font-bold">
                <li className="px-[20px] cursor-pointer"><ModeToggle/></li>
                <Link href='/'><li className="px-[20px] cursor-pointer">Home</li></Link>
                <Link href='/cards'><li className="px-[20px] cursor-pointer">All Cards</li></Link>
                <Link href='/create-card'><li className="px-[20px] cursor-pointer">New Card</li></Link>
            </ul>
        </div>
    )
}