//hour nine
var saveBtn1 = $('#hour-9 .saveBtn')
var textArea1 = $('#hour-9 textarea');
var div9 = $('#hour-9');
//hour ten
var saveBtn2 = $('#hour-10 .saveBtn')
var textArea2 = $('#hour-10 textarea');
var div10 = $('#hour-10');
//hour eleven
var saveBtn3



var currentTime = dayjs().format('MMMM D, YYYY');
$('#currentDay').text(currentTime);
retrieved();
var timeBlock = $('.time-block')

// var savedNotes = JSON.parse(localStorage.getItem("super-notes"))


function retrieved() {
  var retrievedText = JSON.parse(localStorage.getItem('text1'));
  textArea1.val(retrievedText);
}


//listener event for a click that runs a function that does local storage
saveBtn1.on('click', function(event) {
  event.preventDefault();
  var text = textArea1.val();
  localStorage.setItem('textArea1', JSON.stringify(text));
  console.log(text);
  retrieved('textArea1');
});
function retrieved() {
  var retrievedText = JSON.parse(localStorage.getItem('textArea1'));
  textArea1.val(retrievedText);
}
//if hour is <now THEN it is past
//if hour is === right now THEN it is present
//if hour is >now THEN it is the future

// div9.removeClass('future').addClass('present');





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });




