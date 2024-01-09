console.log("window location = ",window.location)
console.log("window location href = ",window.location.href)
console.log("hostname = ",window.location.hostname)
console.log("location host = ",window.location.host)
console.log("Pathname = ",window.location.pathname)
console.log("Protocol used = ",window.location.protocol)
// console.log(window.location.assign("https://www.google.com/"))

// let btn1=document.getElementById("btn1");
// btn1.addEventListener('click',open_google())

// window.location.assign() not work on addEventListner() only work on html functions like... onclick=function_name()
function open_google(){
    window.location.assign("https://www.google.com/")
}

function open_Youtube1(){
    window.location.assign("https://www.youtube.com/")
}