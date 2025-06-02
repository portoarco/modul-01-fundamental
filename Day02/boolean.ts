// BOOLEAN : data yang bernilai benar/TRUE atau salah/FALSE

let isActive:boolean = true;
let isDeleted:boolean = false; 

// Cara Menghasilkan Nilai Boolean 
// CARA 1 :Berdasarkan tipe data lain (TRUTHLY/FALSY)
// Truthly = data yang sifatnya TRUE ex. Data String dengan karakter
console.log(Boolean("abc"));
console.log(Boolean(" ")); //string kosong, tapi ada spasinya
console.log(Boolean(12)); // ada nilainya 


// Falsy = data yang sifatnya FALSE ex.data string kosong, data nilai 0, data undefined, data null
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// CARA 2: COMPARISON OPERATOR 
let valueA:number = 12;
let valueB:number = 15;

console.log(valueA < valueB);
console.log(valueA > valueB);
console.log(valueA >= 12);
console.log(valueB <= 14);
console.log(valueB != 15) //Tanda Tidak Sama Dengan/NOT EQUAL
console.log(valueB == 15); // Tanda == hanya mengacu nilainya saja
//Selalu pakai yang TRIPLE EQUAL / ===

// CARA 3: Logical Operator : AND (&&), OR (||), NOT (!)
// AND akan menghasilkan true jika antar nilai juga bernilai TRUE
console.log(Boolean("abc") && Boolean(2));
console.log(valueA < 12 && valueB === 15);
console.log(valueA === 10 && valueB === 1);

// OR akan menghasilkan TRUE jika salah satu saja bernilai TRUE 
console.log(Boolean("abc") || Boolean(2));
console.log(valueA < 12 || valueB === 15);
console.log(valueA === 10 || valueB === 1);

// NOT : membalikkan nilai
console.log(!Boolean(valueA));
console.log(!(valueA < 12) && valueB === 15);