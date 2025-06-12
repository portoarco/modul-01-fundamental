/** ========REVIEW MATERI========
 *
 *  60% teori + 40% praktek : bisa suruh ngelengkapi kode hilang, suruh tau erornya kenapa, atau bagaimana solve dari errornya
 * ada 25 soal multiple choice, tiap soal punya 4 opsi jawaban yang harus dipilih
 * Kisi-kisi Ujian:
 *      -Introduction Programming   
 *      -Data type(Primitive/nonPrimitive)
 *      -var,let, dan const
 *      -Introduction TS
 *      -Looping statement
 *      -Interfance dan object declaration
 *      -Function hoisting
 *      -Encapsulation
 *      -Data structure
 *      -Big O Notation
 *
 * */ 


/** ==============INTRODUCTION PROGRAMMING==============
 * Programming : metode untuk memberikan instruksi pada suatu alat
 * Tujuan Programming u/ Software Engineer : membantu kelola software untuk mengelola data supaya efektif (CRUD System)
 * Software Engineer : mengelola data dan code-code di komputer 
 * Semakin rendah bahasa pemrograman = semakin dekat dengan bahasa mesin (shg lebih sulit dipahami manusia)
 * High Level Language : Javascript, Java,Python
 * Sebelum menulis program, pahami dulu masalahnya baru coding
 * Sebelum nulis code, kalau bingung alur code pakai FlowChart atau PseudoCode
 * Langkah : pahami masalahnya apa -> pikirkan solusinya apa -> buat pseudocode/flowchart -> tentukan tiap langkah code nya 
 * V8 Engine menerjemahkan javascript supaya bisa diterjemahkan oleh browser (penerjemah di sisi browser)
 * Javascript cmn bisa running di browser, maka ngodingnya di code editor. Supaya komputer bisa terjemahkan maka perlu install node js (si penerjemah di sisi komputer) di code editor 
 * Sifat single threaded : setiap kode diterjemahkan dari atas ke bawah (maka dideklarasi dulu variabelnya di atas, baru dipake di bawah, termasuk juga function tulis dulu di bagian atas)
 * Sifat non-blocking : bisa proses asynchronous (bisa jalankan beberapa proses penerjemahan sekaligus dari baris yang berbeda)
 * Sifat concurrent : bisa menyelesaikan multiple task sekaligus 
 * console.log() = memberikan tampilan output di terminal
 * alert() = menampilkan di sisi browser 
 * 
 * 
*/


/** ============== TIPE DATA ==============
 * Tipe data primitive : tipe data general (string,number,boolean/kepastian,null(merepresentasikan sebuah variabel kosong), undefined(suatu variabel yg tidak didefinisikan))
 * null : adalah sebuah object (bila cek typeof null)
 * Tipe data non-primitve / reference data type: object, array 
 * bigInt : biasanya untuk nominal penghitungan angka yang sangat besar
 * memeriksa tipe data : typeof()
 * */ 


/** ============== VAR, LET, CONST ==============
 * variable : menampung data (tergantung tipe data yang ingin simpan)
 * Rumus Penulisan => keywordVariable namaVariable = value; 
 * keyWordVariabel ada 3 = var,let, dan const
 * Aturan:
 *  1) Tidak boleh diawali angka
 *  2) terdiri dari 2 suku kata => digabung (dengan metode penulisan Camel Case : kata pertama di akhiri huruf kecil, kata berikutnya selalu diawali huruf besar)
 *  3) Boleh diawali simbol _ atau $
 * 
 * Karakter Keyword Var : 
 *  a) Redeclare = bisa dideklarasikan ulang dengan nama yang sama
 *  b) Reassign = bisa diisi dan diubah isinya
 * 
*/

// Karakter keyword var (redeclare dan reassign + global scope variabel )
// Redeclare 
var nama:string = 'Abdi';
var nama:string = 'Edo';
// Reassign 
nama = 'Edi'

// LET  (block scope variabel): non-redeclare , reassign, block scope variable 
let usia:number = 13
//let usia:number = 14; //cannot redeclare block-scope variable kecuali kalo masuk ke function atau for dkk, intinya gaboleh di satu scope yang sama 

// CONST : non-redeclare, non-reassign, constant variable 
// tipe data yang pakai const biasanya 
//      1) tipe data object dan array 
//      2) data yang menjadi data acuan/rumusan (simpan nilai phi, simpan URL backend ) + 
//      3) menggunakan arrow function
// Why? karena untuk mencegah perubahan tipe data, karena object dan array nyimpen data -> utk mencegah tipe datanya tidak sengaja terganti 

const PI = Math.PI;
const listAngka:number[]=[2,3,4,5,2,6,4]

// object : kalau di typescript harus pakai INTERFACE
interface IHuman{
    nama:string,
    tglLahir:string,
    gender:"Pria" | "Wanita" //union data type
}

const human:IHuman = {
    nama : "Arco",
    tglLahir : "2002-02-02",
    gender: "Pria"
}

    // kenapa langsung belajar typescript ? utk belajar langsung tipe data  : terkait type safety 

//==============LOOPING STATEMENT==============
// tujuan: mengulang eksekusi code
/**
 * WHILE LOOP : perulangan program yang akan selalu dijalankan selama kondisi masih terpenuhi
 * Aturan Penulisan 
 *  while(condition){
 *      //code
 *  } selama nilai condition true, maka code akan selalu dieksekusi
 * 
 * 
 * 
 * 
 * 
 * 
 * */ 


// WHILE LOOP 
let count:number = 1;

while(count < 10){
    console.log(`Loop ke ${count}`);
    count++
}

while(true){
    let random:number = Math.random();
    console.log(random);

    if(random < 0.25){
        break; //cara menghentikan bisa break bisa pake return
    }
}

// kapan kita pakai while loop? saat perulangannya tidak pasti berhenti kapan
// kapan kita pakai for loop? ketika sudah tau sejak awal batas loopingnya seberapa banyak
// kapan pakai do while? ketika minimal code di dalam do while perlu jalan 1x 


// DO..WHILE LOOP
// minimal running code 1x 
/**
 * Aturan Penulisan:
 *  do{
 *          //code
 *  } while(){
 *  }
 * 
 * */ 

let counter:number = 1;

do {
    console.log(counter);
    counter++;
} while(counter < 10);

/**
 * FOR LOOP : digunakan ketika batas looping ditentukan sejak awal
 * Aturan Penulisan:
 * for(counterDeclaration ; counter_condition ; counter){
 *      //code
 * }
 * counterDeclaration = untuk deklarasi nilai awal dari looping
 * counter_condition = mendefinisikan batas looping
 * counter = memproses counting (increment/decrement)
 * 
 * */ 
// for .. loop untuk mengakses isi array  atau pakai built in function forEach()
for (let i:number = 1; i < 10; i++){
    console.log(i);
}

// for .. in : looping yang berkaitan dengan tipe data objek (untuk akses nama properti dari tiap objek)


const human1:IHuman = {
    nama : "Arco",
    tglLahir : "2000-02-02",
    gender: "Pria"
}

for(const property in human1){
    console.log(property);
    console.log(human1[property]);
    
} //akan menampung informasi properti apa saja yang ada di human1
//akses isi objek : "." atau "[] : kalau isinya bentukan string"

// for .. of : looping yang berhubungan dengan akses value data array 

const listProduct:string[]= ["Kopi","Teh","Jahe"]
for (const value of listProduct) {
    console.log(value);
}

// looping di dalam looping biasanya untuk mau melakukan comparison data, dua data array yang ingin dibandingkan. Biasanya kalau ada 2 array itu pakenya nested loop : tergantung soal 


// TIPE DATA ARRAY 
// merupakan tipe data yang mampu menampung berbagai macam tipe data 
/**
 * Ciri-ciri : 
 *  -Data yang disimpan ke dalam array akan dibungkus dengan kurung siku 
 *  -Setiap data yang disimpan dalam array akan memiliki alamat index yang dimulai dari 0 
 * 
 * 
 * Kapan pake tipe data array ? ketika punya sekumpulan data yang tipenya sama dan ingin mudah untuk dikelola. Biasanya dijadikan 1 variabel supaya bisa lebih mudah dikelolanya
 * */ 

// string merepresentasikan tipe datanya selalu sama2 string
// object merepresentasikan strukturnya selalu sama

const listNama:string[] =["Aldo","Aldi"]

interface ISiswa {
    nis:string;
    nama:string;
    kelas:"IPA" | "IPS";
}
    // model array of object: paling general dipakai di database

const listSiswa:ISiswa[] = [
    {
        nis: "01231241242",
        nama: "Aldo",
        kelas : "IPA"
    },
    {
        nis: "1231824123123",
        nama: "Aldi",
        kelas : "IPS"
    },
]


console.log(`${listSiswa[0]}`); //output: [object object] shg perlu distringify pake JSON

// JSON

console.log(`${JSON.stringify(listSiswa[0])}`); 

const stringObject = `${JSON.stringify(listSiswa[0])}`
console.log(typeof stringObject);
console.log(stringObject); //model ini adalah model string dan tidak bisa diakses propertinya, kalau mau diakses maka harus diparse
console.log(JSON.parse(stringObject)); //model ini sudah bisa diakses propertinya

// bedanya type dan interface 
// interface lebih cocok untuk mendefinisikan tipe data objek dan strukturnya pasti, kalau type itu untuk tipe data baru (untuk menampung gabungan interface). Kalau dari awal sudah tau struktur datanya, pake aja interface. Tapi kalo ada gabungan dan struktur baru lagi pake aja type 

// Saat angka didefine string: kalau angka tidak butuh untuk dihitung
// Saat angka didefine number : kalau angka butuh dihitung

// yang membedakan JSON dengan Object asli JS? 
// ==> Kalau tipenya JSON maka secara strukturnya object, tapi dalam bentuk string. Obejct JS biasa dipaksa jadi string gak bisa

/** =====FUNCTION======
 * Definisi: cara untuk menyatukan kumpulan program yang ditujukan untuk menyelesaikan tugas khusus 
 * Kategori : Built-in function dan User-defined function
 * Aturan Penerapan: 
 *  1) Function harus tersedia lebih dulu
 *  2) Penamaan function mengikuti aturan penamaan variabel 
 *  3) Secara opsional bisa menerima parameter/argumen : penampung data dari function untuk menerima data dari luar function
 *  4) Function secara opsional bisa menghasilkan output melalui keyword return di dalamnya 
 *  5) Opsi penulisan funct ada 3 : Declarative Funct, Expression Funct, dan Arrow Funct 
 * 
 * 
 * Function Hoisting : khsus untuk declarative function, bila fungsinya baru dibuat setelah dipanggil, maka fungsinya yang di bawah akan dibaca ke atas bukan dari bawah | HANYA DECLARATIVE FUNCTION! ARROW FUNCTION DAN EXPRESSION TIDAK BERLAKU . BERLAKU JUGA FUNCTION HOISTING UNTUK VAR SAJA, LET DAN CONST TDK BERLAKU --> Cari artikel tambahan terkait function hoisting dan variabel hoisting 
 * */ 


// Declarative Function :
/**
 *  function namaFunct(param1?,param2?,....){
 *      //code 
 *  }
 * 
 *  tanda "?" : sifatnya opsional
 * 
 * */ 

// contoh 1
function penjumlahan():number{ //contoh function tanpa parameter dan ada tipe data outputnya yaitu ":number" kalau tidak ada isinya, maka tulis ":void" sehingga tidak mereturn apapun pada outputnya shg return akan bertanda merah 

    let angkaA:number = 2;
    let angkaB:number = 3;

    const result:number = angkaA + angkaB;

    return result
}

console.log(penjumlahan());

// contoh 2
function penjumlahanB(angkaC:number,angkaD:number){
    const result:number = angkaC-angkaD;
    return result;
}

console.log(penjumlahanB(10,3));



// bisa akses dari variabel global atau dari let di dalam function

// Function Expression : fungsi yang ada dalam variabel 
/**
 * const namaFunct = function(param1?,param2?,...){
 *  //code
 * 
 * }
 * 
 * */ 

// kapan pake parameter? ketika fungsi tsb dari algoritma kita  sifatnya reusable termasuk isi data yang dimasukkan itu gonta-ganti/variatif dan mau dipake di berbagai tempat


// contoh 1:
const pengurangan = function ():number{
    let angkaC:number = 5;
    let angkaD:number = 10;

    const result: number = angkaC - angkaD

    return result
}

console.log(pengurangan());

// Contoh 2:

const penguranganB = function (angkaC:number,angkaD:number):number{
    const result: number = angkaC - angkaD
    return result
}

console.log(penguranganB(4,2));


// Arrow Function : mirip dengan expression, tapi ada tanda panah dan tidak ada penulisan "function" /anonymous function
/**
 * const namaFunct = (param1?,param2?,...)=> {
 * 
 * }
 * 
 * 
 * */ 

// mana yang digunakan? bebas tergantung kesepakatan tim
// tips: kalau untuk membuat function better pakai declarative, tapi kalo mau mengisi callback, better pakai expression/arrow function

// Contoh Arrow Function 1:
const perkalian = () => {
    let angkaE:number = 10;
    let angkaF:number = 20;

    const result:number = angkaE * angkaF

    return result
}
// Contoh Arrow Function 2:
const perkalianB = (angkaG:number, angkaH:number) => {
    const result:number = angkaG * angkaH
    return result
}

console.log(perkalianB(15,2));

// contoh Arrow Function 3 : HANYA DI ARROW FUNCTION

const perkalianC = (angkaI:number,angkaJ:number) => angkaI *angkaJ; // hanya berlaku kalo kodenya cuman 1 baris aja, kalo lebih dari 1 baris maka harus { } seperti biasa

console.log(perkalianC(2,3));


// CATATAN LATIHAN KUIS
/**
 * Lihat fungsinya ada yang bisa di return atau tidak, kalau tidak ada yang di return jadinya undefined 
 * For yang secara langsung mengakses data array = for ... of 
 * kode "this.xxx" => merepresentasikan dari class tsb. shg instance of the class
 * 
 * 
 * */ 