// SOAL 1
/**
 Write a function from a given array of mixed data types and return the sum of all the number
 Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */

// Buat variabel mixedArray
let mixedArray:any[] = ["3",1,"string", null, false,undefined,2,"5","2","1"];

console.log(mixedArray.length);

// Buat fungsi untuk validasi array
    // Buat loop untuk akses data dalam array 
    // Buat conditional statement untuk validasi tipe data 

function jumlahData(){
    let sum:number = 0
    
    for(let i = 0; i<mixedArray.length;i++){       
        console.log(mixedArray[i]); // index testing
        
        if(typeof mixedArray[i] === 'string' && mixedArray[i] !== "string"){
        const result = mixedArray[i];
            // console.log(result); //testing hasil
        let parsingData = parseInt(mixedArray[i])
            // console.log(parsingData);
        
        sum += parsingData
            
        } 
    }

    return sum

}

// Bila hasil OK, tampilkan output
console.log(jumlahData());


 // SOAL 2
/**
 *Write a function that will combine 2 given array into one array
 Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */

 let arr1:number[] = [1, 2, 3];
 let arr2:number[] = [4, 5, 6];
 
 function combineArr(arr1:number[],arr2:number[]){
    return arr1.concat(arr2)
 }

 console.log(combineArr(arr1,arr2));


//  CARA 2 
 function gabungArray(){
    let result:number[] = [];

    // akses array 1
    for(let i = 0; i < arr1.length; i++){
        result.push(arr1[i]);
    }

    // akses array 2 
    for(let i = 0; i < arr2.length; i++){
        result.push(arr2[i]);
    }

    return result
 }

 console.log(gabungArray());
 


 
  // SOAL 3
/**
 *  Write a function to find duplicate values in an array
 Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]    
 */

 let arr3:number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
 
 function hapusDuplikasi(){
    let data:number[] = [];

    arr3.forEach((value)=>{
        if(!data.includes(value)){
            data.push(value);
        } 
        
    });

    return data;

 }

//  Output
    console.log(hapusDuplikasi());
    
 

  // SOAL 4
/**
 *  Write a function to find the difference in 2 given array
 Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]   
 */

 let arr4:number[] = [1, 2, 3, 4, 5]
 let arr5:number[] = [3, 4, 5, 6, 7]

 function findDiff(){
    let gabungkan_arr = arr4.concat(arr5);

    console.log(gabungkan_arr);
    
    return gabungkan_arr;
 }

