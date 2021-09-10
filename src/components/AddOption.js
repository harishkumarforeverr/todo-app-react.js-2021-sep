import React from 'react';

export default class AddOption extends React.Component {
    state={
        error:undefined
    } 
    formOnSubmit=(e)=>{
     e.preventDefault(); 
     const option=e.target.elements.option.value.trim(); 
     const error = this.props.handleAddOption(option);
     if(!error){ 
        e.target.elements.option.value="";
     }
     this.setState(()=> ({ error }))
    }
    render (){
        return (
            <div> 
            {this.state.error && <p> {this.state.error}</p>} 
            <form onSubmit={this.formOnSubmit}>
             <input type="text" name="option" /> 
             <button>Add Option </button>   
            </form>
            </div> 
        )
    }
}
