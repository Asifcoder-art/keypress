const changeMyKey = document.getElementById("changeMyKey");

const input = document.getElementById("input");

document.addEventListener("keypress",(event)=>{
    changeMyKey.innerHTML = event.key;
})