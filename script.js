function login(){

let u = document.getElementById("user").value;

let p = document.getElementById("pass").value;

if(u === "admin" && p === "admin123"){

localStorage.setItem("role","admin");

window.location.href = "dashboard.html";

}

else if(u === "teacher" && p === "teacher123"){

localStorage.setItem("role","teacher");

window.location.href = "dashboard.html";

}

else{

document.getElementById("msg").innerText =
"Wrong Login";

}

}
