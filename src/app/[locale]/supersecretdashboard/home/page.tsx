import prisma from "@/lib/prisma";
import HomeDashboard from "./client";

export default async function HomeDashboardPage(){
    const translations = await prisma.translation.findMany();
    
    return(
        <HomeDashboard translations={translations}/>
    );
}