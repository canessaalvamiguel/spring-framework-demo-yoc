$(document).ready(function() {

});

async function createUser(){
    let data = {};
    data.name = document.getElementById("txtname").value;
    data.lastname = document.getElementById("txtlastname").value;
    data.email = document.getElementById("txtemail").value;
    data.password = document.getElementById("txtpassword").value;

    let confirmedPassword = document.getElementById("txtconfirmedpassword").value;

    if(confirmedPassword != data.password){
        alert("The passwords doesn't match!!");
        return false;
    }

    const request = await fetch('api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const response = await request;
}
