import React, { useState }from 'react';
import './Search.css';
//main style file 
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
//theme css file
import { DateRangePicker } from "react-date-range";
 

//DATE PICKER COMPONENT
function Search() {
  const [starDate, setStartDate] = useState (new Date());
  const [endDate, setEndDate] = useState (new Date());
  
  const selectionRange = {
    startDate: starDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect (ranges) {
    starDate(ranges.selection.starDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]} onChange={handleSelect} />

    </div>
  )
}

export default Search