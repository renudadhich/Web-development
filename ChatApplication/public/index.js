$(function() {
    const socket = io.connect();     //
    let $messageForm = $("#messageForm");
    const $message = $("#message");
    const $chat = $("#chat");
    const $messageArea = $("#messageArea");
    let $userFormArea = $("#userFormArea");
    let $userForm = $("#userForm");
    let $username = $("#username");
    const $users = $("#users");
    // submit new message
    $messageForm.submit(function(e) {
        e.preventDefault();
        console.log("send message prevented!!");
        socket.emit('sendMessage', $message.val());
        $message.val('');

    });
    // new message
    socket.on('new message', function(data){
        $chat.append(`<div class="well"><strong>${data.user} :</strong> ${data.msg} </div>`);
    });
    // add new user
    $userForm.submit(function(e) {
        e.preventDefault();
        console.log(" user submit prevented!!");
        socket.emit('new user', $username.val(), function(data) {
            if(data) {
                $userFormArea.hide();
                $messageArea.show();
            }
        });
        $username.val('');
    });
    
    // users 
    socket.on('get users', function(data) {
     let html ='';
     for(let user = 0; user< data.length; user++) {
        html += `<li class="list-group-item">${data[user]}</li>`; 
     }
     $users.html(html);
    });
});