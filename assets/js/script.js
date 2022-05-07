// adding current date to jumbotron using Moment.js
var date = moment().format('dddd, MMMM Do');
$("#currentDay").text(date);

var description = $(".description");
var saveButton = $(".saveBtn");
var currentHour = moment().hour();


$(document).ready(function() {
    console.log("Ready!")
// time blocks need to be color coded to indicate whether the saved task is in the past, present, or future, do this by parsing the id in each textarea, which is same as time of the day
    description.each(function () {
        let timeBlock = parseInt($(this).attr("id"));
         // using conditional statement to determine if currentHour is in present, past, or future   
        if (timeBlock === currentHour) {
                


        }





    })

// need to be able to enter an even/task in each time block


// when you click the save button, it gets saved in local storage


// when you refresh the page, the saved events persists






});