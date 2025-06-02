// LOOPING STATEMENT : Penulisan code yang ditujukan untuk mengulang eksekusi suatu program hingga kondisi tertentu 

// Cara Looping Statement 

/*
    1. WHILE LOOP : perulangan program yang berjalan selama kondisi masih terpenuhi 
    Aturan Penulisan:
    while(condition){
        // Code 
    
    };
    condition: kondisi yang diinginkan dalam bentuk boolean TRUTHLY/FALSY/COMPARISON/LOGICAL


    2. DO...WHILE : kalau while loop scopenya tidak langsung jalan. Kalau while condition dulu diperiksa dan code didalam scope jalan. Kalau do, code dijalankan dulu baru cek kondisi. Jadi kalau while bisa tidak jalan sama sekali, kalau do bisa jalan

    Aturan Penulisan:
    Do {
        //Code
    } While(condition)

    3. FOR..LOOP  = digunakan ketika batas looping sudah ditentukan sejak awal 
    
    Aturan Penulisan:
    for(counter_declaration; counter_condition; counter){
        //code 
    }


    - counter_delaration: variabel yang definisikan nilai awal dari hitungan batas looping . 
    - counter_condition: kondisi untuk menentukan batas looping
    - counter : proses perhitungan increment/decrement 

*/ 

// PostFix = untuk INCREMENT dan DECREMENT angka 

// Contoh WHILE LOOP 

let count:number =1;
while(count <= 10){
    console.log(count);
    count++; //PostFix Count = count+1 (increment); kalau mau kelipatan 2 count+2 
    // ++count //Prefix
}

// WHILE LOOP Cara 1 (dengan Truthly/Falsy)

while(true){
    count++;
    if(count === 15){
        console.log(count);
        break;//Bila tidak pakai variabel penampung maka harus BREAK
    }
}

// WHILE LOOP cara 2 dengan ditampung
let isBoolean:boolean = true;

while(isBoolean){
    count++;
    if(count === 25){
        console.log(count);
        isBoolean = false; 
    }
}

// DO...While Contoh
// Code jalan dulu baru diperiksa sesuai kondisi syarat
let counter:number = 1;
do{
    console.log(counter);
    counter++; 
} while(counter < 1);

//Explanation: code dijalankan dulu, jadi meskipun tidak memenuhi < 1, angka 1 tetep diexecute dulu baru setelahnya kalo kondisi false, maka stop execute 

// Contoh FOR 
for(let i:number = 0; i < 10; i++){
    console.log(i);   
} 

// Latihan FOR LOOP
/* Buatkan hasil akhirnya seperti ini
console.log(cetak) = "0:Genap | 1:Ganjil | 2:Genap, ....etc" 

*/ 

const limit = 7;
let cetak:string = "";

for(let i:number = 0; i < limit; i++){
    if(i % 2 === 0){
        cetak += `${i} : GENAP | `;
    } else {
        cetak += `${i} : GANJIL |  `;   
    };
}
console.log(cetak); //CONSOLE LOG sebagai OUTPUT 

// Catatan: Jangan masukkan console log di dalam looping, karena tiap looping akan muncul. Maka consolelog tampilkan di luar for loop
// Kalau di dalam for loop itu fungsinya untuk monitoring proses, kalau di luar maka jadi output







