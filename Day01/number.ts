// NUMBER = data yang berkaitan dengan angka / bisa dihitung 

let jarak:number = 1500; // Tipe INT / Integer / Angka Bulat 
let berat:number = 90.22 //Tipe nilai FLOAT /Angka Desimal

// Operasi Aritmatika : +, -, *, / , % (modulus)

// Algorithm kode perhitungan penjumlahan
// 1. Siapkan data yang harus dijumlahkan 
let angka1:number = 30;
let angka2:number = 25;
// 2. Proses penjumlahan dari data yang diberikan 
// Karena rumus/tidak diganti-ganti, maka pakainya const
const result:number = angka1 + angka2;
// 3. Tampilkan hasil akhir penjumlahan di terminal
console.log(result);

// Fungsi Math Object 
const PiMath:number = Math.PI;
console.log(PiMath)

// Pembulatan Nilai dengan math.round (nilai pembulatan terdekat)
console.log(Math.round(25.6))
console.log(Math.round(25.2))

// Pembulatan Nila ke atas yang dipaksa
console.log(Math.ceil(25.1))
// Pembulatan Nila ke bawah yang dipaksa
console.log(Math.floor(25.7))

// Perpangkatan
console.log(Math.pow(4,2))
// Akar pangkat 2
console.log(Math.sqrt(16))
// Akar pangkat 3
console.log(Math.cbrt(8))
// MIN dan MAX
console.log(Math.min(1,3,4,5,0,-20))
console.log(Math.max(1,3,4,5,0,-20))
// Random Nilai (antara 0 hingga 1)
// console.log(Math.random())

// PARSING DATA = konversi data dari string ke number dan sebaliknya
// dengan toLocaleString() biasanya diperlukan untuk memunculkan hasil akhir dari sebuah perhitungan
// kalau mau ada ganti setingan pemisah = "id"
let price:number = 25500;
console.log(price.toLocaleString("id"));

console.log(price.toLocaleString("id",{
    style: "currency",
    currency:"IDR"
}))





