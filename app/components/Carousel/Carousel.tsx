'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-site text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              “I am a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </h3>
            <p>Nora Jacobs, Teacher</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
