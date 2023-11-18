'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const testimonials = [
    {
      text: 'The consulting services provided by Razor Talent Consulting were a game-changer for our business. Their expert guidance led us to unprecedented success.',
      person: 'Rhoda Mbesa, CEO',
    },
    {
      text: 'Working with Razor Talent Consulting was a wise decision. Their insights and strategies transformed our operations, helping us achieve our goals faster.',
      person: 'Charles Mutinda, CFO',
    },
    {
      text: 'A big thank you to the Razor Talent team! Their consulting expertise helped us navigate challenges and seize new opportunities.',
      person: 'Kwnegu Siderra, CTO',
    },
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-site text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              "{testimonial.text}"
            </h3>
            <p>{testimonial.person}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

