-- CreateTable
CREATE TABLE "Congratulations" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Congratulations_pkey" PRIMARY KEY ("id")
);
