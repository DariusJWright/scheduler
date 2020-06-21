var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var items = {};
var textArea = $("<textarea>").addClass("form-control");
var item = $(".item");


function color (time) {
    var time = item;
    var elem = $(".hour").text();

    time.children().each().removeClass("past present future");
    
    console.log(time);

    if (moment().isAfter(elem)) {
        $(this).children().each().addClass("past");
    }
    else if (moment().isBefore(elem)) {
        $(this).children().each().addClass("future");
    }
    else {
        $(this).children().each().addClass("present");
    }
    console.log(this);
}
setInterval(color, 1000 * 60);


$(".item").on("change", function () {
    items = $(this).val().trim();
    console.log(items);
});



var loadItems = function () {
    
    item.append(textArea);

    items = JSON.parse(localStorage.getItem("item"));

    color();
}

$(".saveBtn").on("click", function () {
    localStorage.setItem("item", JSON.stringify(items));
});


loadItems ();