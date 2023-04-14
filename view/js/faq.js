$(document).ready(function() {

    $.ajax({
        url: 'http://127.0.0.1:3000/faq/',
        type: 'GET',
        contentType: 'application/json',
        success: function(response) {
            let data = response;
            $("#faq-container").empty();
          
            data.forEach(faqItem => {
              const faqItemDiv = $('<div class="faq-item">'); // Corrected id to class
          
              const questionHeading = $("<h4 class='question'>").text(faqItem.Question); // Corrected id to class
              faqItemDiv.append(questionHeading);
          
              const answerParagraph = $("<p class='answer'>").text(faqItem.Answer); // Corrected id to class
              faqItemDiv.append(answerParagraph);
          
              $("#faq-container").append(faqItemDiv);
            });
          },       
        error: function(xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText;
            alert('Error - ' + error);
        }
    });

});

