import { Navigate, Route, Routes } from "react-router";
import { useState} from "react";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import "./styles.css";

export default function Kanbas() {
  const initialCourseState = {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/aerodynamics.png",
    description: "New Description"
  };
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState(initialCourseState);
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    setCourse(initialCourseState);
  }; 
  //Assigns a unique ID to the new course using the current 
  //timestamp converted to a string.

  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse(initialCourseState);
  };
  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black min-height: 100vh;">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account" element={<h1>Account</h1>} />
              <Route path="/Dashboard" element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
              } />
              <Route path="Courses/:cid/*" element={
                <Courses courses={courses} />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
