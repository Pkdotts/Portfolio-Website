-- CreateTable
CREATE TABLE "Skill" (
    "skillId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("skillId")
);

-- CreateTable
CREATE TABLE "Project" (
    "projectId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "imageUrls" TEXT[],
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "Art" (
    "artId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT[],
    "description" TEXT,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Art_pkey" PRIMARY KEY ("artId")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "workId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("workId")
);

-- CreateTable
CREATE TABLE "Education" (
    "educationId" SERIAL NOT NULL,
    "diploma" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("educationId")
);

-- CreateTable
CREATE TABLE "Resume" (
    "resumeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fileURL" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("resumeId")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "contactId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "Hobby" (
    "hobbyId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Hobby_pkey" PRIMARY KEY ("hobbyId")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "contactId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "testimonialId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accepted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("testimonialId")
);
