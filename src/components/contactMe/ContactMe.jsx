import './contactme.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
     return (
       <>
         <section id="contactme-section" className='pb-10'>
           <div className="text-center mb-5">
             <h4 className="color-green my-5">Numero di telefono</h4>
             <p>(+39) 3274436674</p>
           </div>
           <div className="text-center mb-5">
             <h4 className="color-green my-5 ">Email</h4>
             <a href="mailto:costanzo.arianna@outlook.it">
               costanzo.arianna@outlook.it
             </a>
           </div>
           <div className="text-center mb-5">
             <h4 className="color-green my-5">Indirizzo</h4>
              Catania, Italia
           </div>
           <div className="text-center mb-5">
             <h4 className="color-green my-5"> Social</h4>
             <div className="icons-container">
               <a
                 href="https://www.linkedin.com/in/arianna-costanzo-6267a0233/" target="_blank">
                 <FontAwesomeIcon
                   icon={faLinkedin}
                   className="color-purple icon"/>
               </a>
               <a href="https://github.com/ariannacostanzo" target="_blank">
                 <FontAwesomeIcon
                   icon={faSquareGithub}
                   className="ml-2 color-purple icon"/>
               </a>
             </div>
           </div>
         </section>
       </>
     );
}
export default ContactMe;