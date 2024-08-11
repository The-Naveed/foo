const log = () => {
const eMail = document.getElementById("mail").value
const password = document.getElementById("pass").value
console.log(eMail,password)
localStorage.setItem("User Email" , eMail)
localStorage.setItem("User Password" , password)
}


const sign = () => {
window.location.replace("./index1.html")}

// const log = () => {
//     window.location.replace("./index.html")}

window.sign = sign
window.log = log
