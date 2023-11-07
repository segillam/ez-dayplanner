// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
for (var i = 1; i < 9; i++){

  var addedLine = $('#hour-0').clone().appendTo('.px-5');
  
  var addedID = 'hour-' + i;
  addedLine.attr('id', addedID);

  var lineTimeHour = dayjs().set('hour', 9).add(i, 'hour').format('hA');
  var lineTimeHourNum = dayjs().set('hour', 9).add(i, 'hour').format('HH');
  $('#' + addedID).children('div').text(lineTimeHour);
  $('#' + addedID).children('textarea').attr('id', 'text' + i);
  $('#' + addedID).children('button').attr('id', 'button' + i);

  var currentTimeHour = dayjs().format('hA');
  var currentTimeHourNum = dayjs().format('HH');
  
  if (currentTimeHourNum > lineTimeHourNum) {
    addedLine.addClass("past");
  } else if (currentTimeHourNum < lineTimeHourNum) {
    addedLine.addClass("future");
  } else {
    addedLine.addClass("present");
  }
  //addedLine.divOfAdded.text([i]);
}

firstDiv = $('#hour-0');
if (currentTimeHourNum > 9) {
  firstDiv.addClass("past");
} else if (currentTimeHourNum < 9) {
  firstDiv.addClass("future");
} else {
  firstDiv.addClass("present");
}

var saveButton = $('#saveBtn');
saveButton.addEventListener('click', function(event) {
  for (var i = 0; i < 9; i++);
  var scheduleContent = document.querySelector()
})
$(function () {
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



//Past "row time-block past"
//Present "row time-block present"
//Future "row time-block future"