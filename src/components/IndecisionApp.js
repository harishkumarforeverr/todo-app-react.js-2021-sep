import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component{
    constructor (props){
        super(props);
        this.state={
            options:props.options  //["thing one","thing two","thing three"]
        }
        this.handleDeleteAllOptions=this.handleDeleteAllOptions.bind(this);
        this.pickRandomOption=this.pickRandomOption.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleTheDeleteOption=this.handleTheDeleteOption.bind(this);
    }
    componentDidMount(){ 
        try{   
            const options=JSON.parse(localStorage.getItem("options"));
            if(options){
                this.setState(()=>({ options }))
            } 
        }
        catch(e){
            
        }
    }
    componentDidUpdate(prevProps, prevState){ 
        if(prevState.options.length!== this.state.options.length){ 
            const options=JSON.stringify(this.state.options);
            localStorage.setItem("options",options);
        }
    }

    componentWillUnmount(){
        console.log("component is  unmounted ");
    }

    handleAddOption(option){ 
        if(!option){
            return "please enter a valid Data"; 
        }
        else if (this.state.options.indexOf(option)>-1){
            return "Duplicate entry";
        }
        this.setState((prevState)=>({ options:prevState.options.concat(option) }))
    }
    handleDeleteAllOptions(){
        this.setState(()=>({ options:[] }))
    }
    handleTheDeleteOption(option){ 
        this.setState((prevState)=> ({  options : prevState.options.filter((opt)=> opt!==option ) }))
    }
    pickRandomOption(){
        const random=Math.floor(Math.random()*this.state.options.length); 
        console.log(this.state.options[random]);
    }
    render(){
        const title="IndecisionApp";
        const subtitle="put your life in the hands of the computer!, hahah "; 
        return  (
            <div>  
              <Header title={title} subtitle={subtitle}/> 
              <Action 
              hasOptions={this.state.options.length>0} 
              pickRandomOption={this.pickRandomOption}
              /> 
              <Options 
               handleDeleteAllOptions={this.handleDeleteAllOptions}
               handleTheDeleteOption={this.handleTheDeleteOption}
               options={this.state.options} 
               />
              <AddOption handleAddOption={this.handleAddOption} /> 
            </div>
        )
    }
}
IndecisionApp.defaultProps={
    options:[]
}

