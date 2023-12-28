var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*
The function invocation on line 8 leads to the console.log() output on line 5.
There are two myVar variables, one in the global scope declared on line 1 and one
in the local scope of someFunction(). The inner myVar shadows the outer myVar and 
'This is local' is output to the console.
*/


var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
The invocation of someFunction() on line 24 reassigns the global variable myVar to 'This is local'. 
The console.log() call on line 25 outputs 'This is local' since the global myVar has been reassigned.
*/

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
console.log(myObject)