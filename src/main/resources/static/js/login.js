$(document).ready(function() {

});

async function login(){
    let data = {};
    data.email = document.getElementById("txtemail").value;
    data.password = document.getElementById("txtpassword").value;

    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const response = await request.text();

    if(response == "OK"){
        window.location.href = "users.html";
    }else{
        alert("Credentials are incorrect!");
    }
}
