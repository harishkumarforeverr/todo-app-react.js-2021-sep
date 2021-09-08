class VisibilityToggle extends React.Component{
    constructor(props){
        super(props); 
        this.ToggleTheVisibility=this.ToggleTheVisibility.bind(this);
        this.state={
            flag:false
        }
    }
    ToggleTheVisibility(){
        this.setState((prevState)=>{
           return {
               flag:!prevState.flag
           }
        })
    }
    render(){
        return (
            <div>
             <h1> visibilityToggle </h1>
             <button onClick={this.ToggleTheVisibility}> {this.state.flag ? "Hide Deatiles" :"Show Deatiles"}  </button>
             {this.state.flag && <p>these are some private deatiles </p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// let flag=false;
// const toggleTheButton=()=>{
//     flag=!flag;
//     render();
// }
 
// const root=document.getElementById("app"); 

// const render=()=>{

//     const jsx=(
//         <div>
//          <h1> visibility Toggle  </h1>
//          <button  onClick={toggleTheButton}> {flag ? "Hide detailes" : " show detailes"}  </button>
//          {flag && <p>these  is the dev2prod private limited company </p>}
//         </div>
//     ); 
//  ReactDOM.render(jsx,root);
// }
// render();
