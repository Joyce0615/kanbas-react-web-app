import { Link } from "react-router-dom";
import "../styles.css";

export default function Dashboard({
  courses, 
  course, 
  setCourse, 
  addNewCourse,
  deleteCourse, 
  updateCourse 
}: {
  courses: any[]; 
  course: any; 
  setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; 
}) {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5> New Course
        <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-warning float-end me-2"
                id="wd-update-course-click"
                onClick={updateCourse}>
          Update
        </button>
      </h5><hr/>
      <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({...course, name: e.target.value})}/>
      <textarea value={course.description} className="form-control"
             onChange={(e) => setCourse({...course, description: e.target.value})}/><hr/>
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
                  <p className="wd-dashboard-course-title card-text">
                    {course.description}
                  </p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  <button id="wd-delete-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end" >
                      Delete
                  </button>
                  <button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }} className="btn btn-warning float-end me-2">
                    Edit
                  </button>
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

  //Use state to pass data not redux
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState<any> ({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/aerodynamics.png", description: "New Description"
  // }); //course is for only new course
  // const addNewCourse = () => {
  //   const newCourse = { ...course,
  //   _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  //   }; 
  //   //Assigns a unique ID to the new course using the current 
  //   //timestamp converted to a string.

  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };