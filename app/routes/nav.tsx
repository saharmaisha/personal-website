import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useOptionalUser } from "~/utils";


export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useOptionalUser();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; 
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const smoothScroll = (targetId: string) => {
      const target = document.querySelector(targetId) as HTMLElement | null;
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.hash;

      if (targetId.startsWith('#')) {
        event.preventDefault();
        smoothScroll(targetId);
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick as EventListener);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-10 transition-all ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-green-800 font-bold text-lg">
              SM Sahar Maisha
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Main Nav Links for non-mobile view */}
            <Link to="/#about" className="text-black hover:text-green-800 text-base font-medium">About</Link>
            <Link to="/#education" className="text-black hover:text-green-800 text-base font-medium">Education</Link>
            <Link to="/#experience" className="text-black hover:text-green-800 text-base font-medium">Experience</Link>
            <Link to="/#skills" className="text-black hover:text-green-800 text-base font-medium">Skills</Link>
            <Link to="/#projects" className="text-black hover:text-green-6=800 text-base font-medium">Projects</Link>
            <Link to="/notes" className="text-black hover:text-green-800 text-base font-medium">Blog</Link>
            {user ? (
              <Form action="/logout" method="post">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-full shadow-md font-medium hover:bg-red-800"
                >
                  Logout
                </button>
              </Form>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-green-800 text-white rounded-full shadow-md font-medium hover:bg-black"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-white shadow-md`}>
        {/* Mobile Nav Links */}
        <Link to="/#about" className="block p-4 text-black hover:bg-gray-200">About</Link>
        <Link to="/#education" className="block p-4 text-black hover:bg-gray-200">Education</Link>
        <Link to="/#experience" className="block p-4 text-black hover:bg-gray-200">Experience</Link>
        <Link to="/#skills" className="block p-4 text-black hover:bg-gray-200">Skills</Link>
        <Link to="/#projects" className="block p-4 text-black hover:bg-gray-200">Projects</Link>
        <Link to="/notes" className="block p-4 text-black hover:bg-gray-200">Blog</Link>
        {user ? (
          <Form action="/logout" method="post" className="p-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-600 text-white rounded-full shadow-md font-medium hover:bg-red-800"
            >
              Logout
            </button>
          </Form>
        ) : (
          <Link
            to="/login"
            className="block p-4 bg-green-800 text-white rounded-full shadow-md font-medium hover:bg-black"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
