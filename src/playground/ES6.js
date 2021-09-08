class Person {
    constructor (name="Anonymous", age=0){
        this.name=name ;
        this.age=age;
    }
    getGreeting(){ 
        return `hi im ${this.name} ! , hahahha `;
    }
    getDescription(){  
        return `${this.name} is ${this.age} years old `;
    }
}

class Traveller extends Person{
    constructor(name,age,loc){
        super(name,age);
        this.loc=loc;
    } 
    hasHomeLocation(){
        return !!this.loc;
    }
    getGreeting(){
        let greeting=super.getGreeting();
         if(this.hasHomeLocation()){
             greeting+=`im visiting from : ${this.loc}`;
         }
         return greeting;
    }
}


class student extends Person {
    constructor(name,age, major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){ 
        if(this.hasMajor()){
            return super.getDescription()+ ` and my subject is  :: ${this.major}`;
        }
        else{
            return super.getDescription();
        }
    }
}



const me=new Traveller ("harish kumar ",21, "india");
// console.log(me.hasMajor());
console.log(me.getGreeting());

const another=new Traveller (undefined,undefined,"china");
// console.log(another.hasMajor());
console.log(another.getGreeting());