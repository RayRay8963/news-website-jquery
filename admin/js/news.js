var newsList = JSON.parse(localStorage.getItem("newsList"));
    if (newsList == null || typeof(newsList) == "undefined") {
        newslist = [];
    }




$(document).ready(function() {

    var html = '';

    for (var news of newsList) {
        html += `
        <tr>
            <td>${news['id']}</td>
            <td>
                <img src="${news['link']}" width="200">
            </td>
            <td>${news['title']}</td>
            <td>${news['content']}</td>
            <td width="130">
                <button type="button" class="btn btn-sm btn-success" onclick="editNews('${news['id']}')">Edit</button>
                <button type="button" class="btn btn-sm btn-danger" onclick="deleteNews('${news['id']}')">Delete</button>
            </td>
        </tr>
        `;
    }

    $('#newsList').html(html);
});

function deleteNews(newsId) {
    var confirmDelete = confirm("Are you sure you want to delete this news?");

    if (confirmDelete) {
        filterNews = newsList.filter(function(value) {
            return value.id != newsId;
        });

        localStorage.setItem("newsList", JSON.stringify(filterNews));

        alert("Deleted news successfully!");

        location.reload();
    }
}

function editNews(newsId) {
    newsDetail = newsList.filter(function(value) {
        return value.id == newsId;
    });

    localStorage.setItem("newsDetail", JSON.stringify(newsDetail[0]));

    window.location.href = "edit-news.html"
}