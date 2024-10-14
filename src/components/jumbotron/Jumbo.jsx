import './jumbo.scss'
// da fare la logica 

const Jumbo = () => {
     return (
       <>
         <section id="jumbo">
           <div className="writing-text container mx-auto my-10 flex justify-start gap-10">
             <div>
               Ciao, sono <span className="color-green">Arianna Costanzo</span> e
               <h1>
                 sono una <span className="color-purple">Web Developer</span>
               </h1>
             </div>
           </div>
         </section>
       </>
     );
}
export default Jumbo;