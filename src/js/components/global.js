$(document).ready(function() {
    let val = $(".form-group input").val()
    let val2 = $(".form-group textarea").val()

    $(".form-group input").each(function(index, el) {
        if (val) {
            $(el).addClass("input-active")
        } else {
            $(el).removeClass("input-active")
        }
    });

    $(".form-group textarea").each(function(index, el) {
        if (val2) {
            $(el).addClass("input-active")
        } else {
            $(el).removeClass("input-active")
        }
    });

    $(".form-group input").change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-active")
        } else {
            $(this).removeClass("input-active")
        }
    })

    $(".form-group textarea").change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-active")
        } else {
            $(this).removeClass("input-active")
        }
    })



    $("#theme").change(function() {
        let dark = $(this).prop("checked")
        localStorage.setItem("dark", dark)
        setTheme()
    })

    setTheme()

    $(".cabinet__btn").click(function() {
        $(this).toggleClass("cabinet__btn--active")
        $(".cabinet-sidebar").toggleClass("cabinet-sidebar--active")
        $("body").toggleClass("fixed-body")
    })

    $(".pagination__input-show").click(function() {
        $(this).parents(".pagination__input").addClass("pagination__input--active")
    })



    $(document).mouseup(function(e) {
        var div = $('.pagination__input-hidden');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).parents(".pagination__input").hasClass("pagination__input--active")) {
                $(div).parents(".pagination__input").removeClass("pagination__input--active")
            }
        }
    });
})

function setTheme() {
    let dark = localStorage.getItem("dark")
    if (dark === "true") {
        $("#theme").prop("checked", true)
        $(".cabinet").addClass("cabinet--dark")
        $(".modal").addClass("modal--dark")
    } else {
        $("#theme").prop("checked", false)
        $(".cabinet").removeClass("cabinet--dark")
        $(".modal").removeClass("modal--dark")
    }
}