// adding current date to jumbotron using Moment.js
var date = moment().format('dddd, MMMM Do');
$("#currentDay").text(date);

var description = $(".description");
var saveButton = $(".saveBtn");

$(document).ready(function() {
    console.log("Ready!")
 
// time blocks need to be color coded to indicate whether the saved task is in the past, present, or future

// need to be able to enter an even/task in each time block


// when you click the save button, it gets saved in local storage


// when you refresh the page, the saved events persists






});