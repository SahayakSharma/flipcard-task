import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-screen mx-auto">
      <p className="text-[30px] text-center mt-[200px] font-[500]">Click to see your cards</p>
      <div className="ml-[700px] mt-[30px]">
      <Link href='/cards'><Button variant='default'>Your Cards</Button></Link>
      </div>
    </div>
  );
}
