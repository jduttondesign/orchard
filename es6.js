//console.log("es6");

//const *use on quizes - similar to var used only in the block it is used in and reassingable
// const a=8;
// console.log("a",a);
// a=12;
// console.log("a2",a);

//const outputDiv = $("#output");

//let *
// letb=8;
// console.log("b", b);
// b=12;
// console.log("b2",b);

// function varTest(){
// 	var x=1;
// 	if(true){
// 		var x =2;
// 		console.log("x");
// 	}
// }
// //use this insead of iffe statement to check if your vars are creeping out.
// function letTest(){
// 	let y=1;
// 	if(true) {
// 		let y=12;
// 		console.log("inside if",y);
// 		console.log("outside if", y);
// 	}
// }



//arrow functions *
var sum = function (){
	let a=1, b=2;
	return a+b;
}

console.log("hardcoded sum in ES5", sum());
//shorthand way of the above code
 var sum = () => {
 	let a=1, b=2;
	return a+b;
 }

console.log("hardcoded sum in ES6", sum2());

var reflect = function(value){
	return value;
}
console.log("reflect in ES5", reflect("ES5 is so yesterday"));

var reflect2= (value) =>{
	return value;
}
console.log("reflect in ES6", reflect2("ES6 is the new hotness"));

var realSum = function(num1, num2){
	return num1+num2;

}
console.log("realSum", realSum(2,3));

var realSum2=(num1, num2) =>{
	return num1 + num2;
}
console.log("realSum ES6", realSum2(5,4));

//string templates
let m="me";
console.log("m", m);
let r = `hello my name is ${m}`;
console.log("r", r);

//object literal property shorthand
let wow="Hi there", ES6="ES6", numNum=()=>(console.log("howdy")}
let myOldObject={
	wow:wow,
	es6:es6,
	numNum:numNum
}
console.log("myOldObject", myOldObject);

let myNewObject={
	wow, es6
}

console.log("myNewObject", myNewObject);

}

//method properties - define objects inside functionss
var e5Obj {
	foo:function(){console.log("foo")};
	bar:function(){console.log("foo")};
}
console.log("e5Obj", e5Obj);

var es6Obj={
	foo(){console.log("foo")},
	bar(){console.log("bar"}
}

console.log("es6Obj", es6Obj);



