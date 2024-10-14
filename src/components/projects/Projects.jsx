import './projects.scss';
import projects from '../../database/projects/projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
const Projects = () => {



     return (
       <>
         <div className="container mx-auto">
           <ul className="flex items-center justify-center gap-8 flex-wrap projects-list">
             {projects.map((project, i) => (
               <li
                 key={`project${i}`}
                 className="project-card w-full md:w-4/5 lg:w-3/5"
               >
                 <figure className="project-image">
                   <img src={project.image_key} alt={project.name} />
                 </figure>
                 <div className="project-info">
                   <h3 className="color-green">{project.name}</h3>
                   <p
                     dangerouslySetInnerHTML={{ __html: project.description }}
                   ></p>
                   <div className="flex justify-center items-center">
                     <a href={project.link} target='_blank'>
                       Github{" "}
                       <FontAwesomeIcon
                         icon={faSquareGithub}
                       />
                     </a>
                   </div>
                 </div>
               </li>
             ))}
           </ul>
         </div>
       </>
     );
}
export default Projects;