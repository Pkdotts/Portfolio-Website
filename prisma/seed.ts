import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: "A Wetter World",
    bannerUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
    description: "Rainy cloud yadadadyadyadyayday",
  },
  {
    name: "MOTHER Encore",
    bannerUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    description: "That sure was a mother encore",
  },
];

export async function main() {
  for (const p of projectData) {
    await prisma.project.create({ data: p });
  }
}

main();