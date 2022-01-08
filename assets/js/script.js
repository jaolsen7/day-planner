var time = moment()

function displayDay () {
    var currentTime = time.format("[Today's date is] MMM Do, YYYY.");
    $("#currentDay").text(currentTime);
}

setInterval(displayDay, 1000);

var saveBtn = $(".saveBtn");
var parentEl = saveBtn.parent();

$(".time-block").each(function() {
    var hour = $(this).attr("id").split("-");
    var hourNum = hour[1];
    var hourParse = parseInt(hourNum);

    if (hourParse === time.hour()) {

    }
});

saveBtn.on("click", function(event) {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text); 
});
