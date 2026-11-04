$(document).ready(function() {
    $('#loginBtn').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();
        

        if (username == "" || password == "") {
            alert("Username or password is empty!")
            return;
        }

        if (username == "admin" && password == "123456") {
            alert("Login successful!")
            window.location.href = "news.html";

        } else {
            alert("Username/Password is not correct, try again!");
        }
    });
});