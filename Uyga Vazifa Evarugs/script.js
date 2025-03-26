const send=document.getElementById("send");
const btn=document.getElementById("btn");
const box=document.getElementById("box");
const modal=document.getElementById("modal");

btn.addEventListener("click",()=>{
    box.style.filter="blur(20px)";
    modal.style.display="block";
})
send.addEventListener("click",()=>{
    box.style.filter="blur(0)";
    modal.style.display="none";
})