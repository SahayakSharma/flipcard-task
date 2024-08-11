import { PrismaClient } from "@prisma/client"
const  prisma = new PrismaClient()
export async function GET(){

    const cards = await prisma.cards.findMany()
    return Response.json(cards)

}

export async function POST(req:Request){
    const a =await req.json()
    const {title,description} = a
    const card = await prisma.cards.create({
        data:{
            title,
            description
        }
    })
    return Response.json({
        title:title,
        description:description
    })

}