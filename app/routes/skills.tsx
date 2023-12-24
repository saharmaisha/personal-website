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
    <center>
    <div className="w-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">SKILLS</h1>
      <div className="flex flex-col justify-center items-center gap-8">
  {Object.entries(skills).map(([category, items]) => (
    <div key={category} className="w-full">
      <div className="skill-card bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-center text-green-800">{category}</h2>
        </div>
        <div className="skill-list flex flex-row flex-wrap justify-center gap-2 p-4 border-t">
          {items.map(item => (
            <div key={item} className="badge bg-green-100 hover:bg-green-200 text-green-800 rounded-full px-3 py-1 transition duration-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
    </center>
  );
};

export default Skills;
