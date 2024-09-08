// src/app/portfolio/naija-quest/page.js
import Link from 'next/link';

export default function PathedApp() {
    return (
      // src/pages/work/[id].js

<div className='pt-16 bg-white'>
  <Link href="/#work" className="text-yellow-600 hover:underline block mb-4">Back to Work Section
  </Link>
  <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
    <div
      className="bg-cover h-64 text-center overflow-hidden"
      style={{
        height: 450,
        backgroundImage:
          'url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")'
      }}
    ></div>
    <div className="max-w-full mx-auto">
      <div className="mt-3 px-4 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="">
          <Link
            href="#"
            className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Election
          </Link>
          ,
          <Link
            href="#"
            className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Politics
          </Link>
          <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
            Revenge of the Never Trumpers
          </h1>
          <p className="text-gray-700 text-xs mt-2">
            Written By:
            <Link
              href="#"
              className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              Ahmad Sultani
            </Link>
          </p>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </blockquote>
          <p className="text-base leading-8 my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Link
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #Election
          </Link>
          ,
          <Link
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #people
          </Link>
          ,
          <Link
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #Election2020
          </Link>
          ,
          <Link
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #trump
          </Link>
          ,
          <Link
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            #Joe
          </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  
    );
  }
  