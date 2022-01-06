var currentTime = moment().format("[Today's date is] MMM Do, YYYY.");
$("#currentDay").text(currentTime);

var saveBtn = $(".saveBtn");
var parentEl = saveBtn.parent();

//pseudocode written in NB

saveBtn.on("click", function(event) {
    var currentTime = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    console.log(currentTime, text);
    localStorage.setItem(currentTime, text);
});
