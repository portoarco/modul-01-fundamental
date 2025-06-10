// Object oriented programming : suatu objek yang memiliki properti tertentu. Komputer dapat memahami suatu objek

// CARA 1 : membuat objek secara langsung

const pet = {
    name : 'Buddy',
    species: 'Dog',
    age: 4,
    isVaccinated: true,
    favoriteToy: 'Ball'
}

console.log("Ambil properti name dari pet :", pet.name);
console.log(pet.name);
console.log(pet.favoriteToy);
console.log(pet.isVaccinated);

// CARA 2 :  membuat objek dengan method New
const idCard:any = new Object() //minimalisir penggunaan any, karena datanya bisa jadi js biasa.
idCard.name = 'Budi'
idCard.age = 30
idCard.gender = 'male'
console.log(idCard);

// CARA 3 : membuat objek dalam bentuk function 
function createStudent(name:string, grade:number){
    return {
        name: name,
        grade: grade
    }
}
    // pengisian params function dengan data object 
const student = createStudent("Budi",11)
console.log(student);

// CARA 4 : membuat object dengan method Object.assign
const employee = Object.assign({},{nama : 'Bobi',roles:'Gubernur'});
console.log(employee);
console.log(employee.nama);
console.log(employee.roles);

// ---INTERFACE---

// Interface: seperti cetakan/blue print sehingga bisa bikin objek berkali-kali (tidak perlu pakai tipe data any)
interface IPerson {
    id:number,
    name:string,
    age:number,
    hobby?:string[] // artinya 'hobby?' sifatnya opsional atau tidak wajib diisi saat instansiasi object ;
}
interface IAddress{
    street:string,
    zip_code:number
}
interface IDetailInformation {
    detail: IPerson,
    address: IAddress,
}

 //tiap properti yang dimasukkan ke interface harus diisi juga di class

// const person1: IPerson = new Object();
// person1.id = 1
// person1.name = 'Boby'
// person1.age = 30
// person1.hobby = ['Belajar','Gaming','Main Padel']
//tidak bisa digunakan karena tidak ada data yang dimasukkan ke dalam new person

const person1:IPerson = {
    id: 1,
    name:'Bobi',
    age: 30,

}

const person2:IPerson = {
    id: 2,
    name:'Boba',
    age: 45,
    hobby: ["main angklung","shooting"]
}
console.log(person1);
console.log(person2);


const paket1:IDetailInformation = {
    detail:{
        id: 123,
        name:'Bambang',
        age:40
    },
    address : {
        street: 'Jl. Merdeka, Surabaya Pusat',
        zip_code:456
    }
}

console.log(paket1);



// --- TYPES --- : untuk masukkan berbagai macam skala yang kecil-kecil / tipe data custom dan tidak terfokus ke objek

type Color = 'red' | 'blue' | 'green'
const favoriteColor: Color = 'red';

console.log(favoriteColor);

type Coordinates = {
    x:number,
    y:number
}

const point:Coordinates = {x:5, y:10}
console.log(point);

type Vehicle = {
    brand:string,
    year:number
}

type Car = Vehicle & {
    seat:number
}

const car:Car = {
    brand: 'Totoyo',
    year : 2015,
    seat:6
}
console.log(car);

// PROPERTIES & METHODS 
interface IWashingMachine {
    brand:string,
    loadCapacity:number,
    start:()=> string, //kalau berupa function methods kasih tipe datanya dan arrow function.
    //  Void = sebuah fungsi yang tidak punya return value 
    stop: ()=> string
}


const washingMachine:IWashingMachine = {
    brand: 'LG',
    loadCapacity : 7,
    start(){
        // console.log("Start Engine");
        return 'Washing Started!'
    },
    stop(){
        return 'Stopping Machine.....'
    }
}

console.log(washingMachine.start());
console.log(washingMachine.stop());

// -- FOR IN LOOP in OBJECT
const fridge:any = {
    milk: 1,
    eggs:12
}

for(const key in fridge){
    console.log(key); //key untuk mengambil properto
    console.log(fridge[key]);
    console.log(`${key} : ${fridge[key]}`);
    
}

// DESTRUCTURING ASSIGNMENT  (Cara Lain Akses Objek)
const {username,umur} = {
    username: 'Bibi',
    umur:20
}
console.log(username);
console.log(umur);

//Contoh Lain Destructuring Assignment 
interface IAnimal {
    species: string,
    nickname:string,
    agee:number
}

const{species,nickname,agee}:IAnimal = {
    species: 'mamalia',
    nickname: 'elephant',
    agee: 100
}

console.log(species);
console.log(nickname);
console.log(agee);

// SPREAD OPERATOR 
const basicInfo = {name : "Tom"}
const fullInfo = {
    ...basicInfo, //spread operator: ... kayak narik property dari isian class basicInfo
    age:35
}

fullInfo.name = 'test' //bila ReAssign name propert
console.log(fullInfo);
console.log(basicInfo); // output: Tom
// why? karena yang dieksekusi adalah data aslinya sebelum di reassign 

// Konsep IMMUTABLE : bila eksekusi yang data awal ya data awal/data asli tidak akan berubah  BAKAL KELUAR DI EXAM! PELAJAI


// ---CLASS CONCEPT ---
class BankAccount {
    balance:number = 0;
    deposit(amount:number){
        this.balance += amount
    }
    withdraw(amount:number){
        this.balance -= amount;
    }
}

const myBankAccount = new BankAccount();
console.log('Saldo Saat ini: Rp.' + myBankAccount.balance);

myBankAccount.deposit(500000)
console.log('Saldo Saat ini: Rp.' + myBankAccount.balance);


class Light {
    isOn:boolean = false; 
    toggle(){
        this.isOn = !this.isOn
    }
}

const light = new Light()
light.toggle()
console.log("kondisi lampu:",light.isOn);
light.toggle()
console.log("kondisi lampu:",light.isOn);

// CONSTRUCTOR
// contoh 1 :  
class Laptop {
    private brand:string; //private bisa ditulis "private" atau dengan "#" tujuan: menyembunyikan property agar tidak bisa diakses di luar class
    public ram:number;

    constructor(brand:string, ram:number){
        this.brand = brand;
        this.ram = ram
    }

    getDisplay(){
        return {
            brand : this.brand,
            ram:this.ram
        }
    }

}

const laptop = new Laptop('Lenovo',32)
console.log(laptop);

console.log('info laptop yang diinput:',laptop.getDisplay());

const laptop1 = new Laptop('Lenovo2',32)
const laptop2 = new Laptop('Asus',22)

// console.log(laptop1.brand); //tidak bisa dipanggil karena ada encapsulation 
console.log(laptop1.ram);

// Contoh 2 :
class Motorcycle {
    private fuel = 50;
    public amount:number = 0;
    //pakai constructor
    constructor(amount:number){
        this.amount = amount
    }

    riding(){
        console.log("Riding the motorcycle ");
        if(this.fuel > 0){
            this.fuel -= 5
        }
    }
    brake(){
        console.log("Brake the motorcycle....");
    }

    refillFuel(){//amount:number{
        return this.fuel += this.amount 
    }
    checkFuel(){
        return this.fuel
    }
}

const motorcycle = new Motorcycle(20); //parameter yang dikirim adalah 20, sehingga langsung 20 itu akan ngirim argumen ke dalam constructor

console.log("Cek isi bensin:" + motorcycle.checkFuel()); // pengecekan hanya bisa lewat methods, sehingga isi variabel dalam class tidak bisa diotak-atik sembarangan

motorcycle.riding();
console.log("Cek isi bensin setelah berjalan",motorcycle.checkFuel());

console.log("melipir ke pom bensin....");

motorcycle.refillFuel();
console.log("Setelah isi bensin:",motorcycle.checkFuel());







