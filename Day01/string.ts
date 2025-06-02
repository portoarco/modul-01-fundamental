// STRING : data yang berisi karakter huruf, angka, atau simbol 

let namaToko:string = "Toko ABC "
namaToko = "Toko DEF " //Reassign tidak perlu tulis tipe datanya 

//Template Literal 
let alamatToko:string = `Jl. Genteng Kali Sby`;

// Penggabungan Data String 
// Cara 1: menggunakan penjumlahan
let printInfo:string = namaToko + "" + alamatToko + "No Telp. 00000213213";
console.log(printInfo);

// Cara 2: Template Literal
printInfo = `${namaToko} ${alamatToko} Telp. 0815234234234`;
console.log(printInfo)

// Fungsi bawaan tipe data string 

// string.length = menghitung panjang data string/hitung jumlah karakter dalam 1 variabel dengan data string 
let message:string = "Hello";
console.log(message.length)

// string.toUpperCase() = merubah semua karakter ke huruf besar
console.log(message.toUpperCase())

// string.include() = memastikan suatu kata atau karakter ada di dalam string 
console.log(message.includes("H"))



