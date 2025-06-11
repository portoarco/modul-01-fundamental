/*
Exercise 1
 ● Create a function to calculate array of student data
 ● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
 ● Parameters : array of student
 ● Return values :
    ○ Object with this following properties: 
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/ 

// Sampel Data Siswa

// Buat struktur datanya
interface IStudent {
    nama:string,
    email:string,
    age:number,
    score:number
}

// Buat list array dan object databasenya di dataSiswa

const dataSiswa:IStudent[] = [
    {
        nama : "anto",
        email: "anto@gmail.com",
        age: 20,
        score: 90
    },
    {
        nama : "anti",
        email: "anti@gmail.com",
        age: 25,
        score: 85
    },
    {
        nama : "anta",
        email: "anta@gmail.com",
        age: 28,
        score: 40
    }
]
    // testing isi array 
        // console.log(dataSiswa);
        // console.log(dataSiswa[0].nama);
        // console.log(dataSiswa[0].email);

// score function 
function hitungScore(){
    let totalScore:number = 0;
    let highestScore:number = dataSiswa[0].score;
    let lowestScore:number = dataSiswa[0].score;
    let averageScore:number = 0;
    
    for(let i = 0; i < dataSiswa.length;i++){
        
        // console.log(dataSiswa[i].score); // testing akses score siswa
        const score = dataSiswa[i].score
         
        // total score
        totalScore = totalScore + score;

        // highest score 
        highestScore = Math.max(highestScore, dataSiswa[i].score)

        // lowest score 
        lowestScore = Math.min(lowestScore,dataSiswa[i].score)

        // Average score 
        averageScore = Math.round(totalScore / dataSiswa.length)
    }

    return `Total score : ${totalScore} | Highest score : ${highestScore} | Lowest score : ${lowestScore} | Average score : ${averageScore}`

}

// age function 

function cekUmur(){
    let totalAge = dataSiswa[0].age;
    let highestAge = dataSiswa[0].age;
    let lowestAge = dataSiswa[0].age;
    let averageAge = 0;

    for(let i = 0; i < dataSiswa.length; i++){
        const age = dataSiswa[i].age
         
        // total score
        totalAge = totalAge + age;

        // highest score 
        highestAge = Math.max(highestAge, dataSiswa[i].age)

        // lowest score 
        lowestAge = Math.min(lowestAge,dataSiswa[i].age)

        // Average score 
        averageAge = Math.round(totalAge / dataSiswa.length)
    }
    

    return `Total Umur: ${totalAge} | Highest age : ${highestAge} years | Lowest age : ${lowestAge} Years | Average age : ${averageAge} years`
}
// Output 
console.log(hitungScore());
console.log(cekUmur());


// PEMBAHASAN EXERCISE 1  = cara MAS BAGAS 

interface Student {
    name: string,
    email: string,
    age: Date,
    score: number
}

interface StatResult {
    highest: number,
    lowest: number,
    average: number
}

interface StudentStatsResult {
    score: StatResult,
    age: StatResult
}

class StudentStatsCalculator {
    private student: Student[]

    constructor(student: Student[]) {
        this.student = student
    }

    private calculateAge(birthDate: Date) {
        const today = new Date()
        const actualBirthDate = new Date(birthDate)


        const age = today.getFullYear() - actualBirthDate.getFullYear()
        const hasHadBirthdayThisYear = today.getMonth() > actualBirthDate.getMonth() ||
            (today.getMonth() === actualBirthDate.getMonth() && today.getDate() >= actualBirthDate.getDate())
        return hasHadBirthdayThisYear ? age : age - 1
    }

    private calculateStats(values: number[]) {
        const highest = Math.max(...values)
        const lowest = Math.min(...values)

        const average = values.reduce((acc, val) => acc + val, 0) / values.length

        return {
            highest, lowest, average: parseFloat(average.toFixed(2))
        }
    }

    public getStats() {
        const scores = this.student.map((student) => student.score)
        const ages: any = this.student.map((student) => this.calculateAge(student.age))

        return {
            score: this.calculateStats(scores),
            age: this.calculateStats(ages)
        }
    }

}

const listStudent: Student[] = [
    {
        name: 'Alice',
        email: 'alice@example.com',
        age: new Date('2002-06-10'),
        score: 88
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        age: new Date('2001-07-08'),
        score: 92
    },
    {
        name: 'Charlie',
        email: 'charlie@example.com',
        age: new Date('2001-05-10'),
        score: 75
    }
]

// const calculator = new StudentStatsCalculator(listStudent)
// console.log(calculator.getStats())


