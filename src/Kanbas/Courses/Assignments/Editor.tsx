import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./assignmentReducer";
import { useState } from "react";

export default function AssignmentsEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  console.log()
  const [assignment, setAssignment] = useState(
    assignments.find((assignment: any) => assignment._id === aid) || {
      title:"New Assignment",
      description: "New Assignment Description",
      dueDate: new Date().toISOString().split('T')[0],
      availableFrom: new Date().toISOString().split('T')[0],
      until: new Date().toISOString().split('T')[0],
      course:cid,
    }
  );
  
  const formatDateForInput = (dateInput: any) => {
    if (!dateInput) return '';
    const date = new Date(dateInput);
    return date.toISOString().split('T')[0];
  }
  const handleSave = (e: any) => {
    e.preventDefault();
    if (!assignment.title || !assignment.course) {
      return;
    }
    if (aid === 'new') {
      // Dispatch addAssignment with the new assignment details
      dispatch(addAssignment({ ...assignment, course: cid }));

    } else {
      // Dispatch updateAssignment with the updated assignment details
      dispatch(updateAssignment(assignment));
    }
  
    // Navigate back to the assignments list for the course
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-4">
      <form>
      <div className="mb-3 row">
          <label htmlFor="assignmentName" className="col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input className="form-control"
              type="text"
              id="assignmentName"
              value={assignment.title}
              onChange={(e) => setAssignment((a: any) => ({ ...a, title: e.target.value }))}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <textarea
            id="wd-description"
            className="form-control col-12"
            rows={5}
            style={{ resize: "none" }}
            value={assignment.description}
            onChange={(e) => setAssignment((a: any) => ({ ...a, description: e.target.value }))}
          />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-10">
            <div className="mb-3 row">
              <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
              <div className="col-sm-8">
                <input className="form-control"
                  type="number"
                  id="points"
                  placeholder="100"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label text-end">Assignment Group</label>
              <div className="col-sm-8">
                <select id="assignmentGroup" className="form-select">
                  <option selected>ASSIGNMENTS</option>
                  <option value="1">One</option> 
                  <option value="2">Two</option> 
                  <option value="3">Three</option> 
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="displayGrade" className="col-sm-4 col-form-label text-end">Display Grade as</label>
              <div className="col-sm-8">
                <select id="displayGrade" className="form-select">
                  <option selected>Percentage</option>
                  <option value="1">One</option> 
                  <option value="2">Two</option> 
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="submissionType" className="col-sm-4 col-form-label text-end">Submission Type</label>
              <div className="col-sm-8">
                <div className="p-3 border">
                <select id="submissionType" className="form-select mb-3">
                  <option selected>Online</option>
                </select>
                <div>
                  <label htmlFor="entryOption" className="col-sm-4 col-form-label mb-3"><strong>Online Entry Option</strong></label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="textEntry" />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="websiteUrl" checked />
                  <label className="form-check-label" htmlFor="websiteUrl">
                    Website URL
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="studentAnnotation" />
                  <label className="form-check-label" htmlFor="studentAnnotation">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="assignTo" className="col-sm-4 col-form-label text-end">Assign</label>
              <div className="col-sm-8">
                <div className="p-2 border">
                  <label htmlFor="assignToPeople" className="col-sm-4 col-form-label text-start">Assign to</label>
                  <input className="form-control mb-3"
                    type="text"
                    id="assignTo"
                    placeholder="Everyone"
                  />
                  <label htmlFor="dueDate" className="form-label">Due</label>
                  <input className="form-control mb-3"
                    type="date"
                    id="dueDate"
                    value={formatDateForInput(assignment.dueDate)}
                    onChange={(e) => setAssignment((a: any) => ({ ...a, dueDate: e.target.value }))}
                  />
                  <div className="row">
                    <div className="col">
                      <label htmlFor="availableFrom" className="form-label">Available from</label>
                      <input className="form-control mb-3"
                        type="date"
                        id="availableFrom"
                        value={formatDateForInput(assignment.availableFrom)}
                        onChange={(e) => setAssignment((a: any) => ({ ...a, avaliableFrom: e.target.value }))}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="until" className="form-label">Until</label>
                      <input className="form-control mb-3"
                        type="date"
                        id="until"
                        value={formatDateForInput(assignment.until)}
                        onChange={(e) => setAssignment((a: any) => ({ ...a, until: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-1" onClick={handleCancel}>
                Cancel
              </button>
              <button onClick={handleSave} className="btn btn-danger">
                Save
              </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};