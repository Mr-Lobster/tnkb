var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
});

$.ajax({
    url: "src/changelog.md",
    success: function (data) {
        $("#changelog").html(marked(data));
    },
});

$(document).ready(function () {
    $.getJSON("src/output.json", "null", function (data) {
        var x = data[0]["apkData"];
        $("h6").text("V." + x["versionName"] + "+" + x["versionCode"]);
    });
});
