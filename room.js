var firebaseConfig = {
    apiKey: "AIzaSyCTZoxgoQrmCVR7VgCwH6K_9JCOV5tpY_A",
    authDomain: "fir-chat-31461.firebaseapp.com",
    databaseURL: "https://fir-chat-31461-default-rtdb.firebaseio.com",
    projectId: "fir-chat-31461",
    storageBucket: "fir-chat-31461.appspot.com",
    messagingSenderId: "378038055970",
    appId: "1:378038055970:web:83bfedd8be6e5f29dd467b"
  };
firebase.initializeApp(firebaseConfig);
var MyDB=firebase.database(),username=localStorage.getItem("username"),message,roomname=localStorage.getItem("roomname");
function logout(){
    window.location="index.html";
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
}
function send(){
    message=document.getElementById("").value;
    MyDB.ref("/"+roomname).push({
        "name" : username,
        "message" : message,
        "likes" : 0
    });
}