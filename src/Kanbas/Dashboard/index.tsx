import { Link } from "react-router-dom";
import * as db from "../Database";
import "../styles.css";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">&nbsp;&nbsp;Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
          <div className="wd-dashboard-course col" style={{width:"280px"}} >
            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
              <div className="card rounded-3 overflow-hidden">
                <img src={course.image} className="card-image"/>
                <div className="card-body">
                  <span className="wd-dashboard-course-link">
                    {course.name}
                  </span>
                  <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                    {course.description}
                  </p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                </div>
              </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}