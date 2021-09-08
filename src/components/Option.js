import React from 'react';
const Option=(props)=>{
    return (
        <div>  
         <p> {props.option}  <button onClick={()=>{
             props.handleTheDeleteOption(props.option)
         }}> remove </button> </p>

        </div>
    )
}
 
export default Option;