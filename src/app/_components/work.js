// src/components/WorkSection.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const workItems = [
  {
    id: 'pathed-app-design',
    title: 'Pathed App Design',
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Discover amazing features and services that await you.'
  },
  {
    id: 'naija-quest-app',
    title: 'Naija Quest App',
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Explore the adventure with Naija Quest.'
  },
  {
    id: 'project-two',
    title: 'Project Two',
    imageUrl: 'https://example.com/image2.jpg',
    description: 'A detailed view of Project Two.'
  },
  // Add more work items as needed
];

const WorkSection = () => {
  return (
    <section id="work" className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          width={1080}
          height={1080}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 h-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {workItems.map((item) => (
            <SwiperSlide key={item.id} className="relative h-full flex items-center justify-center">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center bg-black bg-opacity-50 rounded-lg">
                <Link href={`/work/${item.id}`} className="text-2xl font-bold leading-tight mb-4 cursor-pointer hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  
                </Link>
                <p className="text-lg text-gray-300 mb-8">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkSection;
