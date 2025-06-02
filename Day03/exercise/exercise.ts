// Soal 1 
/*
Write a code to check whether the number is odd or even
 ○ Example: 25 → odd number, 2 → even number
*/ 

let inputNumber:number = 25;

if(inputNumber % 2 === 0){
    console.log(`${inputNumber} adalah angka GENAP`);
    
} else {
    console.log(`${inputNumber} adalah angka GANJIL`);
}


// Soal 2 
/*
Write a code to check whether the number is prime number or not
 ○ Example: 7 → 7 is a prime number
 ○ Example: 6 → 6 is not a prime number
*/ 

// Syarat Bilangan Prima 
/**
 * Bilangan bulat positif
 * Lebih besar dari 1
 * Hanya punya 2 faktor yaitu 1 dan bilangan itu sendiri 
*/ 

let inputAngkaPrima:number = 6; 
let isPrime:boolean = true;

if(inputAngkaPrima <= 1){
    console.log(`${inputAngkaPrima} BUKAN bilangan prima`);
} else {
    for(let i = 2; i < inputAngkaPrima; i++){
        if(inputAngkaPrima % i === 0){
            isPrime = false; 
            break;
        } 
    }
    if(isPrime === false){
        console.log(`${inputAngkaPrima} BUKAN bilangan Prima`);
    } else {
        console.log(`${inputAngkaPrima} ADALAH bilangan Prima`);
        
    }
}



// Soal 3
/*
Write a code to find the sum of the numbers 1 to N
 ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
 ○ Example: 3 → 1 + 2 + 3 = 6
*/ 

let inputAngkaSum:number = 5;
let hasilJumlahAngka:number = 0;

for(let i:number = 1; i <= inputAngkaSum; i++){
    // console.log(i); Testing
   hasilJumlahAngka = hasilJumlahAngka + i; //atau shortcut : hasilJumlahAngka += i;
}
console.log(hasilJumlahAngka);



// Soal 4
/*
Write a code to find factorial of a number
 ○ Example: 4! → 4 x 3 x 2 x 1 = 24
 ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/ 
let inputAngkaFaktorial:number = 4;
let hasilFaktorial:number = 1;

for(let i:number = inputAngkaFaktorial; i > 0; i--){
    hasilFaktorial *= i; //Ket: hasilFaktorial = hasilFaktorial * i 
}

console.log(hasilFaktorial);


// Soal 5
/*
Write a code to print the first N fibonacci numbers
 ○ Example: 15 → 610
*/ 
let inputAngkaFibonaci:number= 3; //F(n) ==> F(3)
let a:number = 0; // F(n-2)
let b:number = 1; // F(n-1)

for(let i = 0; i < inputAngkaFibonaci; i++){
    let temp:number = b+a; //F(n) = F(n-1) + F(n-2)
    a = b;
    b= temp;
    console.log(a);
}
console.log(a);












