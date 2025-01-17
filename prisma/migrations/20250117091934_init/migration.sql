-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "library_card_no" VARCHAR(10) NOT NULL,
    "profile_status" VARCHAR(10),
    "role" VARCHAR(10) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Books" (
    "book_id" SERIAL NOT NULL,
    "isbn" VARCHAR(13) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "no_of_copies" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "publish_year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "BookCategories" (
    "category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "BookCategories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "BookCategoryLinks" (
    "book_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "BookCategoryLinks_pkey" PRIMARY KEY ("book_id","category_id")
);

-- CreateTable
CREATE TABLE "BookPhotos" (
    "photo_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "url" VARCHAR(1024) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookPhotos_pkey" PRIMARY KEY ("photo_id")
);

-- CreateTable
CREATE TABLE "Activities" (
    "activity_id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "activity_date" TIMESTAMP(3) NOT NULL,
    "start_time" VARCHAR(10) NOT NULL,
    "end_time" VARCHAR(10) NOT NULL,
    "age_group" VARCHAR(20),
    "capacity" INTEGER,
    "photo_url" VARCHAR(1024),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activities_pkey" PRIMARY KEY ("activity_id")
);

-- CreateTable
CREATE TABLE "ActivityPhotos" (
    "photo_id" SERIAL NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "url" VARCHAR(1024) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityPhotos_pkey" PRIMARY KEY ("photo_id")
);

-- CreateTable
CREATE TABLE "Borrowings" (
    "borrowing_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "borrow_date" TIMESTAMP(3) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "return_date" TIMESTAMP(3),

    CONSTRAINT "Borrowings_pkey" PRIMARY KEY ("borrowing_id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "rating_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("rating_id")
);

-- CreateTable
CREATE TABLE "Reservations" (
    "reservation_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "reservation_date" TIMESTAMP(3) NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservations_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "StaffPicks" (
    "pick_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "pick_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaffPicks_pkey" PRIMARY KEY ("pick_id")
);

-- CreateTable
CREATE TABLE "Fines" (
    "fine_id" SERIAL NOT NULL,
    "borrowing_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "fine_amount" DECIMAL(65,30) NOT NULL,
    "fine_date" TIMESTAMP(3) NOT NULL,
    "paid_date" TIMESTAMP(3),

    CONSTRAINT "Fines_pkey" PRIMARY KEY ("fine_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "BookCategoryLinks_category_id_idx" ON "BookCategoryLinks"("category_id");

-- CreateIndex
CREATE INDEX "BookPhotos_book_id_idx" ON "BookPhotos"("book_id");

-- CreateIndex
CREATE INDEX "ActivityPhotos_activity_id_idx" ON "ActivityPhotos"("activity_id");

-- CreateIndex
CREATE INDEX "Borrowings_book_id_idx" ON "Borrowings"("book_id");

-- CreateIndex
CREATE INDEX "Borrowings_user_id_idx" ON "Borrowings"("user_id");

-- CreateIndex
CREATE INDEX "Ratings_book_id_idx" ON "Ratings"("book_id");

-- CreateIndex
CREATE INDEX "Ratings_user_id_idx" ON "Ratings"("user_id");

-- CreateIndex
CREATE INDEX "Reservations_book_id_idx" ON "Reservations"("book_id");

-- CreateIndex
CREATE INDEX "Reservations_user_id_idx" ON "Reservations"("user_id");

-- CreateIndex
CREATE INDEX "StaffPicks_book_id_idx" ON "StaffPicks"("book_id");

-- CreateIndex
CREATE INDEX "StaffPicks_user_id_idx" ON "StaffPicks"("user_id");

-- CreateIndex
CREATE INDEX "Fines_borrowing_id_idx" ON "Fines"("borrowing_id");

-- CreateIndex
CREATE INDEX "Fines_user_id_idx" ON "Fines"("user_id");

-- AddForeignKey
ALTER TABLE "BookCategoryLinks" ADD CONSTRAINT "BookCategoryLinks_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("book_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookCategoryLinks" ADD CONSTRAINT "BookCategoryLinks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "BookCategories"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookPhotos" ADD CONSTRAINT "BookPhotos_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("book_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityPhotos" ADD CONSTRAINT "ActivityPhotos_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "Activities"("activity_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowings" ADD CONSTRAINT "Borrowings_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowings" ADD CONSTRAINT "Borrowings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffPicks" ADD CONSTRAINT "StaffPicks_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffPicks" ADD CONSTRAINT "StaffPicks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fines" ADD CONSTRAINT "Fines_borrowing_id_fkey" FOREIGN KEY ("borrowing_id") REFERENCES "Borrowings"("borrowing_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fines" ADD CONSTRAINT "Fines_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
