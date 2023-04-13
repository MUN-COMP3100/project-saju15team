$(document).ready (function(){

    $("#get-info-btn").click(function(event){
        event.preventDefault();
        let studentId = $("#student-id").val();
        let crn = $("#crn").val();
        let type = $("#reg-type").val();
        $.ajax({
            url: 'http://127.0.0.1:3000/students3/' + studentId + + '/' + crn + '/' + type,
            type: 'PUT',
            contentType: 'application/json',
            success: function(response) {
                let msg = response.data; 
                console.log("1",msg);
                
                let table = $("<p>" + msg + "</p>");
                $("#get-out").html(table);

            },                   
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + error);
            }
        });
    });
    
});