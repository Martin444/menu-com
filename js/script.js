var botonLogin = document.getElementById("login-button");
var botonGetStarted = document.querySelectorAll(".get-started");

botonLogin.onclick = () =>{
    window.location.href="https://menucom.netlify.app/;";
}
function getStarted(){
    window.location.href="https://menucom.netlify.app/;#/registrate";
    console.log("click");
}
botonGetStarted[0].onclick = getStarted;
botonGetStarted[1].onclick = getStarted;



