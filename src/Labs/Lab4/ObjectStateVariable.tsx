import { useState} from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "peter", age: 24});
  return (
    <div>
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      {/* display raw JSON */}
      <input
        value={person.name}
        onChange={(e) => setPerson({...person, name:e.target.value})}
        //update field as user types. copy old object, override specific field with new value
      />
      <input
        value={person.age}
        onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}
      />
      <hr/>
    </div>
  )
}