const button = document.getElementById("daftar");
const retrieveddata = localStorage.getItem('data_user');

button.onclick=regist;
function regist(e){
    e.preventDefault();
    const data  = JSON.parse(retrieveddata) || [];

    const nama = document.getElementById("user");
    const pw = document.getElementById("pass");
    const email = document.getElementById("email");
    const data_user={
        user:nama.value,
        pass:pw.value,
        email:email.value
    };
    data.push(data_user);
    // nama_konsumen.push(nama.value);
    // pass_konsumen.push(pw.value);
    localStorage.setItem('data_user', JSON.stringify(data));
    // localStorage.setItem('nama', JSON.stringify(nama_konsumen));
    // localStorage.setItem('pass', JSON.stringify(pass_konsumen));
    alert("Berhasil")
    window.location.href='index.html';
}