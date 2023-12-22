import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

export default function Experience() {
    const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true); // Trigger the animation when the component mounts
  }, []);
   return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">EXPERIENCE</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center text-green-800">
            <span className="mr-2">
            <FontAwesomeIcon icon={faAmazon} />
            </span>{"  "}
            Amazon
        </h2>
        <p className="text-lg text-gray-600">Software Engineer Intern</p>
        <div className="ml-8 mt-2">
          <p>Increased coverage by 11% for advertising keyword recommendations by developing a big data processing pipeline for substitute keyword ASINs, using Python, PySpark, AWS, CloudFormation, CDK and TypeScript.</p>
          <p>Reduced compute cost by 66% by refactoring an ETL job that now consolidates multiple region tasks into one job using Scala, EMR and S3.</p>
          <p>Developed a scoring algorithm to source new and relevant keywords to existing ASINS by ingesting product substitutes and applying data transformations using PySpark and SageMaker. </p>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center text-green-800">
            <span className="mr-2">
            <FontAwesomeIcon icon={faGoogle} />
            </span>{"  "}
            Tech:NYC (Hosted by Google)
        </h2>
        <p className="text-lg text-gray-600">Design Sprint Intern</p>
        <div className="ml-8 mt-2">
          <p>Designed a Google Connections Product that leverages existing Google technologies such as Google Maps, Google Places and Google Pay in order to connect people within a community using Figma.</p>
          <p>Created different critical user journeys in order to identify pain points for our various user types. </p>
          <p>Presented use case and product design for Google’s Engineering Panel, winning 1st place for the Summer 2022 Tech:NYC Product competition.</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center text-green-800">
            <span className="mr-2">
                <FontAwesomeIcon icon={faLightbulb}/>
            </span>{"  "}
            Consolidated Edison
        </h2>
        <p className="text-lg text-gray-600">Geographic Information System Intern</p>
        <div className="ml-8 mt-2">
          <p>Improved usability of raw GIS data by cleaning incorrect rows from a CSV using Python.</p>
          <p>Increased developer productivity by QA testing a 30 year old refactored GIS system by finding bugs and improving workflows.</p>
          <p>Delivered a final presentation to Con Ed executives, mentors, and representatives of the BTHS Alumni Foundation. </p>
        </div>
      </div>
    </div>
    
  );
}
