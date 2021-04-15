//Removing the Todo Input.
$(".fa-plus").on("click", function() {
    $("#addTodo").toggle(500)
});

// Check and Uncheck Todos
$("ul").on("click", "li", function() {
    $(this).toggleClass("crossOut");
});

//Delete Todos
$("ul").on("click", "span", "li", function() {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
});

//Adding User Input
$("input[type='text']").on("keypress", function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span> <i  class='fas fa-trash'></i></span>" + todoText + "</li>")
    }
});

$("input").on("keyup", function() {
        var maxLength = $(this).attr("maxlength");
        if (maxLength == $(this).val().length) {
            alert("You can't write more than " + maxLength + " characters")
        }
    })
    //