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

  //User Form
  const emailId = document.getElementById("emailId");
  const passId = document.getElementById("passId");
  const userLoginBtn = document.getElementById("userLoginBtn");

  //Agency Form
  const recEmailId = document.getElementById("recEmailId");
  const recPassId = document.getElementById("recPass");
  const recLoginBtn = document.getElementById("recLoginBtn");  

  var ema;
  var getEmail;
  var email_verified;
  var email_verified1;
  var email;
  var pass;
  var auth;

  var email1;
  var pass1;
  var auth1;
  var dbemail;
  var khedu=false;
  var khedu1=false;
  var count = 0;

  var input = document.getElementById("passId");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("userLoginBtn").click();
    }
  });

  var input1 = document.getElementById("recPass");
  input1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("recLoginBtn").click();
    }
  });


    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {

        // var Home= document.getElementById("coffee");
        // Home.style.display="block";
        
        getUid = firebaseUser.uid;
        getEmail =firebaseUser.email;

        console.log("count = ", count);
        if(count = 0)
        {
        const usersRef = firebase.firestore().collection('students').doc(getEmail)

        usersRef.get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              window.location.href="student_dashboard.html";
            } else {

            }
        }); 

        const usersRef1 = firebase.firestore().collection('teachers').doc(getEmail)

        usersRef1.get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              window.location.href="mentor_dashboard.html";
            } else {

            }
        }); 

      }

      else{}

        
      }
      else
      {
      }
    })  


  // //Add a realtime listener
  function authn()
  {

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
          console.log(firebaseUser);
          getEmail=firebaseUser.email;
          email_verified=firebaseUser.emailVerified;
          console.log(email_verified);
          if(email_verified == true)
          {
            window.location.href = "student_dashboard.html"
          }
          else{
            firebase.auth().signOut();
            alert("Email not verified.");
          }
          
        }
        else
        {
          console.log("not logged in");
          // setTimeout(doSomething, 6000);
          // function doSomething() {
          //   // alert("The password or email is incorrect");
          // } 
 
        }
      })

  }
 



  // Add a realtime listener
  

   //Add Login Event
   userLoginBtn.addEventListener("click", e=>{

    count = 1;

    //Get Email and password
    // TODO: CHECK FOR REAL EMAIL
    email = emailId.value;
    pass = passId.value;
    auth = firebase.auth();
    if((email.length != 0) && (pass.length != 0))
    {
      if(validateEmail(email) == true) 
      {
        m();

      }
      else
      {
        alert("Improper Email format");

      }
    } 
    else
    {
      alert("The email or password field is empty");
    } 


  });

  function m()
  {

    count = 1;
    var db = firebase.firestore();
    var docRef = db.collection("students").doc(emailId.value);

docRef.get().then(function(doc) {
    if (doc.exists) {


      count = 1;
      auth.signInWithEmailAndPassword(email, pass)
      .catch(function(error) {

        alert("Password or Email Incorrect");
      });
  
                authn();


    } else {

      var docRef12 = firebase.firestore().collection("teachers").doc(emailId.value);

      docRef12.get().then(function(doc) {
          if (doc.exists) {
            alert("Please select the correct user type before login");
            console.log("tu idhar nahi aayega");
          }
          else
          {
            alert("Please sign up first OR recheck your login credentials.");
          }
        });
      
      


        
           
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


  }



        function validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
      }


  //Add Login Event
  recLoginBtn.addEventListener("click", e=>{
    count = 1;
    //Get Email and password
    // TODO: CHECK FOR REAL EMAIL
    email1 = recEmailId.value;
    pass1 = recPassId.value;
    auth1 = firebase.auth();
    if((email1.length != 0) && (pass1.length != 0))
    {
      if(validateEmail(email1) == true)
      {
        m1();
      }
      else
      {
        alert("Improper Email format");

      }
      
    }
    else
    {
      alert("The email or password field is empty");
    } 
  });

  function m1()
  {
    count = 1;


    console.log("m1() k andar aaya");
    console.log("m1() k andar aaya");
    var db = firebase.firestore();
    var docRef = db.collection("teachers").doc(recEmailId.value);
 
docRef.get().then(function(doc) {
    if (doc.exists) {

    count = 1;

      
                  auth1.signInWithEmailAndPassword(email1, pass1)
                .catch(function(error) {

                  alert("Password or Email Incorrect");
                });
          
                authn1();

    } else {
      var docRef123 = firebase.firestore().collection("students").doc(recEmailId.value);

      docRef123.get().then(function(doc) {
          if (doc.exists) {
            alert("Please select the correct user type before login");
            console.log("tu idhar nahi aayega");
          }
          else
          {
            alert("Please sign up first OR please check your login credentials.");
          }
        });
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

  }


  function authn1()
  {

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
          console.log(firebaseUser);
          //window.location.href = "mentor_dashboard.html"
          console.log("correct user he bhai");
          getEmail=firebaseUser.email;
          email_verified1=firebaseUser.emailVerified;
          console.log(email_verified1);
          if(email_verified1 == true)
          {
            window.location.href = "mentor_dashboard.html"
          }
          else{
            firebase.auth().signOut();
            alert("Email not verified.");
          }
        }
        else
        {
          console.log("not logged in");
          // setTimeout(doSomething, 6000);
          // function doSomething() {
          //   alert("The password or email is incorrect");
          // } 
        }
      })
    
  }

})()