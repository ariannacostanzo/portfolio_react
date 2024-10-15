/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, text }) => {
  return (
    <>
      <button className="group flex justify-center p-2 text-2xl rounded-md drop-shadow-xl bg-[#ec4899] from-gray-800 to-black text-black font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
        <FontAwesomeIcon icon={icon} className="icon " />
        <span className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-100 group-hover:text-sm group-hover:-translate-y-8 duration-700">
          {text}
        </span>
      </button>
    </>
  );
};
export default Icon;
