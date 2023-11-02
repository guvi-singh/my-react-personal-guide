import React, { useState } from "react";

function UseStateExample() {
  //step 1 -> create a variable , data , state -> one and the same thing just different With different words
  //now , if we want to change otr manipulate the variable then simple use useState to do that
  //use state is a hook
  // we give two arguments name , and method which will change the name

  const [color, setColour] = useState("Redd");
  const [arrColor, setArrColor] = useState(["Red", "Green"]);
  return (
    <div>
      <p>{color}</p>
      <p>{arrColor}</p>

      {/* on click of below button , color state will change */}
      <button
        onClick={() => {
          setColour("Green");
        }}>
        make it green
      </button>
    </div>
  );
}

export default UseStateExample;
