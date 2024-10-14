/* eslint-disable react/prop-types */
import './divisor.scss';

const Divisor = ({sectionName, idName}) => {
     return (
       <>
         <div className="divisor" id={idName}>
           <span>{ sectionName }</span>
         </div>
       </>
     );
}
export default Divisor;