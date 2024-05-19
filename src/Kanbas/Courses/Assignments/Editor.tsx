export default function AssignmentsEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br /><br />
      <textarea id="wd-description" style={{ width: '350px', height: '140px' }} >
      The assignment is available online Submit a link to the landing 
      page of your web application running on Netlify. The landing page 
      should include the following: Your full name and section links to 
      the Kanbas application links to all relevant source code repositories. 
      The Kanbas application should include a link to navigate back to the landing page.
      </textarea> 
      <br /><br />
      <table border={0} width="100%">
        <tbody>
          <tr>
            <td align='right'>
              <label htmlFor="wd-points" style={{ marginRight: '5px'}}>Points</label>
            </td>
            <td>
              <input id="wd-points" type="Number" value="100" />
            </td>
          </tr>
          <br />
          <tr>
            <td align='right' >
              <label htmlFor="wd-group" style={{ marginRight: '5px'}}>Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align='right'>
              <label htmlFor="wd-display-grade-as" style={{ marginRight: '5px'}}>Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type" style={{ marginRight: '5px'}}>Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td> {/*Empty cell*/}
            <td>
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="check-online-options" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-online-options" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" name="check-online-options" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" name="check-online-options" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="check-online-options" id="wd-file-uploads" />
              <label htmlFor="wd-file-uploads">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to" style={{ marginRight: '5px'}}>Assign</label>
            </td>
            <td>
              <label id="wd-assign-to">Assign to</label>
              <br />
              <input id='wd-name'
                value="Everyone"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td></td> {/*Empty cell*/}
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                type="date"
                id="wd-due-date"
                value="2024-05-13"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td></td> {/*Empty cell*/}
            <td>
              <label htmlFor="wd-available-from" style={{ marginRight: '35px'}}>Available from</label>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input style={{ marginRight: '5px'}}
                type="date"
                id="wd-available-from"
                value="2024-05-06"
              />
              <input
                type="date"
                id="wd-available-until"
                value="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div style={{ textAlign: 'right' }}>
        <button style={{ marginRight: '5px'}}
          id="wd-cancel"
          onClick={() => alert("Cancel successfully")}
          type="button"
        >
          Cancel
        </button>
        <button
          id="wd-save"
          onClick={() => alert("Save successfully")}
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
}