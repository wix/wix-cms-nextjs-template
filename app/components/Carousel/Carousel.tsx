'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const texts = [
    '“I have been volunteering with ChoosEquality for over a year now and I can say that it has been a rewarding and meaningful experience.”',
    '“ChoosEquality is a movement that is transforming education for the better. I am proud to be part of it and I encourage anyone who cares about education to join us.”',
    '“I have also seen the positive impact that ChoosEquality has on the kids and the schools they work with.”',
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {texts.map((text, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-site text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              {text}
            </h3>
            <p>Nora Jacobs, Teacher</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
