var mid;
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

    var leEmail;
    var tname;
    authentication();
    
    // setTimeout(doSomething, 3000);
    // function doSomething() {
    //   console.log(leEmail);

    // }


    console.log("MID: ",mid);

    function getMentorName(getEmail)
    {
        firebase.firestore().collection("teachers").where("email","==",getEmail).get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  // console.log(doc.id, " => ", doc.data());
                 var tname=doc.data().name;
                  mid = doc.data().teacherId;
                // console.log("mid",mid);
                console.log("Mid:", mid);
                  // document.getElementById("khedu").innerHTML=name;
                console.log("teacher name ",tname);
                  document.getElementById("username").innerHTML=tname;
                  getStudentDetails(mid);
              });
             // 
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          }); 
  
    }

    var logout = document.getElementById("logout");

    logout.addEventListener("click", e=>{
      firebase.auth().signOut();
    })

    function authentication()
    {

          firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser)
            {
              getUid = firebaseUser.uid;
              var getEmail =firebaseUser.email;
              console.log("getMentorKPele:", getEmail);              
              getMentorName(getEmail);
              console.log("getMentorKBaad:", getEmail);
      
            }
            else
            {
              window.location.href = "index.html";
            }
          })

        }

  