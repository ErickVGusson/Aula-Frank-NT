$(document).ready(function () {
    $("input").blur(function () {
        if ($(this).val() == "") {
            $(this).css({ "border": "1px solid #f00", "padding": "2px" });
        }
    });
    $("#botao").click(function () {
        var cont = 0;
        $("#form input").each(function () {
            if ($(this).val() == "") {
                $(this).css({ "border": "1px solid #f00", "padding": "2px" });
                cont++
            }
        });
        if (cont == 0) {
            $("#form").submit();
        }
    });
});