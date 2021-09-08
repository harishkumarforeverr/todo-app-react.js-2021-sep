const app={
    title:"some title",
    subTitle:"put your hands in the life of computer !",
    options: []// ["item one", "item two"]

}
const formSubmitted=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value; 
    if(option){
        app.options.push(option);
        e.target.elements.option.value=""; 
        render();
    }
}
 
const appRoot= document.getElementById("app");

const removeAll=()=>{
    app.options=[];
    render(); 
}
const what_should_i_do =()=>{
    const random=Math.floor(Math.random() * app.options.length);
    const option=app.options[random];
    console.log(option);
}

const numbers=[10,20,30,40];
const render=()=>{
    const template = (
        <div> 
           <h1> {app.title} </h1> 
            {app.subTitle && <p>{app.subTitle}  </p> }  
            <p> {app.options.length>0 ? "here are your Option " : " No options "} </p>
            {app.options.length>0 &&  <p>array length : {app.options.length} </p> }  
            <button  disabled={app.options.length==0}  onClick={what_should_i_do} > what should i do ?  </button>
            {app.options.length>0 &&  <button onClick={removeAll}> Remove All </button> }  
                <ol> 
                {app.options.map((option)=>{
                    return <li key={option}>  {option} </li>
                })}
                </ol>
                <form onSubmit={formSubmitted}>
                    <input type="text"  name="option"/>
                    <button>submit </button>
                </form>
        </div>
        );
        ReactDOM.render(template, appRoot);        
}
render();