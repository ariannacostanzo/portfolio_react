/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './button.scss';

const Button = ({icon, text}) => {
     return (
       <>
         <button className="slide-btn">
           <span className="icon-container">
             <FontAwesomeIcon icon={icon} />
           </span>
           <p className="slide-btn-text">{text}</p>
         </button>
       </>
     );
}
export default Button;