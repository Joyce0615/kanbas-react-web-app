export default function TableExercise() {
  return (
    <div id="wd tables">
        <h4>Table Tags - Scores</h4>
        <table border={1} width="60%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align='center'>Q1</td>
                <td>HTML</td>
                <td>02/03/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td align='center'>Q2</td>
                <td >CSS</td>
                <td>02/10/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td align='center'>Q3</td>
                <td>JavaScript</td>
                <td>02/17/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td align='center'>Q4</td>
                <td>Typescript</td>
                <td>02/20/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td align='center'>Q5</td>
                <td>React</td>
                <td>02/23/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td align='center'>Q6</td>
                <td>Reducers</td>
                <td>02/26/21</td>
                <td>95</td>
              </tr>
              <tr>
                <td align='center'>Q7</td>
                <td>REST</td>
                <td>03/01/21</td>
                <td>100</td>
              </tr>
              <tr>
                <td align='center'>Q8</td>
                <td>Redux</td>
                <td>03/05/21</td>
                <td>80</td>
              </tr>
              <tr>
                <td align='center'>Q9</td>
                <td>MongoDB</td>
                <td>03/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td align='center'>Q10</td>
                <td>APIs</td>
                <td>03/15/21</td>
                <td>90</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td align='center' colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
        </table>
    </div>
  );
}