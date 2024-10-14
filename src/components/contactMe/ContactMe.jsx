import './contactme.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
     return (
       <>
         <section id="contactme-section">
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
             Iframe
             {/* <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101303.19542571901!2d14.995117417087291!3d37.49081874567513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2dd761525b5%3A0x58fe876151c83cf0!2sCatania%20CT!5e0!3m2!1sit!2sit!4v1720219451525!5m2!1sit!2sit"
             style="border:0;"
             allowfullscreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe> */}
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