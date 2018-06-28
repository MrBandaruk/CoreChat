$(function () {
    var userName = localStorage.getItem("Username") || "user";

    var protocol = location.protocol === "https:" ? "wss:" : "ws:";
    var wsUri = protocol + "//" + window.location.host;
    console.log(wsUri);
    var socket = new WebSocket(wsUri);
    socket.onopen = e => {
        console.log("socket opened", e);
    };

    socket.onclose = function (e) {
        console.log("socket closed", e);
    };

    socket.onmessage = function (e) {
        console.log(e);
        $('#msgs').append(`<p class="message">${e.data}</p>`);
    };

    socket.onerror = function (e) {
        console.error(e.data);
    };

    $('#msgInput').keypress(function (e) {
        if (e.which != 13) {
            return;
        }

        e.preventDefault();

        var msgStr = $('#msgInput').val();
        if (msgStr) {
            var message = userName + ": " + msgStr;
            socket.send(message);
        }

        $('#msgInput').val('');
    });
});