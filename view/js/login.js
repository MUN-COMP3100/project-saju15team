$(document).ready (function(){

    $("#login-button").click(function(event){
        event.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();
        $.ajax({
            url: 'http://127.0.0.1:3000/students3/' + email.toUpperCase() + password.toUpperCase(),
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                let data = response; // Assuming response is an array of objects
                //console.log(data);
                //console.log('2',data === 'No course was found');

                // Check if data is empty 
                if ((typeof data === 'string' && data === "invalid credentials!")) {
                    $("#get-out").html("invalid credential!");
                } else {
                    localStorage.setItem("token",data.password);//should have been data.token    
                }
            },                   
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + error);
            }
        });
    });
    
});