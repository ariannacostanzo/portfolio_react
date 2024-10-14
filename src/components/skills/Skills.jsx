import './skills.scss';
import skills from '../../database/skills/skills.js';

const Skills = () => {
     return (
       <>
         <ul className="container mx-auto flex items-center justify-center gap-5 flex-wrap text-center">
           {skills.map((skill, i) => (
             <li key={`skill${i}`} className="skill-card">
               <h3>{skill.name}</h3>
               <figure className="flex items-center justify-center">
                 <img
                   src={`/${skill.image_path}`}
                   alt={skill.name}
                   className="skill-img"
                 />
               </figure>
             </li>
           ))}
         </ul>
       </>
     );
}
export default Skills;