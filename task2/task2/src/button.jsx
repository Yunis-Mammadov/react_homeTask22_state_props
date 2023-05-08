import React, { useState } from 'react'

const HideShow = () => {
    let [isHidden,setIsHidden] = useState()
    function changeButton(){
        setIsHidden(!isHidden);
    }
  return (
    <div>
      <button onClick={changeButton}>{isHidden ? "Show" : "Hide"}</button>
      {!isHidden && <span>This is my private domicile</span>}
    </div>
  )
}

export default HideShow;
