// Latihan 1
/*
1. Write a code to find area of rectangle.
 ○ Example : length = 5, width = 3
 ○ Output : 15
*/ 
let panjang:number = 5;
let lebar:number = 3;
const luas:number = panjang*lebar;
console.log(luas);




// Latihan 2
/*
2. Write a code to find perimeter of rectangle.
 ○ Example : length = 5, width = 3
 ○ Output : 16
*/
let panjangPP:number = 5;
let lebarPP:number = 3;
const keliling:number = 2*(panjangPP + lebarPP);
console.log(keliling);





// Latihan 3
/*
3. Write a code to find diameter, circumference and area of a circle.
 ○ Example : radius = 5
 ○ Output : diameter = 10, circumference = 31.4159, area = 78.539
 */

    // Variable Initialization 
    let radius:number = 7;

    // Formula Initialization 
    const diameter:number = radius*2;
    const kelilingLingkaran:number = 2*Math.PI*radius;
    const luasLingkaran:number = Math.PI*Math.pow(radius,2);

    // Round Testing (4 decimals places)
    // console.log(Math.round(kelilingLingkaran*10000)/10000);
    // console.log(Math.round(luasLingkaran*10000)/10000);

    // Round Formula Initialization 
    const roundKeliling:number = Math.round(kelilingLingkaran*10000)/10000;
    const roundLuas:number = Math.round(luasLingkaran*10000)/10000;

    // Output View
    console.log(`Diameter = ${diameter}, Circumference = ${roundKeliling}, Area = ${roundLuas}`);





// Latihan 4
/*
4. Write a code to find angles of triangle if two angles are given.
 ○ Example : a = 80, b = 65
 ○ Output : 35
*/

let sudutA:number = 80;
let sudutB:number = 65;
const sudutC:number = 180-(sudutA+sudutB);
console.log(sudutC);



// Latihan 5
/*
Write a code to convert temperature from Celcius to Fahrenheit 
Example : Celcius = 25;
Output = 77
*/ 
let inputCelcius:number = 25;
const conversionFahrenheit:number = (inputCelcius*(9/5))+32;
console.log(conversionFahrenheit);


// Latihan 6
/*
Write a code to swap two numbers:
Example: a = 4, b=7
Output : a = 7, b=4
*/ 
let inputA:number = 4;
let inputB:number = 7;
const swapA:number = inputB;
const swapB:number = inputA;
console.log(`a = ${swapA}`);
console.log(`b = ${swapB}`);

// Cara 2 
let A:number = 4;
let B:number = 7;
let temp:number; //Menyimpan data sementara dari variabel aslinya. Temp disebut juga Flag/Flagging

// Reassign
temp = A;
A = B;
B = temp;

console.log(`a = ${A}, b = ${B}`)

// Latihan 7
/*
Write a code to get first and last character from a string
Example: word = "Programming"
Output: P and g
*/ 
let inputWord:string = "Programming";

// Jumlah karakter normal = 11 --> Length-1 berarti total karakter 11-1 = 10, indeks ke -10
console.log(inputWord.length);

// Jumlah karakter terbaca komputer = 10 (P dianggap sebagai indeks 0) dan (g dianggap sebagai indeks ke-10)
console.log(`${inputWord[0]} and ${inputWord[inputWord.length-1]}`);

// Cara 2 dengan Built In Function chart
const first:string = inputWord.charAt(0);
const last:string = inputWord.charAt(inputWord.length-1);
console.log(first,last);



// Latihan 8
/*
Write a code to calculate the square and cube of a number.
Example: number = 4 
Output: square = 16; cube = 64
*/ 

let inputNumber:number = 4;
const square:number = Math.pow(inputNumber,2);
const cube:number = Math.pow(inputNumber,3);

console.log(`square = ${square}`);
console.log(`cube = ${cube}`);


// Latihan 9
/* 
Write a code to convert minutes to hours and minutes 
Example: totalMinutes = 135
Output: 2 hours and 15 minutes 
*/ 

// Variable Initialization
    let totalMinutes:number = 135;
// Hours Conversion
    // Testing#1
    // console.log(totalMinutes/60);
    //Hours Conversion and Round (Floor)
    const convertHours:number = Math.floor(totalMinutes/60); 
    const roundHourstoMinutes:number = convertHours*60;
// Minutes Conversion
    const convertMinutes:number = totalMinutes-roundHourstoMinutes;
// View Output
    console.log(`${convertHours} hours and ${convertMinutes} minutes`)

// Alternatif (w/ Modulus)
    const hours = Math.floor(totalMinutes/60);
    const minutes = totalMinutes%60;
    console.log(hours)
    console.log(minutes)


    // Dummy if conditional
    // if(convertHours == 0){
    //     console.log(`${convertMinutes} minutes`)
    // } else if(convertMinutes == 0 ){
    //     console.log(`${convertHours} hours`);
    // } else {
    //     console.log(`${convertHours} hours and ${convertMinutes} minutes`);
    // }

// Latihan Tambahan 
/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/ 

let inputDays:number = 400;
// Hitung Tahun
const Years:number = Math.floor(inputDays/365)
// Hitung Sisa Hari setelah tahun dihitung 
const remainingDays:number = inputDays % 365; 
// Hitung jumlah bulan
const months:number = Math.floor(remainingDays/30);
// Hitung sisa hari setelah bulan
const days:number = remainingDays % 30;

console.log(`${Years} Years ${months} Months ${days} Days`)






// 3. Pengurangan variabel jumlah sisa bulan dengan 30 hari 



// Formula Testing

// Output View






