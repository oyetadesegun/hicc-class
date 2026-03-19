-- AlterTable
ALTER TABLE "UserCourse" ADD COLUMN     "attendedLive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "watchedLessons" JSONB NOT NULL DEFAULT '[]';
