// var app_firebase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBO0z-HZmL_b0Zcffh8aIC665lxGFBljAc",
    authDomain: "proactive-auditing-fbeb5.firebaseapp.com",
    databaseURL: "https://proactive-auditing-fbeb5.firebaseio.com",
    projectId: "proactive-auditing-fbeb5",
    storageBucket: "proactive-auditing-fbeb5.appspot.com",
    messagingSenderId: "535167806360",
    appId: "1:535167806360:web:60f422b208e0947c5999ed",
    measurementId: "G-ESFHFLFJER"
  };
  firebase.initializeApp(config); 
  // app_firebase = firebase; 

  const talentBtn = document.getElementById("talentButton");

  const agencyBtn = document.getElementById("agencyButton");  


   //Add Login Event
   talentBtn.addEventListener("click", e=>{

    window.location.href = "register.html"


  });

  // Hello gitt


  //Add Login Event
  agencyBtn.addEventListener("click", e=>{

    window.location.href = "register1.html"


  });


})()