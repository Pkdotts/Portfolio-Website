import { Prisma } from "@/generated/prisma/client";

export type SkillTypeWithSkills =
  Prisma.SkillTypeGetPayload<{
    include: { Skill: true };
}>;

export type FormState = { success: boolean, error?: string | null};