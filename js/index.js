const nama = document.getElementById("user");
const pass = document.getElementById("pass");
const login = document.getElementById("login");
login.addEventListener("submit",function(e){
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data_user"));
    for (let i = 0; i < data.length; i++) {    
        if(nama.value == data[i].user && pass.value==data[i].pass){
            const username = data[i].user;
            localStorage.setItem('username', JSON.stringify(username));
            alert("Berhasil")
            window.location.href="home.html";
            break;
        }
    };
    if(data.find(item=>item.user===nama.value)){
    }else{
        alert("Akun belum terdaftar")
    }
})
