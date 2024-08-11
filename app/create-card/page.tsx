'use client'
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function CreateCard() {
    const [carddetails,setcarddetails]=React.useState({title:'',description:''})    
    return (
        <Card className="w-[500px] h-[400px] mx-auto mt-[100px]">
            <CardHeader>
                <CardTitle>Create New Card</CardTitle>
                <CardDescription>Enter card title and description</CardDescription>
            </CardHeader>
            <CardContent>
                <Input placeholder="Title" className="mt-[30px]" onChange={(e)=>setcarddetails({...carddetails,title:e.target.value})}/>
                <Input placeholder="Description " className="mt-[30px]" onChange={(e)=>setcarddetails({...carddetails,description:e.target.value})}/>
            </CardContent>
            <CardFooter>
                <Button className="w-full mt-[30px]" onClick={async()=>{
                    const a= await fetch('/api',{
                        method:'POST',
                        body:JSON.stringify(carddetails)
                    })
                    alert('Card Created')
                }}>Create Card</Button>
            </CardFooter>
        </Card>

    )
}