import React from 'react';
import ReactModal from 'react-modal';


const OptionModel =(props)=> (
    <ReactModal
        isOpen={ !!props.react_model_text } 
        ariaHideApp={ false } 
        shouldCloseOnEsc={ true }
        onRequestClose={ props.handleTheReactModelClear} 
        contentLabel={  "Example Modal" }  
        preventScroll={  false }     
        >
      {props.react_model_text && <p> {props.react_model_text} </p>}
      <button onClick={props.handleTheReactModelClear}>Okay </button>
    </ReactModal>
)
export default OptionModel;
