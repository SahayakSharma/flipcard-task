"use client"
import React, { useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { transform } from "next/dist/build/swc";

export default function Flashcard({ title, description }:{title:string, description:string}) {
    const [content,setcontent]=React.useState(title)
    const [animate,setanimate]=React.useState('')
    return (
        <Card className={`w-[300px] h-[300px] my-[10px] shadow-md ${animate} ${content===title?'':'border-4'}`} >
            
            <CardContent className="relative w-[100%] h-[100%]">
                {content===title?(
                    <div className=" flex items-center flex-col justify-around h-[100%] w-[100%]">
                        <p className="font-[500] text-[20px]">{content}</p>
                        <Button variant='default' className="my-[30px]" onClick={()=>{
                            setcontent(description)
                            setanimate('animate-hflip')
                            }}>Flip</Button>
                    </div>
                ):(
                    <div className=" flex items-center flex-col justify-around h-[100%] w-[100%]">
                        <p className="font-[200] text-[15px] p-[10px] text-justify">{content}</p>
                        <Button variant='default' className="my-[30px]" onClick={()=>{
                            setcontent(title)
                            setanimate('')
                            }}>Flip Back</Button>
                    </div>
                )}
            </CardContent>
            
        </Card>


    )
}