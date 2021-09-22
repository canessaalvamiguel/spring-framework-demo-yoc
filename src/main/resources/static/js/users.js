// Call the dataTables jQuery plugin
$(document).ready(function() {
  loadUsers();
  $('#usersTable').DataTable();
});

async function loadUsers(){
    const request = await fetch('users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const users = await request.json();

    let listadoHtml = '';
    for (let user of users){
        let userHtml =
            '<tr>' +
                '<td>'+user.id+'</td>'+
                '<td>'+user.name+'</td>'+
                '<td>'+user.lastname+'</td>'+
                '<td>'+user.email+'</td>'+
                '<td>'+user.telephone+'</td>' +
                '<td>' +
                    '<a href="#" class="btn btn-danger btn-circle btn-sm">' +
                        '<i class="fas fa-trash"></i>' +
                    '</a>' +
                '</td>' +
            '</tr>';
        listadoHtml += userHtml;
    }

    document.querySelector('#usersTable tbody').outerHTML = listadoHtml;
}
