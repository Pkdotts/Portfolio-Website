import { Group } from "@mantine/core";
import ContactDashboard from "./client";
import prisma from "@/lib/prisma";

export default async function ContactDashboardPage(){
    const contacts = await prisma.contactMessage.findMany({orderBy:{date: "desc"}});
    return(
        <ContactDashboard contacts={contacts}/>
    );
}