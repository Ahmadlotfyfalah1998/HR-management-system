'use strict';
const allEmployees =[]
function Employee (id,fullName,department,level,imageUrl,salary){
this.id=id;
this.fullName= fullName;
this.department=department;
this.level=level;
this.imageUrl=imageUrl;
this.salary=salary;
allEmployees.push(this)
}

Employee.prototype.salaryCalculation= function (){
if (this.level=="Junior"){
this.salary=Math.floor(Math.random()*(1000-500))+500
}
else if (this.level=="Mid-Senior"){
this.salary=Math.floor(Math.random()*(1500-1000))+1000
}

else if (this.level=="Senior"){
this.salary=Math.floor(Math.random()*(2000-1500))+1500
}

this.salary=this.salary*(1-0.075)

return this.salary
}
Employee.prototype.render= function (){
document.write(`<h3>name is : ${this.fullName} and his/her salary is = ${this.salary}</h3>`)


}



let ghaziSamer = new Employee (1000,"Ghazi Samer","Administration","Senior")
let lanaAli = new Employee (1001,"Lana Ali","Finance","Senior")
let tamaraAyoub = new Employee (1002,"Tamara Ayoub","Marketing","Senior")
let safiWalid = new Employee (1003,"Safi Walid","Administration","Mid-Senior")
let omerZaid= new Employee (1004,"Omar Zaid","Development","Senior")
let ranaSaleh = new Employee (1005,"Rana Saleh","Development","Junior")
let hadiAhmad = new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior")


for (let index = 0; index < allEmployees.length; index++) {
    allEmployees[index].salaryCalculation()
    allEmployees[index].render()
    
}