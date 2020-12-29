var username;
function sign_up_login_in(){
    username=document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location="S_Chat.html";
}