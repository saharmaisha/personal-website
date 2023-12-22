import type { MetaFunction } from "@remix-run/node";
import NavBar from "./nav";
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import FadeIn from './fadein';


import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
      <>
      <NavBar />
      <FadeIn>
      <div className="flex justify-center items-center min-h-screen">
        <section id="" className="max-w-7xl flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 mx-auto my-auto">
          <div className="text-center sm:flex-1">
            <h1 className="text-[10vw] sm:text-[5vw] font-bold">Hi there! I'm Sahar 👋</h1>
              <div className="text-lg lg:text-xl text-center">
                <p className="mb-4">
                  I'm currently a student at Harvard College studying computer science.
                </p>
                <p className="mb-4">
                  I'm interested in artificial intelligence and entrepreneurship. Most recently, I interned at Amazon on their Amazon Advertising team.
                </p>
                <p className="mb-4">
                In my free time, I enjoy cooking and exploring new restaurants in NYC and Boston. Feel free to reach out to talk about anything tech, entrepreneurship, or food at <a href="mailto:smaisha@college.harvard.edu" className="text-blue-500">smaisha@college.harvard.edu</a>.              </p>
              </div>
          </div>
          <div className="lg:flex-1 flex justify-center items-center">
            <div className="w-[20vw] sm:w-[25vw] h-[20vw] sm:h-[25vw] min-w-[10rem] min-h-[10rem] rounded-full overflow-hidden">
              <img
                src="images/me.jpg"
                alt="Sahar's image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      </FadeIn>
      <section id="education" className="max-w-7xl flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 mx-auto pt-36 pb-16 sm:pb-16">
      <FadeIn>
        <Education />
        </FadeIn>
      </section>
      <section id="experience" className="max-w-7xl flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 mx-auto pt-36 pb-16 sm:pb-16">
        <FadeIn>
          <Experience />
        </FadeIn>
      </section>
      <section id="skills" className="max-w-7xl flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 mx-auto my-auto">
        <FadeIn>
          <Skills />
        </FadeIn>
      </section>
    </>
  );
}
