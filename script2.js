  $(document).ready(function () {
  
    //listener event for clicking the save button
  $(".saveBtn").on('click', function() {
    //enabling functionality for the hour index and text areas for the user input
    var hrIndx = $(this).parent()[0].id;
    var eventsText = $(this).siblings("textarea")[0].value.trim();
    localStorage.setItem(hrIndx,eventsText);
    

  });
//setting the curent hour variable so that i can use that in my if statement below
  var currentHour = Number(dayjs().format("HH"));

  //targetting the children in my container, so each individual hour area
  var timePeriod = $("#container-time").children();
  for (i=0; i<timePeriod.length;i++){
    var hourId = timePeriod[i].id;
    //targetting the number in the divs to manipulate each hour
    var hour = Number(hourId.slice(hourId.search("-")+1));

    
    if (currentHour<=hour) {
        //if hour is === right now THEN it is present
        if (hour===currentHour) {
            $(timePeriod[i]).addClass("present")
        } else {
            //if hour is greater than current hour then it is the future
            $(timePeriod[i]).addClass("future")
        }
    } else {
        //otherwise can be in the class of past
      $(timePeriod[i]).addClass("past")
    }
    //local storage to get it to display and stay on the screen after refresh
    var stored = localStorage.getItem(hourId)
    $('#'+hourId).children("textarea").val(stored);
  }

//displaying the date on the screen
  var currentTime = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentTime);

  })

