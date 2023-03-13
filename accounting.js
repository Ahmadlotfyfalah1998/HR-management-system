'use strict'
let table = document.getElementById("table")
let objArr ;



function gitData(){
    let retArr = localStorage.getItem('employees')
    
     objArr = JSON.parse(retArr)
    console.log(objArr)
    }

gitData()













    let Admin = 0
    let Market = 0
    let devolep =0
    let fin = 0 
function count (arr)   {
    for (let w = 0; w < arr.length; w++) {
        if (arr[w].department=="Administration") {          
               Admin++
       
        }
         else if (arr[w].department=="Marketing"){
 Market++
        }
        else if (arr[w].department=="Development"){
     devolep++
    

        }   
        else if (arr[w].department=="Finance") {
          fin++  
        }

     }
    }

let AdminTotal =0
let MarketTotal =0
let devolepTotal =0
let finTotal=0

function total (arr){


    for (let r = 0; r < arr.length; r++) {
        if (arr[r].department=="Administration") {          
               AdminTotal= AdminTotal +arr[r].salary   
       
        }
         else if (arr[r].department=="Marketing"){
    MarketTotal= MarketTotal +arr[r].salary
        }
        else if (arr[r].department=="Development"){
     devolepTotal =devolepTotal +arr[r].salary
    

        }   
        else if (arr[r].department=="Finance") {
          finTotal =finTotal +arr[r].salary
        }
       AdminTotal= Math.floor(AdminTotal)
      MarketTotal=  Math.floor(MarketTotal)
      devolepTotal = Math.floor(devolepTotal)
      finTotal = Math.floor(finTotal)

     }






}

let AdminAvrge =0
let MarketAvrge =0
let devolepAvrge =0
let finAvrge =0

function average (){
    AdminAvrge=  Math.floor( AdminTotal/Admin)
    MarketAvrge=  Math.floor( MarketTotal/Market)
    devolepAvrge=  Math.floor( devolepTotal/devolep)
    finAvrge= Math.floor(finTotal/fin)

}







let totalNumberr = 0
let totalSalaryy =0
let totalAveragee =0

    total(objArr)
    count(objArr)
    average()





 function totalNumber(){

totalNumberr= Admin+Market+devolep+fin
    
 }
function totalSalary(){
totalSalaryy= AdminTotal+MarketTotal+devolepTotal+finTotal

}

function totalAverage(){
totalAveragee= AdminAvrge+MarketAvrge+devolepAvrge+finAvrge

}











totalNumber()
totalSalary()
totalAverage()

 function tableRender ()  {
    // count(objArr)
    console.log(Admin,Market,devolep,fin)
 let trEl = document.createElement('tr')
 table.appendChild(trEl)
 
 let tdEL = document.createElement('td')
 tdEL.textContent ="Administration"
 trEl.appendChild(tdEL)

 
  let tdEL2 = document.createElement('td')
   tdEL2.textContent =`${Admin}`
  trEl.appendChild(tdEL2)
  let tdEl3 =document.createElement('td')
 tdEl3.textContent =`${AdminTotal}`
 trEl.appendChild(tdEl3)
 let td4 =document.createElement('td')
 td4.textContent=`${AdminAvrge}`
 trEl.appendChild(td4)




//2nd row\\



 let trEl2 = document.createElement('tr')
 table.appendChild(trEl2)
 
 let tdEL4 = document.createElement('td')
 tdEL4.textContent ="Marketing"
 trEl2.appendChild(tdEL4)

 
  let tdEL5 = document.createElement('td')
   tdEL5.textContent =`${Market}`
  trEl2.appendChild(tdEL5)

  let tdEl6 =document.createElement('td')
 tdEl6.textContent =`${MarketTotal}`
 trEl2.appendChild(tdEl6)

 let td2 =document.createElement('td')
 td2.textContent=`${MarketAvrge}`
 trEl2.appendChild(td2)


//3rd row\\


let trEl3 = document.createElement('tr')
 table.appendChild(trEl3)
 
 let tdEL7 = document.createElement('td')
 tdEL7.textContent ="Devolepment"
 trEl3.appendChild(tdEL7)

 
  let tdEL8 = document.createElement('td')
   tdEL8.textContent =`${devolep}`
  trEl3.appendChild(tdEL8)

  let tdEl9 =document.createElement('td')
 tdEl9.textContent =`${devolepTotal}`
 trEl3.appendChild(tdEl9)

 let td3 =document.createElement('td')
 td3.textContent=`${devolepAvrge}`
 trEl3.appendChild(td3)


//4th row\\


 let trEl4 = document.createElement('tr')
 table.appendChild(trEl4)
 
 let tdEL11 = document.createElement('td')
 tdEL11.textContent ="Finance"
 trEl4.appendChild(tdEL11)

 
  let tdEL12 = document.createElement('td')
   tdEL12.textContent =`${fin}`
  trEl4.appendChild(tdEL12)

  let tdEl13 =document.createElement('td')
 tdEl13.textContent =`${finTotal}`
 trEl4.appendChild(tdEl13)

 let td7 =document.createElement('td')
 td7.textContent=`${finAvrge}`
 trEl4.appendChild(td7)




//5th row\\



let trEl6 = document.createElement('tr')
 table.appendChild(trEl6)
 
 let tdEL15 = document.createElement('td')
 tdEL15.textContent ="Total"
 trEl6.appendChild(tdEL15)

 
  let tdEL16 = document.createElement('td')
   tdEL16.textContent =`${totalNumberr}`
  trEl6.appendChild(tdEL16)

  let tdEl17 =document.createElement('td')
 tdEl17.textContent =`${totalSalaryy}`
 trEl6.appendChild(tdEl17)

 let td8 =document.createElement('td')
 td8.textContent=`${totalAveragee}`
 trEl6.appendChild(td8)









 }
 tableRender()