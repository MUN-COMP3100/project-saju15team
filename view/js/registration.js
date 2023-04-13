$(document).ready (function(){

    $("#add-btn").click(function(event){
        event.preventDefault();
        let studentId = $("#student-id").val();
        let crn = $("#crn").val();
            $.ajax({
                url: 'http://127.0.0.1:3000/students3/' + studentId + '/' + crn + '/add',
                type: 'PUT',
                contentType: 'application/json',
                success: function(response) {
                    let msg = response; 
                    console.log(msg);
                    
                    let output = $("<h2>" + msg + "</h2>");
                    $("#get-out2").html(output);
    
                },                   
                error: function(xhr, status, error){
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    alert('Error - ' + error);
                }
            });
    });

    $("#drop-btn").click(function(event){
        event.preventDefault();
        let studentId = $("#student-id").val();
        let crn = $("#crn").val();
            $.ajax({
                url: 'http://127.0.0.1:3000/students3/' + studentId  + '/' + crn + '/drop',
                type: 'PUT',
                contentType: 'application/json',
                success: function(response) {
                    let msg = response; 
                    console.log(msg);
                    
                    let output = $("<h2>" + msg + "</h2>");
                    $("#get-out2").html(output);
    
                },                   
                error: function(xhr, status, error){
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    alert('Error - ' + error);
                }
            });
    });
    
});