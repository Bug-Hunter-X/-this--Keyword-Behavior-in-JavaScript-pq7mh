function myFunc() {
  console.log(this);
}

const obj = {
  myMethod: myFunc.bind(obj) // Binding 'this' to the obj object
};

obj.myMethod(); //this will log the obj object

//Alternative using arrow functions
const arrowFunc = () => {
    console.log(this); // 'this' will maintain its lexical scope
}

arrowFunc(); //this will log the global object