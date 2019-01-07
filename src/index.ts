const name = "Danny",
    age = 24,
    gender = "male";

const sayHi = (name:string,age:number,gender:string): string =>{        // ? mean optional parameter
    return `Hello ${name}, you are ${age} , you are a ${gender}`;
}

// sayHi(name,age);// => error!
console.log(sayHi("Danny",24,"male"));
// sayHi(name,age,gender);
export {};