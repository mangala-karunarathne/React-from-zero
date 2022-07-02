import React, { useState } from "react";
import "../../Assets/styles.css"

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input className="myInput" placeholder="enter something..." onChange={onChange} />
     
     <div>
      Hello  {inputValue}
     </div>
      
    </div>
  );
};

export default StateTutorial;
