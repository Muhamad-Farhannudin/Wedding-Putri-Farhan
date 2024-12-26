-- CreateTable
CREATE TABLE "DbWedding" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "comment" TEXT,
    "attendance" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DbWedding_pkey" PRIMARY KEY ("id")
);
