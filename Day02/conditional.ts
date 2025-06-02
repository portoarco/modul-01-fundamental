// CONDITIONAL STATEMENT 

/*

*IF STATEMENT : memeriksa satu buah kondisi 
*IF ... ELSE STATEMENT : memeriksa du kondisi
*IF ... ELSE IF ... ELSE STATEMENT :memeriksa tiga kondisi atau lebih
*SWITCH().. CASE()...STATEMENT : memeriksa data secara spesifik dengan pencocokan nilai/mencocokkan nilai

*/

//Contoh Data 
let nama:string = "XYZ";
let usia:number = 12;

// IF Statement 
/* Aturan Penulisan:
    if(condition){
        //code
    }

*/

/**
 * -condition: kondisi yang diinginkan dalam bentuk boolean
 * -code: baris program yang ingin dijalankan jika condition dalam if 9(bernilai true)
 */

// Contoh
usia  = 100
if(usia > 16){
    const print:string = `${nama} sudah dewasa`
    console.log(print)
} else {
    const print:string = `${nama} BELUM dewasa`
    console.log(print)
}

//const print bisa dipakai di atas karena 2 const tsb ada di area yang berbeda, satunya di area kurawal IF, satunya di area kurawal ELSE 

let isTidur:boolean = true;
if (isTidur){
    console.log("Di kasur Tidurnya");
} else {
    console.log("Bangun Kerja!");
    
}

// IF .. ELSE IF .. ELSE STATEMENT 

/* Aturan Penulisan:
    if(condition){
        //code
    } else if (condition) {
        //code
    } else {
        //code 
    }

*/
// Contoh Klasifikasi Nilai Ujian

//INPUT
const examGrade:number = 70;

//PROCESS
let result:string; //untuk menampung hasil output
if(examGrade >= 90){
    result = "Grade A";
} else if(examGrade >= 80 && examGrade < 90){
    result = "Grade B";
} else if(examGrade >= 70 && examGrade < 80){
    result = "Grade C"
} else {
    result = "Grade F"
}

//OUTPUT
console.log(result);

// SWITCH...CASE...
/**
 * Aturan penulisan:
    Switch(data){
        case value:
            // Code
        default :  kalau tidak ada nilai yang cocok, seperti ELSE 
            // Code
    }
 */

// CONTOH
const job:string ="Coder";

switch(job){
    case "Coder":
        console.log("Membuat App");
        break;
    case "Driver":
        console.log("Nyopir bos");
        break;
    default:
        console.log("Input Gaada Bos");
        
        
    
        
}



