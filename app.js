'use strict';
const allEmployees =[]
function Employee (id,fullName,department,level,imageUrl,salary){
this.id=id;
this.fullName= fullName;
this.department=department;
this.level=level;
this.imageUrl=imageUrl;
this.salary=0;
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

return  Math.floor(this.salary)
}
// Employee.prototype.render= function (){
// document.write(`<h3>name is : ${this.fullName} and his/her salary is = ${this.salary}</h3>`)


// }
let divvEl = document.getElementById("divv")
//let mainEl =document.getElementsByTagName("main")
let sectionEl =document.getElementById("secc")
 let ghaziSamer = new Employee (1000,"Ghazi Samer","Administration","Senior","asset/Ghazi.jpg")
let lanaAli = new Employee (1001,"Lana Ali","Finance","Senior","asset/Lana.jpg")
 let tamaraAyoub = new Employee (1002,"Tamara Ayoub","Marketing","Senior","asset/Tamara.jpg")
 let safiWalid = new Employee (1003,"Safi Walid","Administration","Mid-Senior","asset/Safi.jpg")
 let omerZaid= new Employee (1004,"Omar Zaid","Development","Senior","asset/Omar.jpg")
 let ranaSaleh = new Employee (1005,"Rana Saleh","Development","Junior","asset/Rana.jpg")
 let hadiAhmad = new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior","asset/Hadi.jpg")

Employee.prototype.render= function(){
    let imgEl = document.createElement('img')
    imgEl.src=this.imageUrl
    divvEl.appendChild(imgEl)
     
  
    let infoEl= document.createElement('h4')
     infoEl.innerText=`id : ${this.idGenerator()}  -  name : ${this.fullName}
     department : ${this,this.department}
     level : ${this.level} - salary :${this.salaryCalculation()}`
     divvEl.appendChild(infoEl)
     
  
    //let nameEl = document.createElement('h3') 
//nameEl.textContent=`the name is ${this.fullName}`
//divvEl.appendChild(nameEl)

//let departmentEl=document.createElement('h4')
//departmentEl.textContent=`department : ${this.department}`
//divvEl.appendChild(departmentEl)

//let levelEl = document.createElement('h4')
//levelEl.textContent= `level : ${this.level}`
//divvEl.appendChild(levelEl)









 //let salaryEl = document.createElement('h4')
 //salaryEl.textContent=`salary is ${this.salaryCalculation()}`
 //divvEl.appendChild(salaryEl)
  
    }
// for (let index = 0; index < allEmployees.length; index++) {
//     allEmployees[index].salaryCalculation()
//     allEmployees[index].render()
    
// 
Employee.prototype.idGenerator = function (){
    this.id= Math.floor(Math.random()*9000+1000)
    
for (let j = 0;j < allEmployees.length;j++) {

    if (this.id==allEmployees[j].id){
    
        this.id= Math.floor(Math.random()*9000+1000)
    
    }
}
 return this.id
}
let form = document.getElementById("form")


form.addEventListener("submit",submitHandeler)
function submitHandeler(event){
event.preventDefault()
let id=5555
let fullName = event.target.fname.value

let level = event.target.level.value
let department = event.target.departmenttt.value
let imageUrl = event.target.img.value

console.log(fullName,department,level,imageUrl)

let newemp = new Employee(id,fullName,department,level,imageUrl)


  




newemp.render()

}


ghaziSamer.render()
lanaAli.render()
tamaraAyoub.render()
safiWalid.render()
omerZaid.render()
ranaSaleh.render()
hadiAhmad.render()

//ghaziSamer.render()
// for (let index = 0; index < allEmployees.length; index++) {
// allEmployees[index].render()


console.log(allEmployees)
