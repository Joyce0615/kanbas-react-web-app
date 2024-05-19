export default function Modules() {
  return (
    <div>
      <div className="wd-module-sidebar">
      <button id="wd-Collapse-All" style={{ marginRight: '5px' }}>Collapse All</button>
      <button id="wd-View-Progress" style={{ marginRight: '5px' }}>View Progress</button>
      <select id="wd-select-public" style={{ marginRight: '5px' }}>
        <option value="PublicSelectedA">Public All</option>
      </select>
      <button id="wd-add-module">+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1 - Course Introduction, Syllabus, Agenda, Web, HTML, Assignment1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Cresting an HTTP server with Node.js</li>
                <li className="wd-content-item">Cresting a React App</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
              <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Heading and Paragraphs</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li className="wd-module">
          <div className="wd-title">Week 3 - Styling User Interfaces with CSS, Assignment 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduce to CSS</li>
                <li className="wd-content-item">Selector by tag ID, clases, and document structure</li>
                <li className="wd-content-item">Styling color and background color</li>
                <li className="wd-content-item">Styling dimensions and positions</li>
              </ul>
              <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets</li>
                </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Cascading Style Sheet</li>
                <li className="wd-content-item">Styling with color</li>
                <li className="wd-content-item">The Box Model</li>
                <li className="wd-content-item">Size and Position</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li className="wd-module">
          <div className="wd-title">Week 4 - Implement Responsive User Interface</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Libriries: Bootstrap, Tailwind</li>
                <li className="wd-content-item">Float and grid systems</li>
                <li className="wd-content-item">Media queries and respinsive design</li>
                <li className="wd-content-item">Laying out content with Flex</li>
              </ul>
              <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 4 - Styling Web Pages With The Bootstrap CSS Library</li>
                </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Bootstrap</li>
                <li className="wd-content-item">Grid System</li>
                <li className="wd-content-item">Bootstrap Navigation</li>
                <li className="wd-content-item">Showing and Hiding Content with Bootstrap</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li className="wd-module">
          <div className="wd-title">Week 5 - Programming User Interfaces with Javascript, Assignment 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">JavaScript Modules, Exports and Imports</li>
                <li className="wd-content-item">Iterating over arrays, DEMO: in Loop.js render color arrays with matching bg color</li>
                <li className="wd-content-item">Deconstructors. DEMO: in Deconstructor.js demo object and array deconstructor</li>
              </ul>
              <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 5 - Creating Single Page Application With React.js</li>
                </ul>
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScriptt</li>
                <li className="wd-content-item">ES6 Variables and Functions</li>
                <li className="wd-content-item">ES6 Arrays and Strings</li>
                <li className="wd-content-item">ES6 All Slides</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
  