function login(){

let name=document.getElementById("username").value.trim();

let pass=document.getElementById("password").value.trim();

if(name==="Jeolchin" && pass==="0506"){

document.body.classList.add("success");

setTimeout(()=>{

window.location.href = "../index.html";

},2500);

}
else{

document.getElementById("error").innerHTML=
"💖 Hmm... Only my favorite person knows this secret.";

}

}