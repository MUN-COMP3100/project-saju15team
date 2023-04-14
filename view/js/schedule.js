$(document).ready (function(){

        let schedule = $("#schedule").val();
        $.ajax({
            url: 'http://127.0.0.1:3000/student6/' + schedule.toUpperCase(),
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
                    
                    let table = $("<table>");
                    
                    // Create table header row
                    let headerRow = $("<tr>");
                    headerRow.append("<th>Subject</th>");
                    headerRow.append("<th>Number</th>");
                    headerRow.append("<th>Name</th>");
                    headerRow.append("<th>Description</th>");
                    headerRow.append("<th>Credit Hours</th>");
                    headerRow.append("<th>CRN</th>");
                    headerRow.append("<th>Section</th>");
                    headerRow.append("<th>Type</th>");
                    headerRow.append("<th>Start Time</th>");
                    headerRow.append("<th>End Time</th>");
                    headerRow.append("<th>Days</th>");
                    headerRow.append("<th>Room</th>");
                    headerRow.append("<th>Instructors</th>");
                
                    table.append(headerRow);
                
                    // Loop through the data array and create table rows
                    for (let i = 0; i < data.length; i++) {
                        let rowData = data[i];
                        let row = $("<tr>");
                        row.append("<td>" + rowData.subject + "</td>");
                        row.append("<td>" + rowData.number + "</td>");
                        row.append("<td>" + rowData.name + "</td>");
                        row.append("<td>" + rowData.description + "</td>");
                        row.append("<td>" + rowData.credit_hours + "</td>");
                        row.append("<td>" + rowData.crn + "</td>");
                        row.append("<td>" + rowData.section + "</td>");
                        row.append("<td>" + rowData.type + "</td>");
                        row.append("<td>" + rowData.start_time + "</td>");
                        row.append("<td>" + rowData.end_time + "</td>");
                        row.append("<td>" + rowData.days + "</td>");
                        row.append("<td>" + rowData.room + "</td>");
                        row.append("<td>" + rowData.instructors + "</td>");
                
                        table.append(row);
                    }

                    $("#get-out").html(table);
                }
            },                   
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + error);
            }
        });
    });