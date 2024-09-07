import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-transparent text-black fixed w-full top-0 left-0 z-50">
      <nav className="flex justify-end p-4">
        <ul className="flex space-x-4">
          <li>
            <Link 
              href="#home" 
              className="hover:text-yellow-700 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              className="hover:text-yellow-700 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#work" 
              className="hover:text-yellow-700 transition duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              href="#news" 
              className="hover:text-yellow-700 transition duration-300"
            >
              News
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="sentencecase py-2 px-4 rounded-md bg-yellow-700 border-2 border-transparent text-white text-md mr-4 hover:bg-gold transition duration-300"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
