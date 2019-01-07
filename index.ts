const name = "Danny",
    age = 24,
    gender = "male";

const sayHi = (name,age,gender?) =>{        // ? mean optional parameter
    console.log(`Hello ${name}, you are ${age} , you are a ${gender}`)
}

sayHi(name,age);// => error!
sayHi(name,age,gender);
export {};