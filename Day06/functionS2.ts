//Callback Fuction  : sebuah fungsi yang dijalankan dalam fungsi lain dan dimasukkan melalui parameter 
//Callback Function(2) : sebuah fungsi yang langsung dibuat dalam parameter fungsi lain. 
// biasanya pakai istilah function(callback) atau function(cb) atau function (callbackFn)
// sering ditemui di frontend dan backend

/**
 * ATURAN PENULISAN:
 * 
 * function mainFunction(callbackFn){
 *      callbackFn()
 * }
 * 
 * -callbackFn : parameter yang harus diisi dengan fungsi
 * 
 * */ 

// mainFunction declaration

function printCalculation(callbackFn){
    // menjalankan fungsi dari parameter callbackFn dan ditampung outputnya ke dalam variable result
    const result = callbackFn();

    return `Hasil perhitungan dari callback adalah ${result}`;
    
}
// Fungsi pada callback Fn langsung dimasukkan ke parameter fungsi lain, sehingga tidak usah dikasih nama

// PENDEKATAN 1 (fungsi yang ada di dalam main function hanya bisa dipakai di dalam main function)
console.log(
    printCalculation(function(){
    let angkaA:number = 10;
    let angkaB:number = 30;

    return angkaA + angkaB;
})); //disebut juga Anonymous Function dan eksklusif hanya milik main function 
// mainFunction sifatnya reusable, sedangkan callback tidak

console.log(
    printCalculation(function(){
    let numbA:number = 10;
    let numbB:number = 30;

    return numbA * numbB;
}));

// Penggunaan Arrow Function (Model Penulisan Baru EcmaScript )
// (Bebas mau pakai keyword Function atau Arrow = kesepakatan/standarisasi kode )
console.log(
    printCalculation(()=>{
    let numbA:number = 30;
    let numbB:number = 10;

    return numbA - numbB;
}));

// CASE: Bila mainFunction yang sediakan untuk callback dan callback akan menamppung saja  (PALING SERING DITEMUKAN)

function mainFunction(callbackFn){
    let hurufA:number = 15;
    let hurufB:number = 40;

    const result = callbackFn(hurufA,hurufB);
    return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(mainFunction(function(hurufA:number, hurufB:number){
    console.log(hurufA); // output = 15
    console.log(hurufB); //console log dalam fungsi tujuannya monitoring | output = 40
    
}));


// PENDEKATAN 2 (jarang ditemui dan bikin bingung)

// function pembagian(){
//     let numC:number= 15;
//     let numD:number = 3;

//     return numC / numD;
// }

// console.log(printCalculation(pembagian));


// ARRAY FUNCTION : forEach, map, filter 
// array.forEach(callbackFn) : sebagai opsi lain dari for loop untuk mengakses isi dari tiap data array

const students:string[] = ["Abi","Edo","Aldi"];

// For Loop 
for (let index = 0; index<students.length;index++){
    const value = students[index];
    console.log(`${index+1}. ${value}`);
}

// ForEach (pengganti For Loop)
students.forEach((value,index)=>{ //value dan index tidak harus sama namanya, gak harus value/index. Bisa val/idx, dkk. Tapi lokasinya kalau value nilainya string, kalau index nilai number, lalu ada lagi array [] ==> pelajari dari W3School
    console.log(`${index+1}`); //output: '1','2','3'
    console.log(`${value}`); //output : 'Abi','Edo','Aldo'
    console.log(`${index+1}. ${value}`); //output: '1.Abi','2. Edo','3. Aldi'
});

    // Mini Exercise 
    // Duplikasi cara kerja array.forEach

    function duplicateForEach(arrayData:any[], callbackFn){
    
        for(var index = 0; index<students.length;index++){
            console.log(index); //testing index 

            const value = arrayData[index]; //tampung hasil array pada variabel value 
            console.log(value); //testing value untuk akses isi array  
            
            // Testing Hasil Value dan Indexing melalui variabel 
            const newStudents = `${index+1}. ${value}`
            // Monitoring hasil dengan console log
            console.log(newStudents); //testing hasil indexing dan value;
            
            // Bila OK, balik ke callbackFn
            callbackFn(value,index) // masukkan ke fungsi callbackFn untuk value dan index
        }
    }

    duplicateForEach(students,(value:any,index:number)=>{
        console.log(`${index + 1}. ${value}`);
        
    })

    // Pembahasan MiniExercise 
    /**
     * index merepresentasikan alamat indeks pada array
     * tidak butuh return, soalnya kalo di console.log akan menghasilkan undefined
     * */ 

    function duplicateforEach2(arrayData:any[],callbackFn){
        for(let index = 0; index < arrayData.length;index++){
            const value = arrayData[index];
            callbackFn(value,index)
        }
    }

    duplicateforEach2(students,(value:any,index:number)=>{
        console.log(`${index + 1}. ${value}`);
        
    })

// fungsi array.map(callbackFn) : untuk mengubah seluruh data array menjadi data array yang baru 

    // contoh kasus :
    // [1,2,3] -> x2 -> [2,4,6]
    // ["Abdi","Edo","Aldo"] -> ["1. Abdi","2. Edo","3. Aldo"]
    // ["Abdi","Edo","Aldo"] -> ["Nama saya Abdi","Nama saya Edo","Nama saya Aldo"]
    // [1,2,3]  -> ["Ganjil","Genap","Ganjil"]
    // [1,2,3]  -> ["1","2","3"]
    // [1000,2000,3000] -> ["Rp. 1.000","Rp. 2.000","Rp. 3.000"]

    // Kalau foreach gausah pakai penampung variabel. Kalau map butuh, karena akan menghasilkan array baru shg harus ditampung variabel

    //.map() akan mengubah seluruh data dalam array lama dan memberikan yang sesuai keinginan di array baru 

// Konversi Array 
const dataArray:any[]=[1,2,3,4];

const newArray = dataArray.map((value,index) =>{
    return value * 2;
})

console.log(newArray); //output : [2,4,6,8]

// Contoh 2: Konversi Uang
const uang:number[] = [2000,5000,10000];

const newUang = uang.map((value,index)=>{
    return value.toLocaleString("id",{
        style:"currency",
        currency: "IDR"
    })
})

console.log(newUang);

// Mini Exercise Duplicate Map 

function duplicateMap(arrayData:any[], callbackFn){
    // Isi Code
    const arr:number[] = [];
    
    for(let index = 0; index < arrayData.length;index++){
        
        // console.log(index); //testing index
        // console.log(arrayData[index]); // testing array content
        
        // const value = arrayData[index];
        // console.log(value);

        // const transformasi = callbackFn(value);
        // result.push(transformasi);

        // PEMBAHASAN EXERCISE 
        const value = arrayData[index];
        arr.push(callbackFn(value,index));

            // callbackFn harus dimasukkan karena callback yang akan meng-generate 
            console.log(callbackFn(value,index));
            

    }

    return arr

}

const numberToCurrency = duplicateMap(uang, function(value){
    return value.toLocaleString("id",{
        style:"currency",
        currency: "IDR"
    })

})

console.log(numberToCurrency);

// Fungsi array.filter(callbackFn) : untuk menghasilkan array baru sesuai acuan filter / kondisi (truthy,falsy,comparison,logical) yang diberikan 
//[1,2,3,7,20,12] ==> cari yang genap ==> [2,20,12]

const angkaa:number[] = [1,2,3,7,20,12,3,2,2,1];

const cekangka:number[]= angkaa.filter((value,index)=>{
    // return value % 2 === 0; // angka genap
    return value % 2 !== 0; //angka ganjil
})

console.log(cekangka); 
