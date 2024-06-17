import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import TasksControlButtons from "./TasksControlButtons";
import { FaSortDown } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import { assignments } from '../../Database';  


export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter((a) => a.course === cid);
  
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaSortDown className="mb-2" />
            ASSIGNMENTS
            <div className="ms-auto">
              <button className="btn btn-outline-secondary rounded-pill text-black me-2">
                40% of Total
              </button>
              <TasksControlButtons />
            </div>
          </div>
          <ul className="wd-assignments list-group rounded-0" style={{borderLeftWidth: "thick", borderLeftColor: "green", borderLeftStyle: "solid" }}>
            {courseAssignments.map((assign) => (
            <li key={assign._id} className="wd-assignment list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" />
                <VscBook className="fs-4" style={{ marginTop: "5px" }} />
              </div>
              <div style={{ marginLeft: '10px'}}>
                <Link className="wd-task-link" to={`/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`}>
                  {assign.title}
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span>
                <span> | </span>
                <strong>Not available until</strong>
                <span> {assign.availableFrom} | </span>
                <strong>Due</strong>
                <span> {assign.dueDate}| 100 pts</span>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <LessonControlButtons />
              </div>
            </li>
            ))}
          </ul>  
        </li>
      </ul>
    </div>
  );
}


