var firebaseConfig = {
  apiKey: "AIzaSyAl66fo-mtxTUqoVgBsYOuuR4k2CrWcLKA",
  authDomain: "school-chat-5776e.firebaseapp.com",
  projectId: "school-chat-5776e",
  storageBucket: "school-chat-5776e.appspot.com",
  messagingSenderId: "953534190584",
  appId: "1:953534190584:web:6f4aa8dbd52fcf30973c0d"
};
firebase.initializeApp(firebaseConfig);
var MyDB=firebase.database();
var username=localStorage.getItem("username");
function logout(){
    window.location="index.html";
    localStorage.removeItem("username");
}
function onLoad(){
  document.getElementById("Welcome").textContent="Welcome ".concat(localStorage.getItem("username"));
}
// MyDB.ref("/age").set(11);
// MyDB.ref("/age").set(28);
// MyDB.ref("/student").set({age:11,
//                           height:156,
//                           name:"Reyansh",
//                           surname:"M"});
// MyDB.ref("/student").update({height:163});
// MyDB.ref("/student/surname").set(null);
// MyDB.ref("/student").once("value", function(snapshot){
//   console.log(snapshot.key, snapshot.val());
// })
// MyDB.ref("/student").on("value", function(snapshot){
//   console.log(snapshot.key, snapshot.val());
// })