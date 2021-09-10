import React from 'react';
import Option from './Option';
const Options=(props)=>(
    <div>   
    {props.options.length==0 && <p> please add a option to get started </p>}
    { props.options.length!=0 && <button onClick={props.handleDeleteAllOptions}>Remove All </button>}
    {props.options.map((option)=>{
        return <Option 
        option={option}
         key={option}
         handleTheDeleteOption={props.handleTheDeleteOption}
          />
    })}
    </div> 
)
export default Options;