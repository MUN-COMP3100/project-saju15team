$(document).ready (function(){
    
    let studentId = $("#studentId").val();
    $.ajax({
        url: 'http://127.0.0.1:3000/students1/' + studentId,
        type: 'GET',
        contentType: 'application/json',
        success: function(response) {
        let data = response;
        // Populate table with data
        $("#first_name-data").text(data.first_name);
        $("#last_name-data").text(data.last_name);
        $("#studentId-data").text(data.studentId);
        $("#email-data").text(data.email);
        $("#phone-data").text(data.phone);
        $("#address-data").text(data.address);

    },
    error: function(xhr, status, error) {
      // Handle error
      console.log("Error:", error);
    }
  });
  
  // Display names to the side of the table
  $("#first_name").text(data[0]);
  $("#last_name").text(data[1]);
  $("#studentId").text(data[2]);
  $("#email").text(data[3]);
  $("#phone").text(data[5]);
  $("#address").text(data[4]);

  
});
    
