import React from "react";

const ColorBlock = ({r,g,b}) => {
 return (
    <div style={{width: '1000px', height: '130px', backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
    ColorBlock
    </div>
  )
};

export default ColorBlock;
