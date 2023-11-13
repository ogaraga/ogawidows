
const oneTime = document.getElementById("btn_one");
const monTime = document.getElementById("btn_mon");
const oneTimMon = document.getElementById("one_time");
const monTimMon = document.getElementById("_monthly");

const sim_1 = document.getElementById("sim-1");
const sim_2 = document.getElementById("sim-2");

monTime.addEventListener("click",()=>{
    if (monTimMon.style.display === "none") {
       monTimMon.style.display = "flex";
       oneTimMon.style.display = "none"; 
    }
    else{
        monTimMon.style.display = "flex"; 
    }
    
} )

oneTime.addEventListener("click",()=>{
    if (monTimMon.style.display === "flex") {
       oneTimMon.style.display = "flex"; 
       monTimMon.style.display = "none";
    }
    else{
       oneTimMon.style.display = "flex";
        
    }    
} )

var once = document.getElementById("one-time");
var monthly = document.getElementById("monthly");
var total_1 = document.getElementById("total_1");
var total_2 = document.getElementById("total_2");
var naira = document.getElementById("naira");
var dollar = document.getElementById("dollar");
var pounds = document.getElementById("pounds");
var euro = document.getElementById("euro");
var naira2 = document.getElementById("naira_2");
var dollar2 = document.getElementById("dollar_2");
var pounds2 = document.getElementById("pounds_2");
var euro2 = document.getElementById("euro_2");
function Fmoney(Fvalue){
    total_1.value = "";
    total_1.value += `₦${Fvalue}`;
    
    if(sim_1.value === "USD"){
        total_1.value = "";
        dollar.value = "USD"
        total_1.value += `$${Fvalue}`;
    }
    
    else if(sim_1.value === "GBP"){
        total_1.value = "";
        pounds.value = "GBP";
        total_1.value += `£${Fvalue}`;

    }

    else if(sim_1.value === "EUR"){
        total_1.value = "";
        euro.value = "EUR";
        total_1.value += `€${Fvalue}`;

    }
    else{
        total_1.value = `₦${Fvalue}`;
        naira.value = "NGN";
    }
}
function Fcash(fvalue) {
    total_2.value = "";
    total_2.value += `₦${fvalue}`;
    
    if(sim_2.value === "USD"){
        total_2.value = "";
        dollar2.value = "USD"
        total_2.value += `$${fvalue}`;
    }
    
    else if(sim_2.value === "GBP"){
        total_2.value = "";
        pounds2.value = "GBP";
        total_2.value += `£${fvalue}`;

    }

    else if(sim_2.value === "EUR"){
        total_2.value = "";
        euro2.value = "EUR";
        total_2.value += `€${fvalue}`;

    }
    else{
        total_2.value = `₦${fvalue}`;
        naira2.value = "NGN";
    }

}
const next = document.getElementById("next");
const validation = document.getElementById("validated");
next.onclick = ()=>{
    
    if(total_1.value !== "" || total_2.value !== ""){
        validation.innerText = "Selection saved successfully";
        validation.style.color = "darkgreen";
        total_1.value = "";
        total_2.value = "";
    }
    else{
        validation.innerText = "Try make selection if you can";
        validation.style.color = "red";
    }

}
oneTime.onclick = ()=>{
    validation.innerText = "";
    total_1.value = "";
    total_2.value = "";
}
monTime.onclick = ()=>{
    validation.innerText = "";
    total_1.value = "";
    total_2.value = "";
}