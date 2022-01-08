var time = moment()

function displayDay () {
    var currentTime = time.format("[Today's date is] MMM Do, YYYY.");
    $("#currentDay").text(currentTime);
}
setInterval(displayDay, 1000);

for (var i = 9; i < 18; i++) {
    var stringi = String(i);
    var storedData = localStorage.getItem(stringi);
    var targetid = "hour-" + stringi;
    $("#" + targetid).children().eq(1).text(storedData);
}

var saveBtn = $(".saveBtn");
var parentEl = saveBtn.parent();

$(".time-block").each(function() {
    var hour = $(this).attr("id").split("-");
    var hourNum = hour[1];
    var hourParse = parseInt(hourNum);

    if (hourParse < time.hour()) {
        $(this).addClass("past")
    }
    if (hourParse === time.hour()) {
        $(this).addClass("present");
    }
   if (hourParse > time.hour()) {
        $(this).addClass("future");
    }
});

saveBtn.on("click", function(event) {
    var hour = $(this).parent().attr("id").split("-");
    var hourNum = hour[1];
    var text = $(this).siblings(".description").val();
    localStorage.setItem(hourNum, text); 
});
