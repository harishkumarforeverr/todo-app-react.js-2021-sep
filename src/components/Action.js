import React from 'react';

const Action=(props)=>(
    <div>
     <button
      disabled={!props.hasOptions} 
      onClick={props.pickRandomOption}
      >
       what shoud i do ? 
    </button>
    </div> 
);

export default Action;