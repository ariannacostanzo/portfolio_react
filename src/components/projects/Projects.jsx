import "./projects.scss";
import projects from "../../database/projects/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss";
import { useEffect, useState } from "react";
import { faCircleXmark, faEye } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";
const Projects = () => {
  //states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImagesArray, setCurrentImagesArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState(true);

  //funzioni

  //apro la modale
  const openModal = (index, array) => {
    if (!isMediumScreen) return;
    setIsModalOpen(true);
    setCurrentImagesArray(array);
    setCurrentIndex(index);
  };

  //chiudo la modale
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImagesArray([]);
    setCurrentIndex(0);
  };

  //tengo conto di quando lo schermo di dimensioni medie
  const handleResize = () => {
    setIsMediumScreen(window.innerWidth >= 768);
  };

  //carosello sul click delle immagini
  const moveCarousel = (side) => {
    if (side === "right") {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % currentImagesArray.length
      );
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + currentImagesArray.length) %
          currentImagesArray.length
      );
    }
  };

  //recuperare il nome della cartella
  const fixedPath = () => {
    const currentImage = currentImagesArray[currentIndex]?.path;
    const folder =
      currentImage.replace(/\s*\(.*\)/, "").replace(".png", "") + "";
    return folder;
  };

  //recuperare il percorso dell'immagine attualmente nel carosello
  const currentImageUrl = `${currentImagesArray[currentIndex]?.path}`;

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* modale  */}
      {isModalOpen && (
        <div className="img-modal">
          <span className="close-btn color-purple" onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          <figure>
            <span
              className="arrows left color-purple"
              onClick={() => moveCarousel("left")}
            >
              <FontAwesomeIcon icon={faCircleLeft} />
            </span>
            <img
              src={`/projects/${fixedPath()}/${currentImageUrl}`}
              alt="img"
            />
            <span
              className="arrows right color-purple"
              onClick={() => moveCarousel("right")}
            >
              <FontAwesomeIcon icon={faCircleRight} />
            </span>
          </figure>
        </div>
      )}
      {/*  fine modale  */}

      {/* project card  */}
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-8 flex-wrap projects-list">
          {projects.map((project, i) => (
            <div
              key={`project${i}`}
              className="project-card w-full md:w-4/5 lg:w-3/5 relative "
              id={project.image_key}
            >
              {/* carosello  */}
              <figure className="project-image relative">
                <div className="box">
                  <Carousel
                    useKeyboardArrows={true}
                    statusFormatter={(currentItem, total) => {
                      return (
                        <>
                          {currentItem} di {total}
                        </>
                      );
                    }}
                  >
                    {project.images.map((image, index) => (
                      <div
                        onClick={() => openModal(index, project.images)}
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
              {/* project card info  */}
              <div className="project-info">
                <h3 className="color-green">{project.name}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>

                {/* tecnologie */}
                <div className="tech-container">
                  <h4 className="color-purple">Tecnologie utilizzate:</h4>
                  <ul>
                    {project.techs.map((tech, i) => (
                      <li key={`project${project.name}tech${i}`}>{tech}</li>
                    ))}
                  </ul>
                </div>
                {/* link a github  */}
                <div className="flex justify-end items-center mt-5">
                  {project.webLink && (
                    <a href={project.webLink} target="_blank" className="mr-2">
                      <Button
                        icon={faEye}
                        text="Visita Sito"
                      ></Button>
                    </a>
                  )}
                  <a href={project.link} target="_blank">
                    <Button
                      icon={faSquareGithub}
                      text="Vedi su Github"
                    ></Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
