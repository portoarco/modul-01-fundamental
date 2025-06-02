let inputString:string = "MyJavaScript";


// let testRegex:RegExp = /Java|java/
let testRegex:RegExp = /java/i  //i singkatan dari ignore case sehingga tidak case sensitive 
// .test() untuk cek true/false dari inputan
const hasill:boolean = testRegex.test(inputString);
console.log(hasill);
// fungsi .match() untuk mengambil nilai dari inputan 

// CARA 1  : secara Literal
console.log("Hello World".match(/Hello/));

// CARA 2 : mengembalikkan expressions 
let matchRegex:RegExp = /Java/;
console.log()
