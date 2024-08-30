import React, { createContext, useState } from "react";

export const contextData = createContext();

function Context(props) {
  const [name, setName] = useState("John Doe");
  const [asideWidth, setasideWidth] = useState("");

let isAsideWidthfull = true;

const handleAsideWidth=()=>{
    if(isAsideWidthfull===true){
        setasideWidth("60px")
        isAsideWidthfull=false;
    }
else{
    setasideWidth("");
    isAsideWidthfull = true;
}
}


  return (
    <contextData.Provider value={{ asideWidth, handleAsideWidth }}>
      {props.children}
    </contextData.Provider>
  );
}

export default Context;
