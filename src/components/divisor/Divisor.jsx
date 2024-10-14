/* eslint-disable react/prop-types */
import './divisor.scss';

const Divisor = ({sectionName}) => {
     return (
       <>
         <div className="divisor">
           <span>{ sectionName }</span>
         </div>
       </>
     );
}
export default Divisor;