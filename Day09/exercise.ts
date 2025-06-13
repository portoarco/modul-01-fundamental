interface WorkingSalary{
    totalHour:number;
    totalSalary:number;
    totalOvertime:number;
    addWorkingHour(hours:number):number;
    calculateTS():number;
}

class Employee {
    name:string;
    constructor(name:string){
        this.name = name;
    }
}

class FulltimeEmployee extends Employee implements WorkingSalary {
    totalHour: number = 0;
    totalOvertime:number = 0;
    totalSalary: number = 0;

    constructor(name:string){
        super(name);
    }

    addWorkingHour(hours:number): number {
        this.totalHour = this.totalHour + hours;
        return this.totalHour 
    }

    calculateTS(): number {
        if(this.totalHour <= 6) {
            this.totalSalary = this.totalHour * 100000
        } else {
            this.totalOvertime = this.totalHour - 6;
            this.totalSalary = (6 * 100000) + (this.totalOvertime * 75000)
        }
        return this.totalSalary
    }


}

class ParttimeEmployee extends Employee implements WorkingSalary{
    totalHour: number = 0;
    totalOvertime:number = 0;
    totalSalary: number = 0;

    constructor(name:string){
        super(name);
    }

    addWorkingHour(hours:number): number {
        this.totalHour = this.totalHour + hours;
        return this.totalHour 
    }

    calculateTS(): number {
        if(this.totalHour <= 6) {
            this.totalSalary = this.totalHour * 50000
        } else {
            this.totalOvertime = this.totalHour - 6;
            this.totalSalary = (6 * 50000) + (this.totalOvertime * 30000)
        }
        return this.totalSalary
    }


}


const employeeA = new FulltimeEmployee('adi')
employeeA.addWorkingHour(10);
console.log(employeeA.calculateTS());
console.log(employeeA);

const employeeB = new ParttimeEmployee('ado');
employeeB.addWorkingHour(10);
console.log(employeeB.calculateTS());
console.log(employeeB);











