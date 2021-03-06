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
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");    
        } else if (timeBlock > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    });
    
// going to use .each function in order to populate tasks entered that have been saved in local storage to appropriate row once browser is loaded
    description.each(function() {
        for (let i = 0; i < localStorage.length; i++) {
            let objectKey = localStorage.key(i);
            let taskValue = localStorage.getItem(objectKey);
            let rowHour = $(this).siblings(".hour").text();
        
            if (objectKey === rowHour) {
                $(this).val(taskValue);
            }
        }

    })

    // when you click the save button, this is function needed to save task
    function saveTasks () {
        var rowHour = $(this).siblings(".hour").text();
        var task = $(this).siblings(".description").val();

        console.log(rowHour);
        console.log(task);
        
        if (task ==="") {
            localStorage.setItem(rowHour, "");
        } else {
            localStorage.setItem(rowHour, task);
        }
    }

    saveButton.on("click", saveTasks);
});
