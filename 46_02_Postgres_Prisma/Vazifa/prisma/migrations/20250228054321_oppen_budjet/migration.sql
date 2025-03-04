-- CreateTable
CREATE TABLE "learningCenter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "learningCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEnrolment" (
    "id" SERIAL NOT NULL,
    "learningCenterId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "UserEnrolment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_phone_key" ON "Student"("phone");

-- AddForeignKey
ALTER TABLE "UserEnrolment" ADD CONSTRAINT "UserEnrolment_learningCenterId_fkey" FOREIGN KEY ("learningCenterId") REFERENCES "learningCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEnrolment" ADD CONSTRAINT "UserEnrolment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
