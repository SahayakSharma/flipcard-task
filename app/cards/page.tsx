'use client'
import React, { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";
type card={
    title:string,
    description:string
}
export default function Cards(){
    const [cards,setcards]=useState<card[]>([])

    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await fetch('/api')
            const data=await res.json()
            setcards(data)
        }
        fetchdata()
    },[])
    return(
        <div className="w-full h-screen mx-auto p-[50px] grid grid-flow-row grid-cols-4">
            {
                cards?.map((cardetail,index) => (
                    <Flashcard key={index} title={cardetail.title} description={cardetail.description}/>
                ))
            }
        </div>
    )
}