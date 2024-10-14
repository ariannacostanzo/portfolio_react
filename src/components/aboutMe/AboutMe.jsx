import './aboutMe.scss';
import aboutMeImage from '../../assets/images/foto_curriculum.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
     return (
       <>
         <section id="about-me">
           <div className="container mx-auto my-10 flex justify-center">
             <div>
               <div className="mb-2 md:mr-5 flex justify-center items-center md:float-left">
                 <img
                   src={aboutMeImage}
                   alt="about me"
                   id="aboutme-img"
                   className="w-52"
                 />
               </div>
               <div className="info-about-me max-w-xl text-center md:text-start">
                 <h3 className="color-green">
                   Junior Full Stack Web Developer
                 </h3>
                 <p>
                   {" "}
                   Durante la mia esperienza formativa all&apos;estero, ho
                   iniziato a studiare programmazione spinta dalla mia curiosità
                   iniziale nel settore della programmazione dei videogiochi,
                   scoprendo in seguito una vera passione per lo{" "}
                   <span className="color-purple">sviluppo web</span>. La
                   soddisfazione nel creare e dare vita a progetti attraverso il
                   processo di sviluppo ha risvegliato in me una chiara
                   consapevolezza della direzione che desideravo prendere nel
                   mio percorso professionale. Ho completato il corso da full
                   Stack Web Developer di{" "}
                   <span className="color-purple">Boolean</span> e sono stata
                   selezionata per il corso di{" "}
                   <span className="color-purple">Experis su Java</span>. Ora,
                   con entusiasmo e dedizione, sono pronta a mettere in pratica
                   le mie competenze, affrontare nuove sfide e crescere in un
                   ambiente lavorativo dinamico.
                 </p>
                 <div className="flex items-center justify-between py-5">
                   <div className="icons-container pr-5">
                     <a
                       href="https://www.linkedin.com/in/arianna-costanzo-6267a0233/"
                       target="_blank"
                     >
                       <FontAwesomeIcon
                         icon={faLinkedin}
                         className="color-purple icon "
                       />
                     </a>
                     <a
                       href="https://github.com/ariannacostanzo"
                       target="_blank"
                     >
                       <FontAwesomeIcon
                         icon={faSquareGithub}
                         className="color-purple icon "
                       />
                     </a>
                   </div>
                   <div className="buttons-container flex flex-col md:flex-row gap-4">
                     <a
                       href="mailto:costanzo.arianna@outlook.it"
                       className="text-center"
                     >
                       Contattami
                       <FontAwesomeIcon icon={faIdCardClip} className="ml-2" />
                     </a>
                     <a className="text-center">
                       <button>
                         Scarica CV
                         {/* da fare  */}
                         <FontAwesomeIcon icon={faDownload} className="ml-2" />
                       </button>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </>
     );
}
export default AboutMe;