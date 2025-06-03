// Array : Tipe data yang mampu menampung berbagai tipe data lain

// Ciri-ciri array
/*
 * Dibungkus kurung siku [1,2,3,...]
 * Setiap data di dalam array memiliki alamat index yang dimulai dari indeks ke-0
 * Tujuan : mempermudah pengelolaan data (mempermudah untuk proses CRUD/Create-Read-Update-Delete)

*/ 
// TANPA Format Array
let siswa1:string="Edo";
let siswa2:string="Edi";
let siswa3:string="Eda";

// Format Array
// Array dan Object harus pakai CONST karena untuk ubah harus pakai fungsi bawaan Array --> Sehingga tidak bisa diubah2 tanpa sengaja
// Cara 1
const daftarSiswa:string[] = ["Edo","Edi","Eda"];

// Cara 2 (jarang digunakan) - pakai constructor
const daftarKelas:string[] = new Array("IPA","IPS","Bahasa");

// Cara 1 akses data dalam array : namaVariabel[index_data_terpilih]
console.log(daftarSiswa[1]);
console.log(daftarKelas[1]);


// Cara 2 Akses Data Array
    /*
    Array Destructure : mengakses data pada array dengan menandai tiap data menggunakan variabel 

    Berlaku bila data array bukan untuk menyimpan banyak data, hanya sebatas mengumpulkan beberapa data yang berbeda-beda,bukan data yang sama (cek contoh). Secara kesatuan itu 1 data utuh, tapi isi dalam 1 datanya bisa beda-beda
    */ 

    const data:any[] = ["Abdi", 20, "Sidoarjo"];
    let [namaOrang,umur,asal] = data; //Proses Redeclare
    console.log(namaOrang);
    console.log(umur);
    console.log(asal);
    
    
// Memperbarui/Update data Array (dengan cara Reassign)
daftarSiswa[2] = "Andre";
console.log(daftarSiswa);

// BUILT IN FUNCTION ARRAY untuk kelola data

// array.push(newData) = untuk menambahkan data baru di akhir array / dari paling belakang array
daftarSiswa.push("Olga");
console.log(daftarSiswa);

// array.pop() = untuk menghapus data terakhir
daftarSiswa.pop()
console.log(daftarSiswa);

// array.unshift(newData) = untuk menambahkan data baru di awal array --> data baru jadi indeks ke-0
daftarSiswa.unshift("Rafi");
console.log(daftarSiswa);

// array.shift() = menghapus data terdepan array 
daftarSiswa.shift();
console.log(daftarSiswa);

// array.length = digunakan untuk mengetahui banyaknya data dalam array

console.log(daftarSiswa.length);

// array.splice(pilihanIndex, jumlahDataYangDihapus, newData?) = untuk menghapus,memperbarui,menyisipkan data baru pada index yang dipilih. HARUS TAU index ke berapa yang mau dihapus

//  Menghapus data berdasarkan Index
// Delete Count = berapa jumlah index yang mau dihapus ke belakang?
daftarSiswa.splice(1,1);
console.log(daftarSiswa);

// Menyisipkan data (data yang lama akan digeser ke paling belakang array)
// Delete count = 0 ==> karena tidak ada data yang dihapus
daftarSiswa.splice(1,0,"Edi","Dimas","Eli");
console.log(daftarSiswa);

// Memperbarui data (cara lain selain reassign) ==> dapat dipakai untuk mengganti banyak data 
daftarSiswa.splice(2,1,"Elo");
console.log(daftarSiswa);

// Mini Exercise

// Dari data array berikut:
// const daftarSiswaa:string[] = ["Edo","Edi","Eda"];
// buat jadi outputnya menjadi:
/*
    Daftar Siswa:
    1. Edo
    2. Edi
    3. Eda
*/ 

// PROCESS
// 1. Menyiapkan penampung output dalam bentuk string

// 2. Mengakses data dalam array satu per satu 
//      ada 2 pilihan, yakni Manual atau Perulangan (WHILE Loop/DO-WHILE/FOR Loop)

// 3. Memasukkan data dalam variabel output. Apabila ada potensi berubah, maka pakainya adalah let 

const daftarSiswaa:string[] = ["Edo","Edi","Eda"];
let output:string="";

// CARA ARCO 
// for(let index:number = 0; index < daftarSiswaa.length; index++){
//     // console.log(i); testing index number
//     // console.log(daftarSiswaa[i]); testing index content 
//     output += (index+1) + "." + daftarSiswaa[index] + "\n "
    
// }


// CARA PEMBAHASAN

    for(let index:number = 0; index < daftarSiswaa.length; index++){
        const namaSiswa:string = daftarSiswaa[index];

        // Memasukkan data ke dalam variabel output
        output = output + `${index+1}.${namaSiswa} \n`;    
}
// OUTPUT

console.log("Daftar Siswa: ");
console.log(output);









