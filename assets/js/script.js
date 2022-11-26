console.log("script loaded");

// Jquery for clicking action on "Choose a Category Dropdown"
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



// Function to add all the checked todo task in an array named itemsToBeDeleted
itemsToBeDeleted = [];

function addItemsforDelete(data) {
  // Checking condition when user un-select the checkbox
  //After de-selecting, the item id is removed from the array.
  if (itemsToBeDeleted.includes(data)) {
    let ind = itemsToBeDeleted.indexOf(data);

    delete itemsToBeDeleted[ind];
  } else {
    itemsToBeDeleted.push(data);
  }
}

// Function to send the fetch request with item item to route.
function deletefiles() {
  while (itemsToBeDeleted.length > 0) {
    fetch("/delete-task/?id=" + itemsToBeDeleted.pop());
    window.location.reload();
  }
}



