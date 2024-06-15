import GradesControls from "./GradesControls";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineFunnel } from "react-icons/hi2";
import { users, grades, enrollments, assignments } from "../../Database";
import "../../styles.css";
import { useParams } from "react-router";

export default function Grades() {
  const { cid } = useParams();

  // retrieve the specific course enrollments and assignments
  const courseEnrollments = enrollments.filter(enrollment => enrollment.course === cid);
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  // get enrolled student ids
  const studentIds = courseEnrollments.map(enrollment => enrollment.user);
  const students = users.filter(user => studentIds.includes(user._id));

  // get course grades filtered by enrolled students and course assignments
  const courseGrades = grades.filter(grade =>
    studentIds.includes(grade.student) && courseAssignments.map(a => a._id).includes(grade.assignment)
  );

  // map grades by student
  const gradesByStudent = students.map(user => {
    const studentGrades = courseGrades.filter(grade => grade.student === user._id)
      .map(grade => ({
        assignmentId: grade.assignment,
        grade: grade.grade
      }));

    return {
      studentId: user._id,
      fullName: `${user.firstName} ${user.lastName}`,
      grades: studentGrades
    };
  });


  return (
    <div className="container mt-3">
      <div className="grades-controls">
        <GradesControls/>
      </div>
      <br /><br /><br />
      <form>
        <div className="row">
          <div className="col-12 col-sm-6">
            <label htmlFor="assignmentName" className="col-form-label">Student Names</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <IoIosSearch />
              </span>
              <select className="form-select border-start-0" id="studentSelect">
                <option value="" disabled selected hidden>Search Students</option>
                {courseEnrollments.map(enrollment => {
                  const user = users.find(user => user._id === enrollment.user);
                  const studentName = user ? `${user.firstName} ${user.lastName}` : 'Unknown User';
                  return (
                    <option key={enrollment.user} value={enrollment.user}>
                      {studentName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mb-3 col">
            <label htmlFor="assignmentName" className="col-form-label">Assignment Names</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <IoIosSearch />
              </span>
              <select className="form-select border-start-0" id="assignmentSelect">
                <option value="" disabled selected hidden>Search Assignments</option>
                {assignments.filter(assignment => assignment.course === cid
                ).map(assignment => (
                  <option key={assignment._id} value={assignment.course}>
                    {assignment.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div id="wd-filter-btn" className="text-nowrap">
          <button id="wd-import-btn" className="btn btn- btn-secondary me-1">
            <HiOutlineFunnel className="position-relative me-2" style={{ bottom: "1px" }} />
              Apply Filters
          </button> 
        </div>
        <div>
        </div>
      </form>
      <div className="mt-4">
        <table className="table">
          <thead>
            <tr className=" table-secondary text-center">
              <th className="text-left">Student Name</th>
              {assignments.filter(assignment => assignment.course === cid).map(assignment => (
                <th key={assignment._id}>{assignment.title}<br/>Out of 100</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {gradesByStudent.map((student, index) => (
              <tr key={index}>
                <td className="text-danger text-start">{student.fullName}</td>
                {courseAssignments.map((assignment, index) => {
                  const grade = student.grades.find(g => g.assignmentId === assignment._id);
                  return (
                    <td key={index}>{grade ? `${grade.grade}%` : "N/A"}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
