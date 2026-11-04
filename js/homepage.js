var newsList = JSON.parse(localStorage.getItem("newsList"));
    if (newsList == null || typeof(newsList) == "undefined") {
        newslist = [];
    }




$(document).ready(function() {

    var html = '';

    for (var news of newsList) {
        html += `
        <div class="col-lg-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="${news.link}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.content}</p>
                </div>
            </div>
        </div>
        `;
    }

    $('#newsList').html(html);
});