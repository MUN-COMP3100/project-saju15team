$(document).ready (function(){

    $("#get-info-btn").click(function(event){
        event.preventDefault();
        let email = $("#email").val();
        $.ajax({
            url: 'http://127.0.0.1:3000/professors/' + email.toLowerCase(),
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                let data = response;
                console.log('1',response); 
                if (data === "Not a registered email!") {
                    $("#get-out").html("Email not valid, Check again!");
                } else {
                    // Creating the HTML table
                    var table = '<table class="table-container">' +
                    '<tr><th>Name</th><th>Email</th><th>Department</th><th>Room</th></tr>' +
                    '<tr><td>' + data[0].first_name + ' ' + data[0].last_name + '</td><td>' + data[0].email + '</td><td>' + data[0].department + '</td><td>' + data[0].office + '</td></tr>' +
                    '</table>';
                    $("#get-out").html(table);
                }
            },                   
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + error);
            }
        });
    });
    
});