import { Prisma } from "@/generated/prisma/client";

export type SkillTypeWithSkills =
  Prisma.SkillTypeGetPayload<{
    include: { Skill: true };
}>;