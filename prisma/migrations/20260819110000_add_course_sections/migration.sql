-- Add structured course sections while preserving every existing lesson.
CREATE TYPE "CourseSectionType" AS ENUM ('CORE', 'RECORDED');

CREATE TABLE "CourseSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "CourseSectionType" NOT NULL,
    "order" INTEGER NOT NULL,
    "countsTowardProgress" BOOLEAN NOT NULL DEFAULT true,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseSection_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CourseSection_courseId_type_key"
ON "CourseSection"("courseId", "type");

CREATE UNIQUE INDEX "CourseSection_courseId_order_key"
ON "CourseSection"("courseId", "order");

CREATE INDEX "CourseSection_courseId_countsTowardProgress_order_idx"
ON "CourseSection"("courseId", "countsTowardProgress", "order");

ALTER TABLE "CourseSection"
ADD CONSTRAINT "CourseSection_courseId_fkey"
FOREIGN KEY ("courseId") REFERENCES "Course"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

-- Deterministic IDs make this data migration safe and reproducible.
INSERT INTO "CourseSection" (
    "id", "title", "description", "type", "order",
    "countsTowardProgress", "courseId", "createdAt", "updatedAt"
)
SELECT
    'section_core_' || md5("id"),
    'Course Lessons',
    'The structured lessons required for course completion.',
    'CORE'::"CourseSectionType",
    1,
    true,
    "id",
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
FROM "Course";

INSERT INTO "CourseSection" (
    "id", "title", "description", "type", "order",
    "countsTowardProgress", "courseId", "createdAt", "updatedAt"
)
SELECT
    'section_recorded_' || md5("id"),
    'Recorded Live Sessions',
    'Additional recordings from previous live classes. These do not affect course completion.',
    'RECORDED'::"CourseSectionType",
    2,
    false,
    "id",
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
FROM "Course";

ALTER TABLE "Lesson" ADD COLUMN "sectionId" TEXT;

UPDATE "Lesson" AS lesson
SET "sectionId" = section."id"
FROM "CourseSection" AS section
WHERE section."courseId" = lesson."courseId"
  AND section."type" = 'CORE'::"CourseSectionType";

ALTER TABLE "Lesson" ALTER COLUMN "sectionId" SET NOT NULL;

CREATE INDEX "Lesson_sectionId_order_idx" ON "Lesson"("sectionId", "order");

ALTER TABLE "Lesson"
ADD CONSTRAINT "Lesson_sectionId_fkey"
FOREIGN KEY ("sectionId") REFERENCES "CourseSection"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;
