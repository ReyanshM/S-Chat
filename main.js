var username;
function login(){
    username=document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location="S_Chat.html";
}