-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "sales" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerPerformance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "performance" INTEGER NOT NULL,

    CONSTRAINT "SellerPerformance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientGrowth" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "ClientGrowth_pkey" PRIMARY KEY ("id")
);
