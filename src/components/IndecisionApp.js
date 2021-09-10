import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModel  from './react-modal'; 
export default class IndecisionApp extends React.Component{
    state={
        options:[],  //["thing one","thing two","thing three"] 
        react_model_text:undefined,

    } 
    handleTheReactModelClear=()=>{
        this.setState(()=>({
            react_model_text:undefined
        }))
    }
    handleAddOption=(option)=>{ 
        if(!option){
            return "please enter a valid Data"; 
        }
        else if (this.state.options.indexOf(option)>-1){
            return "Duplicate entry";
        }
        this.setState((prevState)=>({ options:prevState.options.concat(option) }))
    }
    handleDeleteAllOptions=()=>{
        this.setState(()=>({ options:[] }))
    }
    handleTheDeleteOption=(option)=>{ 
        this.setState((prevState)=> ({  options : prevState.options.filter((opt)=> opt!==option ) }))
    }
    pickRandomOption=()=>{
        const random=Math.floor(Math.random()*this.state.options.length);  
        // if(this.state.react_model_flag){
        //     this.setState(()=>({ 
        //     react_model_text:this.state.options[random]
        //     }))
        // }
        this.setState((prevState)=>({  
            react_model_text:this.state.options[random]
         }))
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
              <OptionModel  
              pickRandomOption={this.pickRandomOption}
              react_model_text={this.state.react_model_text}
              handleTheReactModelClear={this.handleTheReactModelClear}
              />
            </div>
        )
    }
} 

