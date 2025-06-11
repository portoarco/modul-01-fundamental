// Exercise 1 
/*
Create a function to merge two array of student data and remove duplicate data
 ● Student data : name & email
 ● Example : 
Array1 → [
 { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  }
 ]
 Array2 → [
 { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 3’, email : ‘student3@mail.com’  }
 ]
 ● Result : 
ArrayResult → [
 { name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  },
 { name: ‘Student 3’, email : ‘student3@mail.com’  

*/ 
interface IStudent {
    nama:string
    email:string
}

let array1:IStudent[] = [
    {
        nama : 'Student 5',
        email : 'student5@mail.com'
    },
    { 
        nama: 'Student 2', 
        email : 'student2@mail.com'  
    },
    { 
        nama: 'Student 4', 
        email : 'student4@mail.com'  
    },
    { 
        nama: 'Student 6', 
        email : 'student6@mail.com'  
    }

]
let array2:IStudent[] = [
    { nama: 'Student 1', 
    email : 'student1@mail.com'  }, 
    { nama: 'Student 3', 
    email : 'student3@mail.com'  },
    { 
        nama: 'Student 5', 
        email : 'student5@mail.com'  
    },
    { 
        nama: 'Student 6', 
        email : 'student7@mail.com'  
    }

]


// console.log(mergerArray);

class MergerStudent {
    students:IStudent[]

    constructor(array1:IStudent[],array2:IStudent[]){
        this.students = [...array1,...array2];
    }

    nonDuplicateStudents(){
        const uniqueStudent:IStudent[] = []
        for(let i = 0; i<this.students.length;i++){
            const current = this.students[i];
            const isDuplicate = uniqueStudent.some(student => student.email === current.email || student.nama === current.nama);

            if (!isDuplicate){
                uniqueStudent.push(current)
            }
        }
        return uniqueStudent
    }
}

const mergerArray = new MergerStudent(array1,array2)
const result = mergerArray.nonDuplicateStudents();

console.log(result);


// Exercise 2 
/*
 ● Create a function that can accept input as an array of objects and switch all values into property and 
property into value
 ● Example : 
    ○ Input : [{ name: ‘David’, age: 20 }]
    ○ Output : [{ David: ‘name’, 20: ‘age’}]
*/

const Person = {
    name: "David",
    age : 20
}
const entries = Object.entries(Person); 
console.log(entries); //masing-masing property dan value dibuat jadi array, tiap array berisi : [key,value] 

const switchEntries = entries.map(([key,value])=> [value,key]);
console.log(switchEntries); //.map akan ulang isi tiap array dari [key,value] lalu dibalik jadi [value,key]


const switchObject = Object.fromEntries(switchEntries);
console.log(switchObject); 

// Exercise 3 

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } 

  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5))





















