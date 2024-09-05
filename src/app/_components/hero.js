"use client"; // Mark this file as a Client Component

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  // Use useMemo to ensure `texts` is not recreated on every render
  const texts = useMemo(() => ["UI/UX Designer", "Mobile Developer", " IT Specialist", "Web Developer", "Health Scientist", "Project Manager", "Product Owner"], []);

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(textChangeInterval); // Clean up on unmount
  }, [texts]); // Adding `texts` to dependencies array

  return (
    <section id="home" className="min-h-screen bg-gray-100 flex items-center justify-center flex-col w-full">
      <div className="flex flex-col gap-6 md:flex-row items-center w-full px-4 py-8">
        <div className="flex flex-col sm:w-2/3 lg:w-2/5 relative z-20 py-16">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue sentencecase text-3xl sm:text-5xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            A creative <br/>
            <span className="text-3xl text-yellow-700 sm:text-5xl">{currentText}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Dimension of reality that makes change possible and understandable. 
            An indefinite and homogeneous environment in which natural events and 
            human existence take place.
          </p>
          <div className="flex justify-center mt-8">
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
            
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <Image
            src="https://www.tailwind-kit.com/images/object/10.png"
            alt="placeholder"
            className="max-w-xs md:max-w-sm m-auto"
            width={1080} // Adjust dimensions as needed
            height={1080} // Adjust dimensions as needed
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
