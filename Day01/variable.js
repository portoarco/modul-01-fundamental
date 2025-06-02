/* 
Rumus Penulisan Variable :
1) keywordVariable namaVariable = data;
2) keywordVariable = var, let, const
3) namaVariable = a. Harus diawali dengan huruf atau simbol underline "_"
atau simbol dolar $; b. Jika terdiri dari 2 suku kata/lebih, maka TIDAK BOLEH DIPISAH DENGAN SPASI / harus disambung
4) Opsi data yang bisa disimpan: string, number, boolean, undefined, array, object 
*/ 

// Deklarasi variable
var namaMurid;
// Inisialisasi variable (kondisi utuh, ada penampung dan isinya )
var usiaMurid = 17; 
// Karakter tiap keyword variable 
// Keyword var : dapat di redeclare (sudah ada nama variable sebelumnya dan ditulis ulang) dan reassign

// Redeclare (nyebutin ulang keywordnya)
// var alamat = "Jl Tunjungan";
// var alamat = "Jl Apel"; //membuat ulang variabel yang sudah ada 

// Reassign (panggil variabel yang sudah ada dan diganti isinya)
// alamat = "Rungkut sby";

// Keyword let = non redeclare, tapi bisa direassign 
let program = "web dev";
program = "data sains" //reassign

// Keyword const = non redeclare dan none reassign (tidak bisa diubah)
// biasa digunakan untuk menyimpan data yang digunakan sbg acuan 
// Biasanya diawali huruf besar untuk const 
const Pi = 3.14;
const UrlDomain = "https://google.co.id"


