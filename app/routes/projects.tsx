export default function Projects() {
    return(
        <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold mb-12 text-center text-green-800">PROJECTS</h1>
  
  <div className="grid md:grid-cols-2 gap-8">
    {/* SustainABite Project */}
    <div className="project-card mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800">SustainABite</h2>
      <div className="mt-4 ml-8">
        <p>Sustainabite is a platform enabling restaurants to donate unserved end-of-day meals to local non-profits like food banks and shelters, notifying them through an update system for pickup within an hour of confirmation.</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">React Native</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">TypeScript</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Node.js</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Express.js</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Google Cloud</span>
        </div>
        
        <a href="https://github.com/SarahAsad23/SustainaBite"><img src="images/sustainabite.png" className="mt-4 object-contain h-36 sm:h-48 w-full" alt="SustainABite project" /></a>
      </div>
    </div>

    {/* Movie Match Project */}
    <div className="project-card mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800">Movie Match</h2>
      <div className="mt-4 ml-8">
        <p>Movie Match is a platform that suggests movies tailored to your preferences and keeps a record of the films you have already seen to avoid repeating recommendations. It aims to enhance your movie-watching experience by constantly adapting to your evolving tastes.</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Flask</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Jinja</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Python</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">HTML</span>
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">CSS</span>
        </div>
        <a href = "https://github.com/saharmaisha/moviematch"><img src="images/moviematch.png" className="mt-4 object-contain h-36 sm:h-48 w-full" alt="Movie match project" /></a>
      </div>
    </div>

    {/* Google Connection Mode Project */}
    <div className="project-card mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800">Google Connection Mode</h2>
      <div className="mt-4 ml-8">
        <p>Connection Mode is an extension of Google Maps enabling users to discover and interact with local businesses and restaurants through promotional activities, loyalty programs, and collaborative events like scavenger hunts.</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">Figma</span>
        </div>
        <a href = "https://www.figma.com/file/vb6OmP9aMby0I8A8hTqQu9/Team-Sushi?type=design&node-id=208-50&mode=design&t=jJn7DRqb9GKiiNMH-0"><img src="images/connectionmode.png" className="mt-4 object-contain h-36 sm:h-48 w-full" alt="Connection Mode project" /></a>
      </div>
    </div>

    {/* Voting Made Easy Project */}
    <div className="project-card mb-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800">Voting Made Easy</h2>
      <div className="mt-4 ml-8">
        <p>Voting Made Easy walks viewers through the importance of voting, teaches more about the backgrounds behind each presidential and vice-presidential candidate, and lists ways in which people can vote during COVID-19. </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">HTML</span>
            <span className="badge bg-green-100 text-green-800 rounded-full px-3 py-1">CSS</span>
        </div>
        <a href = "https://github.com/saharmaisha/votingmadeeasy.github.io"><img src="images/voting.png" className="mt-4 object-contain h-36 sm:h-48 w-full" alt="Voting Made Easy project" /></a>
      </div>
    </div>

  </div>
</div>

      
    );
}