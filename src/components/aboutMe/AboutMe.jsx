import "./aboutMe.scss";
import aboutMeImage from "../../assets/images/foto_curriculum.jpg";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../button/Button";
import Icon from "../icon/Icon";

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
              <h3 className="color-green">Junior Full Stack Web Developer</h3>
              <p>
                {" "}
                Durante la mia esperienza formativa all&apos;estero, ho iniziato
                a studiare programmazione spinta dalla mia curiosità iniziale
                nel settore della programmazione dei videogiochi, scoprendo in
                seguito una vera passione per lo{" "}
                <span className="color-purple">sviluppo web</span>. Ho dedicato
                molti mesi allo studio da autodidatta di
                <span className="color-purple"> Python</span> ,{" "}
                <span className="color-purple">HTML </span>,{" "}
                <span className="color-purple">CSS</span> e{" "}
                <span className="color-purple">JavaScript</span>, gettando
                solide basi per la mia carriera. Successivamente, ho completato
                il corso da full Stack Web Developer di{" "}
                <span className="color-purple">Boolean</span> e sono stata
                selezionata per il corso di{" "}
                <span className="color-purple">Experis su Java</span>.
                Parallelamente alla mia formazione ufficiale, ho intrapreso lo
                studio autonomo di tecnologie come{" "}
                <span className="color-purple">Node.js</span>,{" "}
                <span className="color-purple">Prisma</span> ,{" "}
                <span className="color-purple">Express</span> e{" "}
                <span className="color-purple">React</span> , ampliando
                ulteriormente le mie competenze e arricchendo il mio percorso
                come sviluppatrice full-stack. Ora, con entusiasmo e dedizione,
                sono pronta a mettere in pratica le mie competenze, affrontare
                nuove sfide e crescere in un ambiente lavorativo dinamico.
              </p>
              <div className="flex items-center justify-between py-5">
                {/* icone  */}
                <div className="flex justify-center items-center icons-container">
                  <a
                    href="https://www.linkedin.com/in/arianna-costanzo-6267a0233/"
                    target="_blank"
                  >
                    <Icon icon={faLinkedin} text={"Linkedin"}></Icon>
                  </a>
                  <a href="https://github.com/ariannacostanzo" target="_blank">
                    <Icon icon={faSquareGithub} text={"Github"}></Icon>
                  </a>
                </div>

                <div className="buttons-container flex flex-col md:flex-row gap-4">
                  {/* contact button  */}
                  <a href="mailto:costanzo.arianna@outlook.it">
                    <Button icon={faIdCardClip} text="Contattami"></Button>
                  </a>
                  {/* download cv button  */}
                  <a href="/cv_Arianna_Costanzo.pdf" download>
                    <Button icon={faDownload} text="Scarica CV"></Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutMe;
