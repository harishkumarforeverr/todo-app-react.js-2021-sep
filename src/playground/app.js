class IndecisionApp extends React.Component{
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
const Header=(props)=>{
    return (
        <div>
         <h1>  {props.title} </h1>
         {props.subtitle && <p>   {props.subtitle}  </p>}
        </div> 
    )
} 

Header.defaultProps={
    title:"some title"
}
const Action=(props)=>{
    return (
        <div>
         <button
          disabled={!props.hasOptions} 
          onClick={props.pickRandomOption}
          >
           what shoud i do ? 
        </button>
        </div> 
    )
} 

const Option=(props)=>{
    return (
        <div>  
         <p> {props.option}  <button onClick={()=>{
             props.handleTheDeleteOption(props.option)
         }}> remove </button> </p>

        </div>
    )
}
 
const Options=(props)=>{
    return (
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
} 

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.formOnSubmit=this.formOnSubmit.bind(this);
        this.state={
            error:undefined
        }
    }
    formOnSubmit(e){
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
            <diu>  
            {this.state.error && <p> {this.state.error}</p>}
            <form onSubmit={this.formOnSubmit}>
             <input type="text" name="option" />
             <button>Add Option </button>
            </form>
            </diu>
        )
    }
}
 
var appRoot=document.getElementById("app");

const User=(props)=>{
    return (
        <div>
        <h1> name : {props.name}</h1>
        <h2> Age :  {props.age}</h2>
        </div>
    )
}

ReactDOM.render(<IndecisionApp options={["i","am","harish"]}/>, appRoot);

