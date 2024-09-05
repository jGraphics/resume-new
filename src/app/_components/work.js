import Image from "next/image";

const WorkSection = () => {
    return (
      <section id="work" className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <Image src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
    alt="Background Image" width={1080} height={1080}
    className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div> 
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-xl font-bold leading-tight mb-4">Pathed App Design</h1>
    <p className="text-lg justify-center text-gray-300 mb-8">Discover amazing features and services that await you.</p>
  </div>

      </section>
    );
  };
  
  export default WorkSection;
  