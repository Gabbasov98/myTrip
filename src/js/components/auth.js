$(document).ready(function() {


    $(".auth__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        console.log(path)
        $(".auth__tab").removeClass("auth__tab--active")
        $(this).addClass("auth__tab--active")
        $(".auth__content").removeClass("auth__content--active")
        $(`.auth__content[data-tab-path="${path}"]`).addClass("auth__content--active")
    })

})