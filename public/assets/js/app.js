
$(function () {
    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-input").val().trim(),
            devoured: false
        };
        $('#burger-input').val('');
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
            );
    });
    $(".devour-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newBurgerStatus = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function () {
                location.reload();
            }
            );
    });

});