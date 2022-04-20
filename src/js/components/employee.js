const monthNamesRussian = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
]

function Chart1() {
    var options = {
        series: [{
            name: 'Tips received',
            data: [20, 50, 200, 330, 390, 320, 220]
        }],
        chart: {
            height: 350,
            type: 'bar',

        },
        colors: ['#FA6410'],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
        },
    };


    var chart = new ApexCharts(document.querySelector("#customChart1"), options);
    chart.render();
}

function Chart2() {
    var options = {
        series: [{
            name: 'Number of tips received',
            data: [150, 230, 220, 210, 140, 150, 260]
        }],
        chart: {
            height: 350,
            type: 'line',

        },
        stroke: {
            width: 2,
        },
        colors: ['#FA6410'],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
        },
    };


    var chart = new ApexCharts(document.querySelector("#customChart2"), options);
    chart.render();
}

$(document).ready(function() {

    if (document.querySelector("#customChart1")) {
        Chart1()
    }
    if (document.querySelector("#customChart2")) {
        Chart2()
    }


    $(".rangepicker").daterangepicker({
        autoApply: true,
        "opens": "left",
        "linkedCalendars": false,
        locale: {
            "format": "D MM YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "firstDay": 1
        }
    });

    $('.rangepicker').on('apply.daterangepicker', function(ev, picker) {
        let parent = $(this).parents(".date-picker")
        $(parent).addClass("date-picker--ranged")
        $(parent).find(".date-picker__value").html(`
            ${picker.startDate.format('D.MM.YYYY')} - ${picker.endDate.format('D.MM.YYYY')}
        `)
    });

    $('.transactions__filter .rangepicker').on('apply.daterangepicker', function(ev, picker) {
        let parent = $(this).parents(".transactions__filter")
        $(parent).find(".transactions__reset").addClass("transactions__reset--active")
    });

    $(".transactions__reset").click(function() {
        let parent = $(this).parents(".transactions__filter")
        $(parent).find(".rangepicker").val("")
        $(parent).find(".transactions__reset").removeClass("transactions__reset--active")
        $(parent).find(".date-picker").removeClass("date-picker--ranged")
    })


    $(".filter__period").click(function() {
        $(".filter__period").removeClass("filter__period--active")
        $(this).addClass("filter__period--active")
    })

    $(".employee-qr__link-btn").click(function() {
        let value = $(this).siblings("input").val()
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val(value).select();
        document.execCommand("copy");
        $tmp.remove();
        $("body").append(`
            <div class="alert">
                Text copied !
            </div>`);

        setTimeout(() => {
            $(".alert").remove()
        }, 2000);
    })
})