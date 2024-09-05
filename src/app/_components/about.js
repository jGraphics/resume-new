import Image from 'next/image';


const AboutSection = () => {
    return (
      <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
        <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl mx-auto px-4 py-8">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-md lg:text-l text-center md:text-left text-black leading-tight font-medium">
            About Peggy
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-black font-light tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
            and deliver help content right where your customers need it, all in one place, all for one low price.
          </h3>

          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-black font-light tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
            and deliver help content right where your customers need it, all in one place, all for one low price.
          </h3>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-black font-light tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
            and deliver help content right where your customers need it, all in one place, all for one low price.
          </h3>

          </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="https://loremflickr.com/g/600/600/girl"
            alt="Customer support"
            width={600} 
            height={600} 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      </section>
    );
  };
  
  export default AboutSection;
  