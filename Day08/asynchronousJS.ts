import {testModule} from "./testFunction"

// Program berjalan secara sekuens : mengeksekusi dari atas ke bawah

// Synchronous: kode dieksekusi berdasarkan urutan perintah
    console.log('Memulai Proses');
    let res:number = 5+5;
    console.log('Hasil penjulahan:',res);
    console.log('Proses Selesai');




// Asynchronous : kode dieksekusi berdasarkan running time/waktu proses

console.log('Memulai Proses');
setTimeout(()=>{
    console.log('Ini akan dijalankan setelah 2 detik');
    
},2000) //2000 ms = 2 detik /2 second

console.log('Proses Selesai');

// CALLBACK: pemanggilan fungsi yang diteruskan ke argumen untuk diproses ke dalam parameter fungsi lainnya

// Contoh 1 (Alarm)
function setAlarm(time:number, callback: ()=> void){
    console.log(`Alarm disetel untuk ${time} detik ke depan`);
    setTimeout(()=> {
        callback()
    },time * 1000)
    
}

function ringAlarm(){
    console.log('Alarm berbunyi! Waktunya Bangun');
}

setAlarm(5,ringAlarm);

// Contoh 2 (PR)
function doHomeWork(task:string, callback:()=> void) {
    console.log(`Mengerjakan tugas : ${task}`)
    setTimeout(()=> {
        console.log(`Tugas ${task} telah selesai `);
        callback()
    },4000)
}
    // void dipakai karena fungsi callback akan menerima parameter dari fungsi yang akan digunakan serta tidak menghasilkan return apapun, hanya menghasilkan console.log

function nextTask(){
    console.log("Sekarang lanjut mengepel lantai");
}

doHomeWork('Menyapu lantai',nextTask)

// Contoh 3 (Cek Kodam)
function checkKhodam(participantName:string){
    console.log((`Cek Kodam dari : ${participantName}`));
    let probability:number = Math.floor(Math.random()*6) //dikali 6 karena ada 5 kemungkinan muncul dan 1 kemungkinan tidak ada kodam

    // math.floor ? karena kalo pakai math random angka muncul 0,1232141221 gak bulet


    setTimeout(() =>{
        switch(probability){
            case 1:
                console.log('Rawa Rontek');
                break;
            case 2:
                console.log('Macan Putih');
                break;
            case 3:
                console.log('Macan Putih');
                break;
            case 4:
                console.log('Macan Putih');
                break;
            case 5:
                console.log('Macan Putih');
                break;
            default:
                console.log('Tidak ada kodam');
                
        }
        console.log('Cek Kodam Selesai ... ');
    },4000)
}


// PROMISE : menghasilkan result dari sebuah kejadian  
// tujuan: untuk menangkap hasil sucess/failed dari suatu kejadian

// Contoh 1 = order online driver
interface Driver {
    name:string,
    arrivingIn:string
}

function checkDriverAvailability(): Promise<Driver> {
    return new Promise((resolve,reject)=> {
        console.log("Mengecek ketersediaan Driver ...");

        setTimeout(()=> {
            const driverAvailability:number = Math.floor(Math.random()*10)
            if(driverAvailability >=4){
                resolve({
                    name:"Budi",
                    arrivingIn: "5 menit"
                })
    } else {
        reject('Tidak ada driver tersedia')
        }
    },4000)
    })
}

checkDriverAvailability()
    .then((response)=> {
        console.log('ketika berhasil:',response);
    })
    .catch((error)=> {
        console.log('ketika gagal: ',error);
    })

// Contoh 2 -- Pelemparan Koin 
function checkCoin(){
    return new Promise((resolve,reject)=>{
        console.log("Melempar koin ...");

        setTimeout(()=>{
            let coins = Math.round(Math.random()*2); //Math.floor tidak dipakai karena kalo floor bisa dibuletin ke bawah terus
            if(coins === 1){
                resolve('Berhasil menemukan burung garuda')
            } else {
                reject('Gagal menemukan burung garuda')
            }

        },3000)  
    })
}

checkCoin()

// ERROR HANDLING PROMISE = 
    // then : kejadian yang sesuai ekspektasi
    // catch : kejadian yang tidak sesuai ekspektasi / gagal
    // finally : mau then / catch tapi tetap akan muncul 

    .then((response) => {
        console.log('Hasil pelemparan ketika sukses',response)
    }) 
    .catch((error) => {
        console.log('Hasil pelemparan ketika gagal:',error);
    })

// ASYNCHRONOUS AWAIT 
// bisa eksekusi fungsi promise dalam fungsi yang lain 

// contoh 1 : memanggang kue 
interface CakeResult {
    status: 'success' | 'failed',
    result:string
}

function bakeCake(): Promise<CakeResult> {
    return new Promise((resolve,reject) => {
        console.log('Sedang memanggang kue');
        setTimeout(()=> {
            const isPerfect = Math.round(Math.random()*10)
            if(isPerfect >= 5){
                resolve({
                    status : 'success',
                    result : 'Kue sudah matang sempurna'
                })
            } else {
                reject({
                    status: 'failed',
                    result : 'Kue gosong'
                })
            }
        })
    })
}
async function serveCake(): Promise<void> {
    try {
        setTimeout(() => {
            console.log('Proses pemanggangan dimulai ...')
        }, 2000);
        const result: CakeResult = await bakeCake()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

serveCake();

// Promise void : karena tidak ada return dalam fungsi tsb. 
// satu kesatuan : asynch...await 

// yang diberikan await akan diprioritaskan dulu
// asynch await: nunggu dulu pemanggangan dulu selesai baru akan dieksekusi resultnya. Ditunggu bener sampe selesai baru dikasi


// ERROR HANDLING  throw : throw bisa diinterupsi di tengah-tengah fungsi, gak usah nunggu sucess dulu . Bisanya digunakan untuk validasi-validasi 




testModule() //untuk menjalankan fungsi yang diimport dari testFuntion.ts