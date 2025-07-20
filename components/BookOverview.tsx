import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-5xl font-semibold text-white md:text-7xl">
          {title}
        </h1>
        <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-light-100">
          <p>
            By{" "}
            <span className="font-semibold text-shadow-zinc-50 gap-0.5">
              {author}
            </span>
          </p>
          <p className="gap-2">
            Category {""}
            <span className="font-semibold text-shadow-zinc-50 gap-1">
              {genre}
            </span>
          </p>
          <br />
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 mt-1;">
          <p className="text-xl text-light-100">
            Total Books:
            <span className="ml-2 font-semibold text-primary;">
              {total_copies}
            </span>
          </p>
          <p className="text-xl text-light-100">
            Available Books:
            <span className="ml-2 font-semibold text-primary;">
              {available_copies}
            </span>
          </p>
        </div>
        <p className="mt-2 text-justify text-xl text-light-100;">
          {description}
        </p>
        <Button
          className="mt-1  min-h-14 w-fit bg-primary text-black hover:bg-primary/90 max-md:w-full !important"
          style={{ backgroundColor: "#EED1AC", borderRadius: 5 }}
        >
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-serif text-xl text-black">Borrow</p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover 
          variant = "wide"
          className ="z-10"
          coverColor ={color}
          coberImage = {cover}
          />
       <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
        <BookCover 
          variant = "wide"
          coverColor ={color}
          coberImage = {cover}
          />
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default BookOverview;
