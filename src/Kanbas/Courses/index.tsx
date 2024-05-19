import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Computer Science Courses</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Modules" element={<Modules />} />
              <Route path="/Piazza" element={<h3>Piazza</h3>} />
              <Route path="/Zoom" element={<h3>Zoom Links</h3>} />
              <Route path="/Assignments" element={<Assignments />} />
              <Route path="/Assignments/:id" element={<AssignmentsEditor />} />
              <Route path="/Quizzes" element={<h3>Quizzes</h3>} />
              <Route path="/Grades" element={<h3>Grades</h3>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
