const nama=localStorage.getItem("username");
const show = document.getElementById("salam");
const user = JSON.parse(nama);
show.innerHTML="<h2>WELCOME TO COFFESHOP "+user.toUpperCase()+"</h2>";
