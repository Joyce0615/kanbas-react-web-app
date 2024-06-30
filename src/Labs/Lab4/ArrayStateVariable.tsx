import { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5])
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
    // random pick a whole number from 0-99, Math.random pick a float from 0-1;
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !==index));
    // if the i === index, this element cannot be deleted, 
    //because the vlaue maybe same, but the index cannot.
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variables</h2>
      <button onClick={addElement} className="btn btn-success">Add Element</button>
      <ul>
        {array.map((item, index) => (
          <ol key={index}>
            {item}
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click"
                    className="btn btn-danger"
                    style={{margin:"10px"}}>
              Delete
            </button>
          </ol>
        ))}
      </ul>
      <hr/>
    </div>
  )
}