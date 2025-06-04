// SOAL 1
/*Write a function to get the lowest, highest and average value in the array (with and without sort function).
 Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

// WITHOUT SORT FUNCTION 
    // Buat Variabel INPUT
    let arr:number[] = [12,5,23,18,4,45,32];

    // ---PROCESS--
    // Buat fungsi min
    function minValue(arr:number[]){
        return Math.min.apply(null, arr);
    }
    // console.log(minValue(arr)); //min value testing

    // Buat fungsi max
    function maxValue(arr:number[]){
        return Math.max.apply(null,arr);
    }
    // console.log(maxValue(arr)); //max value testing
    
    // Buat fungsi average 
    function averageValue(arr:number[]){
        let sum = 0;

        for(let i:number = 0; i < arr.length; i++){
            sum += arr[i];
        }

        // Return rumus average = total nilai / banyak data 
        return sum / arr.length;        

    }
    // console.log(averageValue(arr));
    
    // OUTPUT 
    let view = `Lowest value : ${minValue(arr)} | Highest Value : ${maxValue(arr)} | Average Value : ${averageValue(arr)} `
    console.log(view);
    
    
// SOAL 2
/*Write a function that takes an array of words and returns a string by concatenating the words in the array, 
separated by commas and - the last word - by an 'and'.
 Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

// INPUT 
let fruits:string[] = ["apple","banana","cherry","date"];

// PROCESS (Menampilkan hasil output berupa koma dan memberi jeda + "and" pada teks terakhir)
function cekText(){


    // Membuat variabel penampung hasil sementara
    let temp = "";
    let firstArray = fruits[0];
    let secondArray = fruits[1];
    let lastArray = fruits[fruits.length - 1];
    
    // console.log(firstArray); // Testing First Array
    // console.log(lastArray); // Testing Last Array
    
    for(let i:number = 0; i < fruits.length; i++){
        
        if(fruits.length === 0){
            return temp;
        } else if(fruits.length === 1){
            return firstArray;
        } else if (fruits.length <= 2){
            temp = `${firstArray} and ${secondArray}`;
        } else if (fruits.length >= 3){
            temp = `${fruits.slice(0,-1)}, and ${lastArray}`;
        } else {
            console.log("Invalid");
        }
    }
    return temp;
}

// OUTPUT
console.log(cekText());



// SOAL 3
/*Write a function from a given array of numbers and return the second smallest number
 Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

let angka:number[]= [5,3,1,7,2,6];


function firstSmallest(){
    let temp = angka[0];
    for(let i:number = 0; i < angka.length; i++){
        if(angka[i] < temp){
            temp = angka[i];
        }
    }
    return temp;
}


function secondSmallest(){
    let temp:number = firstSmallest();
    let angkaPembanding:number = angka[0];
    
    for(let j:number = 0; j < angka.length; j++){
        if(angka[j] > temp && angka[j] < angkaPembanding){
            angkaPembanding = angka[j];
        }
    }
    return angkaPembanding;
}

// OUTPUT 
    let outputt = `Angka Terkecil Kedua adalah ${secondSmallest()}`;
    console.log(outputt);
    


// SOAL 4
/*Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are 
of the same length.
 Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

// INPUT

let num1:number[] = [1,2,3];
let num2:number[] = [3,2,1];

// PROCESS

function penjumlahan(num1:number[],num2:number[]){
    // Destructuring Array
    let [a,b,c] = num1;
    let [d,e,f] = num2;
    const hasil = [a+d,b+e,c+f];

    return hasil;   
}

// OUTPUT VIEW
    let hasilJumlah = `[${num1}] + [${num2}] => [${penjumlahan(num1,num2)}]`;
    console.log(hasilJumlah);
    
// SOAL 5
/*
Write a function that adds an element to the end of an array. However, the element should only be added if it is 
not already in the array.
 a.Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
b. Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
*/

let ar:number[] = [1,2,3,4]
let newElement:number = 4;

function tambahArray(){
    // Buat fungsi Pengecekan 
    for(let i:number = 0; i < ar.length; i++){
        // Buat pencocokan
        if(ar[i] === newElement){
            return ar;
        } 
    }
    // Bila TIDAK SAMA dengan New Element
    ar.push(newElement);
    return ar;
}

console.log(tambahArray());
