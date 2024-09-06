// src/pages/work-details.js

import Image from "next/image";
import Link from "next/link";

// const WorkDetails = () => {
//   return (
//     <div>
//       <header className="bg-gray-800 text-white p-4">
//         <Link href="/" className="text-white hover:underline">
//           Back to Home
//         </Link>
//       </header>
//       <main className="p-8">
//         <h1 className="text-4xl font-bold mb-4">Pathed App Design</h1>
//         <Image
//           src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
//           alt="Project Image"
//           width={1200}
//           height={800}
//           className="w-full h-auto mb-4"
//         />
//         <p className="text-lg">
//           Here you can provide detailed information about the project. Explain the features, design process, and any other relevant details. Add more images if necessary to illustrate different aspects of the project.
//         </p>
//       </main>
//     </div>
//   );
// };
const WorkDetail = ({ work }) => {
  if (!work) {
    return <p>Work item not found. Please check back later.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      <Image
        src={work.imageUrl}
        alt={work.title}
        width={1080}
        height={720}
        className="w-full h-auto object-cover"
      />
      <p className="mt-4 text-lg">{work.description}</p>
    </div>
  );
};

export default WorkDetails;
