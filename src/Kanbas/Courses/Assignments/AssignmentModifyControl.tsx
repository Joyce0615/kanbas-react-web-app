import { FaTrash } from "react-icons/fa"; 

export default function AssignmentModifyControl(
  { assignmentId,
    deleteAssignment,
  }:{
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
  }) {
  return ( 
    <div className="float-end ms-auto"> 
      <FaTrash className="text-danger me-3" onClick={() => deleteAssignment(assignmentId)}/>
    </div> 
  );
}