// Call the dataTables jQuery plugin
$(document).ready(function() {
  loadUsers();
  $('#usersTable').DataTable();
  setUserName();
});

function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}

function setUserName(){
    document.getElementById('txt-email-user').outerHTML = localStorage.email;
}

async function loadUsers(){
    const request = await fetch('api/users', {
      method: 'GET',
      headers: getHeaders()
    });
    const users = await request.json();

    let listadoHtml = '';
    for (let user of users){
        let telephone = user.telephone == null ? '-' : user.telephone;
        let userHtml =
            '<tr>' +
                '<td>'+user.id+'</td>'+
                '<td>'+user.name+'</td>'+
                '<td>'+user.lastname+'</td>'+
                '<td>'+user.email+'</td>'+
                '<td>'+telephone+'</td>' +
                '<td>' +
                    '<a href="#" onclick="deleteUser('+user.id+')" class="btn btn-danger btn-circle btn-sm">' +
                        '<i class="fas fa-trash"></i>' +
                    '</a>' +
                '</td>' +
            '</tr>';
        listadoHtml += userHtml;
    }

    document.querySelector('#usersTable tbody').outerHTML = listadoHtml;
}

async  function deleteUser(id){

    if(!confirm("¿Are you sure you want to delete the user?"))
        return;

    const request = await fetch('api/users/'+ id, {
        method: 'DELETE',
        headers: getHeaders()
    });
    const responseStatus = await request.status;

    if(responseStatus == 200){
        alert("Sucess!! User deleted successfully");
        location.reload();
    }else{
        alert("Error!! User couldn't be deleted");
    }
}
