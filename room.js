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
var room_name=localStorage.getItem("Room_name"),user_name=localStorage.getItem("username");
function send(){
    message=document.getElementById("msg").value;
    MyDB.ref("/"+room_name).push({
        "name" : user_name,
        "message" : message,
        "likes" : 0
    });
}
function getData() {
    MyDB.ref("/"+room_name).on('value',function(data){
      document.getElementById('output').innerHTML="";
      var obj=data.val();
      console.log(data.val());
      for(key in obj){
          if(key!="purpose"){
              console.log(key);
              document.getElementById('output').innerHTML+=`
              <div id="${key}" class="key">
              <br>
              <label>${obj[key]['name']}</label>
              <br>
              <label>${obj[key]['message']}</label>
              <br>
              <button onclick="likes()" class="btn btn-warning"><span class="glyphicon">&#xe125;</span>&nbsp;&nbsp;Like</button>
              &nbsp;&nbsp;&nbsp;<label>${obj[key]['likes']}</label>
              <br>
              <br>
              </div>
              <hr>`;
          }
      }
      
    });
  }
  getData();