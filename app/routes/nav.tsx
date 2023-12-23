import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change this threshold pixel value based on when you want the navbar to appear
            const threshold = 100; 
            setIsScrolled(window.scrollY > threshold);
        };

        // Check the initial scroll position when the component mounts
        handleScroll();

        // Add the event listener for subsequent scrolls
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const smoothScroll = (targetId: string) => {
          const target = document.querySelector(targetId);
          if (target instanceof HTMLElement) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth",
            });
          }
        };
    
        const handleScroll = (event: MouseEvent) => {
          event.preventDefault();
          const targetId = (event.target as HTMLAnchorElement).hash;
          smoothScroll(targetId);
        };
    
        const navLinks = document.querySelectorAll('.nav-link');
    
        navLinks.forEach(link => {
          link.addEventListener('click', handleScroll as EventListener);
        });
    
        return () => {
          navLinks.forEach(link => {
            link.removeEventListener('click', handleScroll as EventListener);
          });
        };
    }, []);
    return (
        <div className={`fixed top-0 left-0 w-full z-10 transition-all ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
        <div className="flex-shrink-0">
            <Link to="/" className="text-green-800 font-bold text-lg">
            SM Sahar Maisha
            </Link>
        </div>
        <div className="hidden md:block ml-10">
            <div className="ml-10 flex items-center space-x-4">
                <Link
                to="/#about"
                className="text-black hover:text-green-800 text-base font-medium nav-link"
                >
                About
                </Link>
                <Link
                to="/#education"
                className="text-black hover:text-green-800 text-base font-medium nav-link"
                >
                Education
                </Link>
                <Link
                to="/#experience"
                className="text-black hover:text-green-800 text-base font-medium nav-link"
                >
                Experience
                </Link>
                <Link
                to="/#skills"
                className="text-black hover:text-green-800 text-base font-medium nav-link"
                >
                Skills
                </Link>
                <Link
                to="/#projects"
                className="text-black hover:text-green-6=800 text-base font-medium nav-link"
                >
                Projects
                </Link>
                <Link
                to="/#blog"
                className="text-black hover:text-green-800 text-base font-medium nav-link"
                >
                Blog
                </Link>
                <Link
                to="/login"
                className="px-4 py-2 bg-green-800 text-white rounded-full shadow-md font-medium hover:bg-black"
                >
                Log In
                </Link>
                </div>
        </div>
    </div>
    </div>
    </div>
  );
}