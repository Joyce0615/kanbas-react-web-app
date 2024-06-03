import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai"; 
import { FaBookBible } from "react-icons/fa6"; 
import { VscAccount } from "react-icons/vsc";

export default function ReactIconsSampler() {
  return (
    // mb-4 is margin bottom is 1.5rem
    <div id="wd-react-icons-sampler" className="mb-4">  
      <h3>React Icons Sampler</h3>
      <div className="d-flex">
        <VscAccount className="fs-3 text" />
        <AiOutlineDashboard className="fs-3 text" />
        <FaBookBible className="fs-3 text" />
        <FaCalendar className="fs-3 text" />
        <FaEnvelopeOpenText className="fs-3 text" />
        <FaRegClock className="fs-3 text" />
      </div>
    </div>
  )
}