var firebaseConfig = {
    apiKey: "AIzaSyASsGg5VcWg6RhEiJpnGwLL_Ppw6M7JqNI",
    authDomain: "kwitter-49626.firebaseapp.com",
    databaseURL:"https://kwitter-49626-default-rtdb.firebaseio.com/",
    projectId: "kwitter-49626",
    storageBucket: "kwitter-49626.appspot.com",
    messagingSenderId: "609744129035",
    appId: "1:609744129035:web:ce75b43e0fe62d8caacb0e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
            purpose:"adding user"
        });
}