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

let divvEl = document.getElementById("divv")

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
     
  
    
  
    }

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


let newemp = new Employee(id,fullName,department,level,imageUrl)

//console.log(allEmployees)
  




newemp.render()
saveData(allEmployees)

// for (let index = 0; index < allEmployees.length; index++) {
//     allEmployees[index].render()
    
// }


}


 ghaziSamer.render()
 lanaAli.render()
 tamaraAyoub.render()
 safiWalid.render()
 omerZaid.render()
 ranaSaleh.render()
 hadiAhmad.render()






 function saveData(data){

     let stringArr = JSON.stringify(data)
     localStorage.setItem('employees',stringArr)


 }

function gitData(){
let retArr = localStorage.getItem('employees')
console.log(retArr)
let objArr = JSON.parse(retArr)
console.log(objArr)
}


 



//gitData()


//  for (let o = 0; o < allEmployees.length; o++) {
//    console.log(allEmployees[o])
    
 //}
 //localStorage.clear()