const user={
    username:"harish",
    cities:["india","new york"],
    placedLived(){   
        return this.cities.map((city)=>this.username+" lived in " +city+"."); 
    }

} 

console.log(user.placedLived());


const multipiler={
  arr:[2,4,12],
  no:2,
  multiply(){
      return this.arr.map((n)=>n*this.no);
  }

}

console.log(multipiler.multiply())




// const add= (a,b)=>{
//     // console.log(arguments)
//     return a+b;
// }

// console.log(add(10,20,30));




// function square (x){
//     return x*x;
// }

// console.log(square(3));

// const squareArrow=(x)=> x*x;

// console.log(squareArrow(5));

// const getFirstName= (fullName)=>{
//     return fullName.split(" ")[0];
// }

// console.log(getFirstName("harish kumar"));


// const getFirst= (fullName)=> fullName.split(" ")[0];

// console.log(getFirst("naveen kumar"));








// var nameVar="harish";
// var nameVar="rahul";
// console.log("nameVar : ", nameVar);

// let namelet="harish8909";
// namelet="rahul809";
// console.log("namelet : ", namelet);

// const nameConst="harish809"; 
// console.log("nameConst : ", nameConst);

// function getPetName(){
//     const petName="kitty";
//     return petName;
// }

// var petName=getPetName();
// console.log(petName);

// let fullName="harish kumar";
// let fname;
// if(fullName){
//     fname=fullName.split(" ")[0];
//     console.log(fname);
// }
// console.log(fname);