import prisma from "@/lib/prisma";
import { NameTitleClient } from "./nametitleclient";


export default async function NameTitle(){
    const name = await prisma.translation.findUnique({where: {key: "name"}});
    const roles = await prisma.translation.findUnique({where: {key: "roles"}});
    return(
        <NameTitleClient name={name} roles={roles}/>
    )
}
