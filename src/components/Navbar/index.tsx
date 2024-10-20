import { useState, useEffect } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import VanijLabelLogo from '../../assets/VanijLabelLogo.svg';
import MagicColorFilledIcon from '../../assets/MagicColorFilledIcon.svg';
import { classNames } from '../../utils/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   function onScroll() {
  //     setIsScrolled(window.scrollY > 0);
  //   }
  //   onScroll();
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function JoinWaitlistButton({ className = '' }: { className?: string }) {
    return (
      <button
        className={classNames(
          'items-center px-4 py-2 bg-transparent text-blue-400 ring-1 ring-blue-400 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]',
          className
        )}
      >
        <img src={MagicColorFilledIcon} alt="" className="mr-2 w-6 h-6" />
        <span className=" font-medium">Join Waitlist</span>
      </button>
    );
  }

  const headerClasses = `sticky top-0 h-fit z-[100] bg-[#0a0a0a] border-b border-b-gray-800 text-white py-4 transition-all duration-300 ${
    isScrolled ? 'bg-opacity-50 backdrop-blur-lg' : 'bg-opacity-100'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        <Link to="/" className="">
          <img src={VanijLabelLogo} alt="" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-5">
          <Link
            to="/"
            className="px-3 py-2  hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <div className="relative group px-3 py-2">
            <button className="flex items-center  group">
              Our Products{' '}
              <ChevronDown className="ml-1 h-4 w-4 group-hover:text-blue-400 transition-colors" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1a1a1a] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  to="/build-your-agents"
                  className="block px-4 py-2  text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                  role="menuitem"
                >
                  Build your Agents
                </Link>
                <Link
                  to="/custom-llms"
                  className="block px-4 py-2  text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                  role="menuitem"
                >
                  Custom LLM’s
                </Link>
                <Link
                  to="/our-agents"
                  className="block px-4 py-2  text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                  role="menuitem"
                >
                  Our Agents
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/resources"
            className="px-3 py-2  hover:text-blue-400 transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/contacts"
            className="px-3 py-2  hover:text-blue-400 transition-colors"
          >
            Contacts
          </Link>
          {/* <button className="hidden md:flex items-center px-4 py-2 bg-transparent text-blue-400 ring-1 ring-blue-400 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            <img src={MagicColorFilledIcon} alt="" className="mr-2 w-6 h-6" />
            <span className=" font-medium">Join Waitlist</span>
          </button> */}
          <JoinWaitlistButton className="hidden md:flex " />
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] bg-opacity-100 mt-2 pb-4">
          <Link to="/" className="block px-4 py-2  hover:bg-[#2a2a2a]">
            Home
          </Link>
          <Link to="/products" className="block px-4 py-2  hover:bg-[#2a2a2a]">
            Our Products
          </Link>
          <Link to="/resources" className="block px-4 py-2  hover:bg-[#2a2a2a]">
            Resources
          </Link>
          <Link to="/contacts" className="block px-4 py-2  hover:bg-[#2a2a2a]">
            Contacts
          </Link>
          {/* <button className="flex items-center px-4 py-2 m-4 bg-transparent text-blue-400 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            <Star className="mr-2 h-4 w-4" />
            <span className=" font-medium">Join Waitlist</span>
          </button> */}
          <JoinWaitlistButton className="flex items-center px-4 py-2 mx-4 mt-2 md:hidden" />
        </div>
      )}
    </header>
  );
}
