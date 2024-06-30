import { useState } from "react"; 

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date()); 
  const dateObjectToHtmlDateString = (date: Date) => 
    { return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${ //0 is Jan
      date.getMonth() + 1 //if month < 10, should be 01, 08etc
    }-${date.getDate() < 10 ? 0 : ""}${date.getDate()}`; 
  }; 
  
  return ( 
    <div id="wd-date-state-variables"> 
      <h2>Date State Variables</h2> 
      <h3>{JSON.stringify(startDate)}</h3> 
      <h3>{dateObjectToHtmlDateString(startDate)}</h3> 
      <input 
        className="form-control" 
        type="date" 
        value={dateObjectToHtmlDateString(startDate)} //convert a Date object into the YYYY-MM-DD format expected by the HTML date input ﬁeld
        onChange={(e) => setStartDate(new Date(e.target.value))}
        /> 
        <hr/> 
    </div> 
  )
}