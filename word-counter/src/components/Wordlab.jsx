import React, { useState } from 'react'

const Wordlab = () => {
    const [text,setText] = useState('')

    // const Ucfunction = ()=>{
    //   let newUpperText=text.toUpperCase();
    //     setText(newUpperText)
    //     console.log("helllo");
    // }
    const toProperCase = (text) => {
        return text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
    }


    const handleOnChange = (e) => {
        setText(e.target.value)
        console.log("fj");
    }
  return (
    <div className='container'>

        <div className="words">
            <h1>{text.split(" ").length-1} Words and {text.length} Characters</h1>
        </div>

        <textarea cols="70" rows="12" value={text} onChange={handleOnChange} placeholder="Enter Your Text here"></textarea>

        <div className="secondaryBtn ">

            <button className='btn2' onClick={()=>{let newUpperText = text.toUpperCase(); setText(newUpperText)}}>Convert to Upeercase</button>

            <button className='btn2' onClick={()=>{let newLowerText=text.toLowerCase(); setText(newLowerText)}}>Convert to Lower Case</button>
            
            <button className='btn2' onClick={()=>{let newtitleText=toProperCase(text);setText(newtitleText)}}>Convert to Title Case</button>

            <button className='btn2'  >Preview</button>
            
            <button className='btn2' onClick={()=>{setText('')}}>Clear</button>

        </div>
        
       {/* <p>{text}</p> */}

    </div>
  )
}

export default Wordlab
