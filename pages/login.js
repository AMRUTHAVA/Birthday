function login(){

let name=document.getElementById("username").value.trim();

let pass=document.getElementById("password").value.trim();

if(name==="Akhila" && pass==="Forever"){

document.body.classList.add("success");

setTimeout(()=>{

window.location="index.html";

},2500);

}
else{

document.getElementById("error").innerHTML=
"💖 Hmm... Only my favorite person knows this secret.";

}

}