var newsList = JSON.parse(localStorage.getItem("newsList"));

if (newsList == null || typeof(newsList) == "undefined") {
    newsList = [];
}

$(document).ready(function () {
    $('#addNewsBtn').click(function () {
        var link = $('#link').val();
        var title = $('#title').val();
        var content = $('#content').val();

        if (link == "") {
            alert("Thumbnail is empty!");
            return;
        }

        if (title == "") {
            alert("Title is empty!");
            return;
        }

        if (content == "") {
            alert("Content is empty!");
            return;
        }

        var news = {
            "link": link,
            "title": title,
            "content": content
        };

        if (newsList.length < 0) {
            news.id = '#' + 1;
        } else {
            news.id = '#' + (newsList.length + 1);
        }

        newsList.push(news);


        localStorage.setItem("newsList", JSON.stringify(newsList));

        $("#link").val("");
        $("#title").val("");
        $("#content").val("");

        alert("Created news succesfully!")
    })
})