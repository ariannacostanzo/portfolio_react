import './projects.scss';
import projects from '../../database/projects/projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss'
import { useState } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentImageUrl, setCurrentImageUrl] = useState(null);

const openModal = (img) => {
  setIsModalOpen(true);
  setCurrentImageUrl(img)
    
}

     return (
       <>
         {isModalOpen && (
           <div className="img-modal" onClick={() => setIsModalOpen(false)}>
             <span className="close-btn color-purple">
               <FontAwesomeIcon icon={faX} />
             </span>
             <figure>
               <img src={currentImageUrl} alt="img" />
             </figure>
           </div>
         )}

         <div className="container mx-auto">
           <ul className="flex items-center justify-center gap-8 flex-wrap projects-list">
             {projects.map((project, i) => (
               <li
                 key={`project${i}`}
                 className="project-card w-full md:w-4/5 lg:w-3/5"
               >
                 <figure className="project-image relative">
                   <div className="box">
                     <Carousel
                       useKeyboardArrows={true}
                       statusFormatter={(currentItem, total) => {
                         return (
                           <p>
                             {currentItem} di {total}
                           </p>
                         );
                       }}
                     >
                       {project.images.map((image, index) => (
                         <div
                           onClick={() =>
                             openModal(
                               `/projects/${project.image_key}/${image.path}`
                             )
                           }
                           key={`project${project.name}-image${index}`}
                           className="slide"
                         >
                           <img
                             alt={project.name}
                             src={`/projects/${project.image_key}/${image.path}`}
                           />
                         </div>
                       ))}
                     </Carousel>
                   </div>
                 </figure>
                 <div className="project-info">
                   <h3 className="color-green">{project.name}</h3>
                   <p
                     dangerouslySetInnerHTML={{ __html: project.description }}
                   ></p>
                   <div className="flex justify-center items-center">
                     <a href={project.link} target="_blank">
                       Github
                       <FontAwesomeIcon
                         icon={faSquareGithub}
                         className="ml-2"
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