"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Danny", age = 24, gender = "male";
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age} , you are a ${gender}`);
};
sayHi(name, age); // => error!
sayHi(name, age, gender);
//# sourceMappingURL=index.js.map