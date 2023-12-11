/*
  Warnings:

  - Added the required column `text` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Todo" ("complete", "id", "title") SELECT "complete", "id", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
