import { FaTrash } from "react-icons/fa"; 
import AssignmentAlert from "./AssignmentAlert";

export default function AssignmentModifyControl(
  { assignmentId,
    deleteAssignment
  }:{
    assignmentId: string,
    deleteAssignment: (assignmentId:string) => void;
  }) {
  return ( 
    <div className="float-end ms-auto"> 
      <FaTrash className="text-danger me-3"
      data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog"
       />
      <AssignmentAlert 
        dialogTitle="Attention"
        deleteAssignment={() => deleteAssignment(assignmentId)}
      />
    </div> 
  );
}
