class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handllePlusOne = this.handllePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state={
            count:0 
        }
    }
    componentDidUpdate(preProps,prevState){ 
        if(prevState.count!==this.state.count){ 
            const count=JSON.stringify(this.state.count);
            localStorage.setItem("count",count);
        }
    } 
    componentDidMount(){ 
        const count=parseInt(localStorage.getItem("count"),10);
        if(!isNaN(count)){
           this.setState(()=>({
               count
           }))
        }
    }
    handllePlusOne() {
        this.setState((prevState)=>({  count:prevState.count+1 }))
    }
    handleMinusOne() { 
        this.setState((prevState)=>({ count : prevState.count-1 }))
    }
    handleReset() { 
        this.setState(()=>({ count:0 })) 
    }
    render() {
        return (
            <div> 
                <h1> Counter : {this.state.count} </h1>
                <button onClick={this.handllePlusOne}> +1</button>
                <button onClick={this.handleMinusOne} > -1</button>
                <button onClick={this.handleReset}> reset </button>
            </div>
        )
    }
} 

ReactDOM.render(<Counter />, document.getElementById("app"));








// const appRoot= document.getElementById("app");
// let count=0; 
// const addOne=()=>{
//     count++;
//     console.log("add one ", count);
//     render();
// }
// const minusOne=()=>{
//     count--;
//     console.log("minus one ", count);
//     render();
// }
// const reset=()=>{
//     count=0;
//     console.log("reset ", count);
//     render();
// }
// const render=()=>{
//     const templateTwo=(
//         <div>
//          <h1> counter : {count}</h1>
//          <button onClick={addOne}> +1 </button>
//          <button onClick={minusOne}> -1 </button>
//          <button onClick={reset}> reset </button>
//         </div>
//       ); 

//       ReactDOM.render(templateTwo,appRoot);
// }
// render();