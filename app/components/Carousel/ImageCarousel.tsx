'use client';
import { Carousel } from 'flowbite-react';

const images = [
    '/images/r1.png',
    '/images/r2.png',
    '/images/r3.png',
    '/images/r4.png',
    '/images/r5.png',
    '/images/r6.png',
    '/images/r7.png',
    '/images/r8.png',
    '/images/r9.png',
    '/images/r10.png',
  ];

  export const ImageCarousel  = () => {
    return (
      <>
      <div className="h-32 sm:h-32 xl:h-40 2xl:h-48 mt-10 sm:mt-20">
      <Carousel
      
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 h-full items-center justify-center text-white p-2"
          >
            <img src={image} alt={`Image ${i}`} />

          </div>
        ))}
      </Carousel>
    </div>

      </>
    );
  };
  
  