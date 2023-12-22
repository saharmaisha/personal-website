import React from 'react';

const Skills = () => {
    const skills = {
        'CODING LANGUAGES': ['Python', 'Java', 'Scala', 'Typescript', 'SQL', 'JavaScript', 'C', 'HTML', 'CSS'],
        'TOOLS': [
          'PySpark', 'Flask', 'AWS', 'EMR', 'S3', 'CloudFormation', 'SageMaker', 
          'Google Cloud', 'Node.js', 'Express.js', 'React', 'Git'
        ],
        'DESIGN': ['Figma', 'Microsoft Office']
      };      

  return (
    
    <div className="w-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">SKILLS</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="w-full lg:w-1/4 p-4">
            <div className="skill-card bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center text-green-800">{category}</h2>
              </div>
              <div className="skill-list p-4 border-t">
                {items.map(item => (
                  <p key={item} className="text-gray-600 text-center">{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
