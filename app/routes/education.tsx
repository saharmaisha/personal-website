import { AcademicCapIcon, CodeIcon} from '@heroicons/react/outline';

export default function Education() {
   return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold mb-12 text-center text-green-800">EDUCATION</h1>
  
  <div className="education-card mb-12 p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold flex items-center text-green-800">
      <AcademicCapIcon className="w-6 h-6 mr-2" /> Harvard University
    </h2>
    <p className="text-lg text-gray-600">Aug 2022 - Present</p>
    <div className="mt-4">
      <p className="font-medium">Extracurriculars:</p>
      <p>Harvard Women in Entrepreneurship, Harvard Ventures, Harvard Innovation Labs, Harvard Venture Capital Group, Women in Computer Science</p>
      <p className="font-medium mt-4">Relevant Coursework:</p>
      <ul className="list-disc ml-8 mt-2">
        <li>Computer Science: Introduction to Computer Science (CS50), Discrete Mathematics (CS20), Introduction to Algorithms and their Limitations (CS120)</li>
        <li>Entrepreneurship: StudioLab on Creativity and Entrepreneurship (CE10)</li>
      </ul>
    </div>
  </div>
  
  <div className="education-card mb-12 p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold flex items-center text-green-800">
      <CodeIcon className="w-6 h-6 mr-2" /> Brooklyn Technical High School
    </h2>
    <p className="text-lg text-gray-600">September 2018 - June 2022</p>
    <div className="mt-4">
      <p className="font-medium">Extracurriculars:</p>
      <p>President of Girls Who Code, Founder of Kids Compile, Improv Captain, National Honors Society, Artificial Intelligence For All (AI4ALL) Fellow at Columbia University, Girls Who Code Mentee at Columbia University, Built by Girls Mentee</p>
      <p className="font-medium mt-4">Awards:</p>
      <ul className="list-disc ml-8 mt-2">
        <li>1st Place Google Design Sprint, Amazon Future Engineer Scholar, AP Scholar with Distinction, National Center for Women in Technology Greater New York Affiliate Award and National Honorable Mention for Aspirations in Computing, Sci4Teens 2nd Place Engineering Writing Contest</li>
      </ul>
    </div>
  </div>
</div>

  );
}
