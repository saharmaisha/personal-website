import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import FadeIn from './fadein';
import Education from "./education";
import Experience from "./experience";
import NavBar from "./nav";
import Projects from './projects';
import Skills from "./skills";

import { useOptionalUser } from "~/utils";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
      <>
      <NavBar />
      <FadeIn>
        <div className="flex justify-center items-center min-h-screen">
          <section id="about" className="max-w-7xl flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 mx-auto my-auto pt-32">
            <div className="text-center sm:flex-1">
              <h1 className="text-[10vw] sm:text-[5vw] font-bold">Hi there! I&apos;m Sahar 👋</h1>
              <div className="text-lg lg:text-xl text-center">
                <p className="mb-4">
                  I&apos;m currently a student at Harvard College studying computer science.
                </p>
                <p className="mb-4">
                  I&apos;m interested in artificial intelligence and entrepreneurship. Most recently, I interned at Amazon on their Amazon Advertising team.
                </p>
                <p className="mb-4">
                  In my free time, I enjoy cooking and exploring new restaurants in NYC and Boston. Feel free to reach out to talk about anything tech, entrepreneurship, or food at <a href="mailto:smaisha@college.harvard.edu" className="text-blue-500">smaisha@college.harvard.edu</a>.
                </p>
              </div>
            </div>
            <div className="lg:flex-1 flex justify-center items-center">
              <div className="w-[20vw] sm:w-[25vw] h-[20vw] sm:h-[25vw] min-w-[10rem] min-h-[10rem] rounded-full overflow-hidden">
                <img src="images/me.jpg" alt="Sahar" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        </div>
      </FadeIn>
      <section id="education" className="max-w-7xl flex flex-col sm:flex-row lg:px-8 mx-auto pt-32">
      <FadeIn>
        <Education />
        </FadeIn>
      </section>
      <section id="experience" className="max-w-7xl flex flex-col sm:flex-row lg:px-8 mx-auto pt-32">
        <FadeIn>
          <Experience />
        </FadeIn>
      </section>
      <section id="skills" className="max-w-7xl flex flex-col sm:flex-row lg:px-8 mx-auto pt-32">
        <FadeIn>
          <Skills />
        </FadeIn>
      </section>
      <section id="projects" className="max-w-7xl flex flex-col sm:flex-row lg:px-8 mx-auto pt-32">
        <FadeIn>
          <Projects />
        </FadeIn>
      </section>
      <footer className="bg-gray-200 text-center p-6">
      <div className="flex justify-center mb-6">
        <a href="https://twitter.com/saharmaisha" target="_blank" rel="noopener noreferrer" className="mr-6 text-gray-600">
          <img src="images/x.png" alt="X Logo" className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/sahar-maisha" target="_blank" rel="noopener noreferrer" className="mr-6 text-gray-600">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/saharmaisha" target="_blank" rel="noopener noreferrer" className="text-gray-600">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="text-gray-700 text-center">
        © 2024 Sahar Maisha
      </div>
    </footer>
    </>
  );
}
