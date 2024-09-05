import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
          PEGGY ROXY
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            <Link href="#" className="py-2 px-6 flex">
              Home
            </Link>
            <Link href="#" className="py-2 px-6 flex">
              Watch
            </Link>
            <Link href="#" className="py-2 px-6 flex">
              Product
            </Link>
            <Link href="#" className="py-2 px-6 flex">
              Contact
            </Link>
            <Link href="#" className="py-2 px-6 flex">
              Career
            </Link>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
