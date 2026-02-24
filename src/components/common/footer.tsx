
import prisma from "@/lib/prisma";

import FooterClient from "./footerclient";



export default async function Footer() {
  const links = await prisma.link.findMany({orderBy: {order: 'asc'}});
  const email = await prisma.translation.findUnique({where: {key: "email"}});
  return (
    <FooterClient links={links} email={email}/>
  );
}
