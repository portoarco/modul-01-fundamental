/** ====== CALLBACK FUNCTION ====== 
 * Definisi: sebuah fungsi yang dijalankan dalam fungsi lain dan dimasukkan melalui parameter 
 * 
 * 
 * Aturan Penulisan: 
 * 
 * function mainFunction(callbackFn){
 *      //code
 *      callbackFn();
 * }
 * 
 * callbackFn/cb/cbfn : parameter yang harus diisi dengan function
 * 
 * 
*/


// contoh Callback function #1

function mainFunction(callbackFn){
    console.log(callbackFn());
    
}

mainFunction(function(){
    return 'Hellow'
})

// contoh callback function #2 

function printCalculation(cb){
    let angkaA:number = 20;
    let angkaB:number = 10;

    return `Hasil perhitungan adalah ${cb(angkaA,angkaB)}`;

}

const calculate:string = printCalculation(function(angkaA:number,angkaB:number){
    return angkaA + angkaB;

})

console.log(calculate);


// ForEach Function
// array.forEach(cbfn) : untuk mengakses isi dan indeks dari tiap data array (tidak perlu ditampung ke sebuah variabel karena forEach tidak menghasilkan nilai baru, tugasnya hanya akses isi suatu array)

// Contoh 1: 
const dataArr:any[] = [1,2,3];
dataArr.forEach((value:number,index:number)=>{
    console.log(value);
    console.log(index);
})

// array.map(cbfn) : untuk mengubah seluruh data array dan dijadikan data array baru 

const newDataArr:number[]=dataArr.map((value:number)=>{
    return value * 2 //harus di return WAJIB, kalo gk maka hasilnya undefined!
})

console.log(newDataArr);

// array.filter(cbfn) : mencari data sesuai acuan filter dan menampungnya dalam array baru (sehingga perlu ditampung variabel )
// yang disimpan adalah nilai yang true saja, yang false tidak akan disimpan

const dataArr2:any[] = [1,2,3,2,4,6,4,3,2,7,8,9]

const filterArr:number[] = dataArr2.filter((value:number)=>{
    return value %2 !== 0 //contoh: mencari data ganjil
})

console.log(filterArr);

// Object : tipe data yang dapat menampung tipe data lain dan tiap data ditampung dalam property
/**
 * Cara Penulisan #1 (Literal) - kalau cuman obj biasa
 * 
 * const object = {
 *      namaProperty:value,
 *      name:"Edi", (berisi string)
 *      usia:10, (berisi number)
 *      isActive:true (berisi boolean)
 *      grade: ["A","B","C"] (berisi array)
 *      getInfo : function(){
 *          //code       (berisi function)
 *       }
 * }
 * 
 * Cara Penulisan #2 (Jarang) 
 * 
 * const object = new Object();
 * object.name = "Edi"
 * object.usia = 15
 * 
 * 
 * Cara Penulisan #3 (OOP Class) - paling umum digunakan karena akan dipakai diberbagai data, fungsi dkk
 * 
 * class MyObj {
 *      constructor(name,usia){
 *          this.name = name;
 *          this.usia = usia;
 *      }
 * 
 * }
 * */ 


// Penulisan OOP dengan TypeScript (perlu pakai interface)
interface IHumanB {
    name:string;
    age:number;
    gender: "Male" | "Female";
    isLive:boolean; //bisa diakses secara publik
} //interface mendefinisikan struktur

// Class juga bisa dibuat seperti interface (bisa untuk definisikan object, bisa juga untuk definisikan struktur/constructor) 


// Cara 1

const dataHuman:IHumanB = {
    name:"Edi",
    age:17,
    gender:"Male",
    isLive:true
} 

// Cara 2 :
const dataHumanB:any = new Object();
dataHumanB.name = "Edi"
dataHumanB.age = 17
dataHumanB.gender = "Male"
dataHumanB.isLive = true


// Cara 3 
class Human implements IHumanB { //implements di typescript untuk menegaskan bahwa di class Human itu pakai property dari IHumanB, tapi kalo di javascript gak pake. Kalo tanpa implements propertynya lebih fleksibel pake apa aja. Kalo pake implements boleh nambahin property tapi TIDAK BOLEH ADA YANG KURANG dari property di Interface 

    name:string;
    age:number;
    gender: "Male" | "Female";
    isLive: boolean = true;
    private _religion:string = "Islam";  //bagian Encapsulation
    
    // = "Islam" adalah default value , maka harus ada methods di class untuk mengganti property privatenya yang function/methodsnya menerima parameter baru , contoh changeReligion(xxx) { this.religion = xxx}

    constructor(_jenengmu:string,_umurmu:number,gender:"Male"|"Female"){ //setiap didefine di constructor tidak harus sama dengan nama property

        // constructor berisi nilai-nilai yang mau diisi ke objectnya
        this.name = _jenengmu,
        this.age = _umurmu,
        this,gender = gender
        
    }
}

const data:IHumanB = new Human("cak adi",20,"Male") //disebut dengan instance (tahap menggunakan class constructor)
const data2:Human = new Human("pak kades",20,"Male") //

console.log(data);
console.log(data2);

console.log(data["age"]);
// console.log(data.religion); not accessible (private property)


// ======= INHERITANCE CONCEPT =======
// Definisi: pewarisan data dari class utama, supaya class turunan memiliki properti dari class utama 
// Child class hanya menyiapkan properti tambahan2nya, tapi fungsi utama ada di parent class

class Employee extends Human{
    position:string;
    salary:number;

    constructor(_jenengmu:string,_umurmu:number,gender:"Male"|"Female",position:string,salary:number){
        super(_jenengmu,_umurmu,gender,);
        this.position;
        this.salary;
        
    }

};

// pemanfaatan Class sebagai ganti Interface (Bila interface Human tidak disediakan)
const employee1:Employee = new Employee("Pak De",15,"Male","FE Dev",5000000)

console.log(employee1);


// Object Destructure : mengeluarkan nilai dari property object menjadi variable yang berdiri sendiri
const  {age:umurr,isLive,gender} = employee1 //contoh age:umurr = apabila mau dipanggilnya umurr
console.log(umurr);
console.log(isLive);
console.log(gender);
// tujuan : meringkas pemanggilan property biasanya pakai const 









