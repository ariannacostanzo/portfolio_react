//import
import { useState } from "react";
import "./jumbo.scss";
import { useEffect } from "react";

const Jumbo = () => {
  //states
  const words = ["Sviluppatrice", "Gamer", "Creator", "JuniorDeveloper"];
  const [emptyText, setEmptyText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingInterval;
    let switchingTimeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        //se non siamo in fase deleting siamo in fase typing
        if (!isDeleting) {
          //se la siamo ancora all'interno della parola scriviamo la lettera
          if (currentLetter < words[currentIndex].length) {
            setEmptyText((prev) => prev + words[currentIndex][currentLetter]);
            setCurrentLetter((prev) => prev + 1);
          } else {
            //altrimenti significa che tutta la parola è stata scritta, cleariamo l'intervallo, facciamo una pausa e ricominciamo con fase cancellazione
            clearInterval(typingInterval);
            switchingTimeout = setTimeout(() => {
              setIsDeleting(true);
              startTyping();
            }, 1000);
          }
        } else {
          //fase cancellazione, se non ho ancora finito di cancellare la parola, rimuovo la currentletter
          if (currentLetter > 0) {
            setCurrentLetter((prev) => prev - 1);
            setEmptyText(words[currentIndex].substring(0, currentLetter - 1));
          } else {
            //se ho finito di cancellare clearo l'intervallo e ricomincio con fase scrittura
            clearInterval(typingInterval);
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % words.length);
            switchingTimeout = setTimeout(() => {
              startTyping();
            }, 500);
          }
        }
      }, 200);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(switchingTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLetter, isDeleting, currentIndex]);

  return (
    <>
      <section id="jumbo">
        <div className="writing-text container mx-auto my-10 flex justify-start gap-10">
          <div>
            Ciao, sono <span className="color-green">Arianna Costanzo</span> e
            <h1>
              sono una <span className="color-purple">{emptyText}</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Jumbo;
