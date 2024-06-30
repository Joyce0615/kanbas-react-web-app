import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import TasksControlButtons from "./TasksControlButtons";
import { FaSortDown } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { FaPencil } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentModifyControl from "./AssignmentModifyControl";
import { useParams, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentReducer";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const assignments = useSelector((state: any) =>
    state.assignmentReducer.assignments.filter((assign: any) => assign.course === cid)
  );

  console.log(assignments);
  return (
    <div id="wd-assignments">
      <AssignmentControls 
        addAssignment={() => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
      }}/><br /><br />
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
              <TasksControlButtons/>
            </div>
          </div>
          <ul className="wd-assignments list-group rounded-0" style={{borderLeftWidth: "thick", borderLeftColor: "green", borderLeftStyle: "solid" }}>
            {assignments.map((assign: any) => (
            <li key={assign._id} className="wd-assignment list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" />
                <VscBook className="fs-4" style={{ marginTop: "5px" }} />
              </div>
              <div>
              </div>
              <div style={{ marginLeft: '10px'}}
                className="wd-task-link" onClick={() => navigate(`/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`)}>
                {assign.title}
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
                <AssignmentModifyControl 
                  assignmentId={assign._id}
                  deleteAssignment={(assignmentId) => {
                    dispatch(deleteAssignment(assignmentId));
                  }}/>
                <FaPencil className="text-primary me-3" onClick={() => navigate(`/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`)}/>
              </div>
            </li>
            ))}
          </ul>  
        </li>
      </ul>
    </div>
  );
}


