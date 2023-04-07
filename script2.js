//waits until document fully loads
$(document).ready(function () {
    //creates a variable set to the current month day and year
    var currentTime = dayjs().format("MMMM D, YYYY");
    $("#theDate").text(currentTime);
  
    // Add a click event listener to all save buttons
    $(".saveBtn").click(function () {
      // Get the user input from the textarea in the same time-block
      var description = $(this).siblings(".description").val();
  
      // Get the id of the time-block containing the save button
      var timeBlockId = $(this).parent().attr("id");
  
      // Save the description in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, description);
    });
  

    // Loop through all time-blocks
    $(".time-block").each(function () {
      // Get the id of the current time-block
      var timeBlockId = $(this).attr("id");
  
      // Get the stored value for this time-block from local storage
      var storedValue = localStorage.getItem(timeBlockId);
  
      // If there is a stored value, set the textarea value to it
      if (storedValue !== null) {
        $(this).find(".description").val(storedValue);
      }
    });
  
    //running the setinterval function to make sure it stays accurate to the second
    setInterval(function () {
      //loop through all time-blocks
      $(".time-block").each(function () {
        // Get the id of the current time-block
        var timeBlockId = $(this).attr("id");
  
        //remove "hour-" part of the id
        var hourStr = timeBlockId.slice(5);
  
        //create variables for each item and turn them into integers
        var hourNum = parseInt(hourStr);
        var timeNum = parseInt(dayjs().format("H"));
  
        //Set the past, present, and future class if the time is =,< to the current time
        if (hourNum < timeNum) {
          $(this).addClass("past");
        } else if (hourNum == timeNum) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      }, 1000);
    });
  });








  
  $(document).ready(function () {
  
  $(".saveBtn").on('click', function() {
    var hrIndx = $(this).parent()[0].id;
    var eventsText = $(this).siblings("textarea")[0].value.trim();
    localStorage.setItem(hrIndx,eventsText);
    console.log(text);
    // retrieved('textArea');
  });

  var currentHour = Number(dayjs().format("HH"));
  
  var timePeriod = $(".container-lg").children();
  for (i=0; i<timePeriod.length;i++){
    var hourId = timePeriod[i].id;
    var hour = Number(hourId.slice(hourId.search("-")+1));
    
    if (currentHour<=hour) {
      if (hour===currentHour) {
        $(timePeriod[i]).addClass("present")
      } else {
        $(timePeriod[i]).addClass("future")
      }
    } else {
      $(timePeriod[i]).addClass("past")
    }
  }
  var currentTime = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentTime);
  retrieved();
  })