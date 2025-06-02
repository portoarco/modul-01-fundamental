// Latihan 1
/*
Tulis kode untuk menghitung luas segitiga.
Contoh: alas = 5, tinggi = 3
Output: 7.5
*/ 

// let alas:number = 5;
// let tinggi:number = 3;
// const luas:number = 1/2*alas*tinggi;
// console.log(luas);


/*Latihan 2
Tulis kode untuk menukar nilai tiga variabel.
Contoh: a = 1, b = 2, c = 3
Output: a = 3, b = 1, c = 2
*/

let a:number=1;
let b:number=2;
let c:number=3;

let temporary = a;
a = c;
c = b;
b = temporary;


console.log(a,b,c);


/*Latihan 3
Tulis kode untuk menghitung faktorial dari sebuah angka.
Contoh: angka = 5
Output: 120
*/


/*
Latihan 4
Tulis kode untuk memeriksa apakah sebuah angka ganjil atau genap.
Contoh: angka = 7
Output: ganjil
*/

let inputNumberr:number = 7;

if(inputNumberr % 2 === 0){
    console.log(`${inputNumberr} adalah angka GENAP`);
} else {
    console.log(`${inputNumberr} adalah angka GANJIL`);
    
}

/*
Latihan 5
Tulis kode untuk menghitung jumlah digit dari sebuah angka.
Contoh: angka = 1234
Output: 4
*/

let inputAngka:number = -1234;
const validasiInputAngka:number = Math.abs(inputAngka);
const parseAngka:string = validasiInputAngka.toString();
const hitungDigit:number = parseAngka.length
console.log(hitungDigit); // output = 4

// let inputAngka:number = -1234;
// const parseAngka:string = inputAngka.toString();
// const hitungDigit:number = parseAngka.length
// console.log(hitungDigit); //Output = 5 


/*
Latihan 6
Tulis kode untuk memeriksa apakah sebuah kata adalah palindrom.
Contoh: kata = "katak"
Output: True
*/



/*
Latihan 7
Tulis kode untuk menghitung jumlah semua bilangan genap dari 1 sampai N.
Contoh: N = 10
Output: 30
*/


/*
Latihan 8
Tulis kode untuk mengubah angka menjadi format waktu (hh:mm:ss).
Contoh: detik = 3661
Output: 1 jam, 1 menit, 1 detik
*/

// 1. Buat variabel detik 
let inputTimeSec = 45296
// 2. Konversi detik ke jam 
const convHours = Math.floor(inputTimeSec / 3600);
console.log(convHours);

// 3. Buat remainingTime
let remainingTime = inputTimeSec % 3600; 
const convMinutes = Math.floor(remainingTime / 60);

console.log(convMinutes);

// 4. Buat variabel Second
const convSecond = remainingTime % 60 ;
console.log(convSecond)

//OUTPUT 
console.log(`Konversi ${inputTimeSec} Detik adalah ${convHours} Jam ${convMinutes} Menit ${convSecond} Detik`);


/*
Latihan 9
Tulis kode untuk menghitung jumlah huruf vokal dalam sebuah kalimat.
Contoh: kalimat = "Saya belajar Python"
Output: 7
*/
let inputKalimat:string = "Saya belajar Python";



/*
Latihan 10
Tulis kode untuk mencetak bilangan Fibonacci hingga N.
Contoh: N = 10
Output: 0 1 1 2 3 5 8 13 21 34
*/


/*
Latihan 11
Tulis kode untuk membalik urutan kata dalam sebuah kalimat.
Contoh: kalimat = "Saya suka Python"
Output: "Python suka Saya
*/

