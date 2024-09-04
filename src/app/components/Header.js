import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 left-0 z-50">
      <nav className="flex justify-center p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="#home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#work" className="hover:underline">
              Work
            </Link>
          </li>
          <li>
            <Link href="#news" className="hover:underline">
              News
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
