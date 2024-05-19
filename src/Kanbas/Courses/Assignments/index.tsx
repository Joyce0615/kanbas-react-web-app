export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wdsearch-assignment" style={{ marginRight: '5px' }}
        placeholder="Search for Assignment" /> 
      <button id="wd-add-assignment-group" style={{ marginRight: '5px' }}> + Group</button>
      <button id="wd-add-assignment-group"> + Assignment</button>
      <h3 id="wd-assignment-title">
        ASSIGNMENT 40% of Total <button>+</button></h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A1">
              A1 - ENV + HTML
          </a>
          <br />
          <span>Multiple Modules | </span>
          <strong>Not available until</strong> 
          <span> May 6 at 12:00am | </span>
          <br />
          <strong>Due</strong> 
          <span> May 13 at 11:59pm | 100 pts</span>
        </li>
      </ul>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A2">
              A2 - CSS + BOOTSTRAP
          </a>
          <br />
          <span>Multiple Modules | </span>
          <strong>Not available until</strong> 
          <span> May 13 at 12:00am | </span>
          <br />
          <strong>Due</strong> 
          <span> May 20 at 11:59pm | 100 pts</span>
        </li>
      </ul>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/A3">
              A3 - JAVASCRIPT + REACT
          </a>
          <br />
          <span>Multiple Modules | </span>
          <strong>Not available until</strong> 
          <span> May 20 at 12:00am | </span>
          <br />
          <strong>Due</strong> 
          <span> May 27 at 11:59pm | 100 pts</span>
        </li>
      </ul>
    </div>
  );
}