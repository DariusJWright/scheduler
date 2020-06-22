var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var items = {};
var textArea = $("<textarea>").addClass("form-control");
var item = $(".item");


var color = function (itemTime) {
    console.log(itemTime);
    console.log(itemTime.children());
    var elem = $(".hour").text();
    var time = moment(elem).format("hh:mm:ss");

    itemTime.children().each().removeClass("past present future");
    
    

    if (moment().isAfter(time)) {
        $(itemTime).children().each().addClass("past");
    }
    else if (moment().isBefore(time)) {
        $(itemTime).children().each().addClass("future");
    }
    else {
        $(itemTime).children().each().addClass("present");
    }
}
setInterval(color(item), 1000 * 60);

var loadItems = function () {
    item.append(textArea);

    items = JSON.parse(localStorage.getItem("item"));

    color(item);
}

$(".saveBtn").on("click", function () {
    localStorage.setItem("item", JSON.stringify(items));
});


loadItems ();