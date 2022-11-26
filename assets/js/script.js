console.log('script loaded');
$("select").on("click", function () {

    $(this).parent(".category").toggleClass("open");

});

$(document).mouseup(function (e) {
    var container = $(".category");

    if (container.has(e.target).length === 0) {
        container.removeClass("open");
    }
});


$("select").on("change", function () {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".selection-choice").html(selection);

});


itemsToBeDeleted = []

function addItemsforDelete(data) {

    if (itemsToBeDeleted.includes(data)) {
        let ind = itemsToBeDeleted.indexOf(data);

        delete itemsToBeDeleted[ind];
    } else {
        itemsToBeDeleted.push(data)
    }

    console.log(itemsToBeDeleted)
}

function deletefiles() {
    while (itemsToBeDeleted.length > 0) {

        fetch('/delete-task/?id=' + itemsToBeDeleted.pop());
        window.location.reload();

    }


}