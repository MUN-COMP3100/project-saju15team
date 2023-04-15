$(document).ready(function() {
    $("#get-schedule-btn").click(function(event) {
      event.preventDefault();
      let studentId = $("#student-id").val();
      $.ajax({
        url: 'http://127.0.0.1:3000/students6/' + studentId,
        type: 'GET',
        contentType: 'application/json',
        success: function(response) {
            let data = response;
            console.log('1', data);
        
            // Create a table element dynamically
            let table = $("<table></table>");
        
            // Create table headers for days of the week
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let headerRow = $("<tr></tr>");
            for (let i = 0; i < days.length; i++) {
                headerRow.append("<th>" + days[i] + "</th>");
            }
            table.append(headerRow);
        
            // Create table rows for each course
            for (let i = 0; i < data.length; i++) {
                let course = data[i];
        
                // Create a new row for each course
                let row = $("<tr></tr>");
        
                // Loop through each day in the 'days' attribute of the course object
                // and create a cell with course details for each corresponding day
                for (let j = 0; j < days.length; j++) {
                    let day = days[j];
        
                    // Check if the course is offered on the current day
                    if (course.days.indexOf(day.charAt(0)) !== -1) {
        
                        // Create a cell for the course with its details
                        let cell = $("<td></td>");
                        cell.text(course.subject + ' ' + course.number + ' - ' + course.start_time + ' to ' + course.end_time);
                        row.append(cell);
        
                        // Add a class to the cell to indicate the day of the week
                        cell.addClass(day);
                    } else {
                        // Create an empty cell for days where the course is not offered
                        row.append("<td></td>");
                    }
                }
        
                table.append(row);
            }
        
            // Append the table to the output element
            $("#get-out").html(table);
        }
        ,
        error: function(xhr, status, error) {
          var errorMessage = xhr.status + ': ' + xhr.statusText
          alert('Error - ' + error);
        }
      });
    });
  
    // Helper function to get day abbreviation based on index (0 for Monday, 1 for Tuesday, etc.)
    function getDayAbbreviation(index) {
      let days = ['M', 'T', 'W', 'R', 'F'];
      return days[index];
    }
  });
  
  