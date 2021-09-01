var firebaseConfig = {
    apiKey: "AIzaSyATqTw4hn06WnqP5KX5Y8ktb33pmcC7ww8",
    authDomain: "combook-52018.firebaseapp.com",
    databaseURL: "https://combook-52018-default-rtdb.firebaseio.com",
    projectId: "combook-52018",
    storageBucket: "combook-52018.appspot.com",
    messagingSenderId: "142429411578",
    appId: "1:142429411578:web:a36a00a2beb1f666cbd143"
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