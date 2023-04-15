$(document).ready (function(){

    $("#login-button").click(function(event){
        event.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();
        $.ajax({
            url: 'http://127.0.0.1:3000/students3/' + email + '/' + password,
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                let data = response;
                console.log('1', data);
                if (Number.isInteger(Number(data))) { // Check if data is an integer
                    // Redirect to main.html
                    window.location.href = '../html/main.html';
                } else {
                    // Print data to get-out
                    $("#get-out").html("<p>" + data + "</p>");
                }
            },                   
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + error);
            }
        });
    });
    
});