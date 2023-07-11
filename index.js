let saveEl = document.getElementById("save-el") //fetching html details
let countEl =document.getElementById("counte")
console.log(countEl)
console.log(saveEl)
let count=0
function increment(){
    count = count+1
    countEl.innerText= count
}
//create a fucntion save() which logs out the count when it is called
function save(){
    let countStr =count + " - "  //creating the variable
    saveEl.innerText += countStr
    countEl.textContent=0
    count=0
    console.log(count)
}
save()
//welcome message
let welcomeEL = document.getElementById("welcome-el")

    name = "Users"
    greeting ="Good Morning  "
    total = greeting + name
    welcomeEL.textContent= total
    
//how to add emoji? in two ways
    // welcomeEL.innerText=welcomeEL.innerText + "👋 "
    welcomeEL.innerText += "👋 "
