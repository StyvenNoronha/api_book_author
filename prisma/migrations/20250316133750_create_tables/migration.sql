-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "publication_year" INTEGER NOT NULL,
    "author_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Book_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
