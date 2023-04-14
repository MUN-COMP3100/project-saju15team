$(document).ready (function(){


    $("#get-schedule-btn").click(function(event){
        let studentId = $("student-id").val();
        event.preventDefault();
        $.ajax({
            url: 'http://127.0.0.1:3000/students6/' + studentId,
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                 let data = response; // Assuming response is an array of objects
                //console.log(data);
                //console.log('2',data === 'No course was found');

                // Check if data is empty 
                if (!data || (typeof data === 'string' && data === "No registered courses")) {
                    $("#get-out").html("No registered courses were found.");
                } else {
                   let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                   let table = "<table><tr><th>Time</th>";

                   // Create table header with days of the week
                   for (let day of daysOfWeek) {
                   table += "<th>" + day + "</th>";
                   }
                   table += "</tr>";

                   // Create table rows for each hour from 8am to 5pm
                   for (let i = 8; i <= 17; i++) {
                   table += "<tr><td>" + i + ":00</td>";

                  // Create table columns for each day of the week
                  for (let day of daysOfWeek) {
                  table += "<td></td>";
                  }
                  table += "</tr>";
                }

               // Place course objects in the table with the column and row matching day and time of the course object
               for (let course of data) {
               let startTime = parseInt(course.start_time.slice(0,2));
               let endTime = parseInt(course.end_time.slice(0,2));
               let dayIndex = daysOfWeek.indexOf(course.days);

               for (let i = startTime; i < endTime; i++) {
               let rowIndex = i - 8;
               let cell = table.rows[rowIndex].cells[dayIndex+1];
               cell.innerHTML += course.name + "<br>" + course.room  + "<br>" + course.instructor + "<br>";
                }
            }

        $("#get-out").html(table);
                  
            }},                   
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + error);
            }
        });
    });
});