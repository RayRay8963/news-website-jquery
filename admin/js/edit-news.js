var newsList = JSON.parse(localStorage.getItem("newsList"));

if (newsList == null || typeof(newsList) == "undefined") {
    newsList = [];
}

$(document).ready(function() {
    var newsDetail = JSON.parse(localStorage.getItem('newsDetail'));
    $('#link').val(newsDetail['link']);
    $('#title').val(newsDetail['title']);
    $('#content').val(newsDetail['content']);

    $('#editNewsBtn').click(function () {
        var link = $('#link').val();
        var title = $('#title').val();
        var content = $('#content').val();

        if (link == "") {
            alert("Thumbnail is empty!")
            return;
        }

        if (title == "") {
            alert("Title is empty!")
            return;
        }

        if (content == "") {
            alert("Content is empty!")
            return;
        }

        for (var index in newsList) {
            if (newsList[index]['id'] == newsDetail['id']) {
                newsList[index]['link'] = link;
                newsList[index]['title'] = title;
                newsList[index]['content'] = content;
            }
        }
        
        localStorage.setItem("newsList", JSON.stringify(newsList));

        alert("Updated news successfully!");

        window.location.href = "news.html";
    });
});
