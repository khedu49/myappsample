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

    var leEmail, getEmail;
    var sname, stech, sacademic, sextra, saverage,sprobability;
    var semail;
    var sid, scount=0, compCount=0;
    var studProbability = 0;

    // window.onload = function() {
      authentication();

      
      setTimeout(doSomething, 3000);
      function doSomething() {
        console.log("GetEmail: ", getEmail);
        getDetails();
        getAllCompaniesAverage();
      }
// }

    var logout = document.getElementById("logout");

    logout.addEventListener("click", e=>{
      firebase.auth().signOut();
      window.location.href = "index.html"
    })

        function  getDetails()
        {
          console.log("getDetails me ghussa");
            firebase.firestore().collection("students").where("email","==",getEmail).get()
              .then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {

                    sname= doc.data().username;
                    semail= doc.data().email;
                    sid= doc.data().studentId;
                    sacademic = doc.data().academic;
                    sextra = doc.data().extracurricular;
                    stech = doc.data().technical;
                    saverage = doc.data().probability;

                      document.getElementById('sname').innerHTML=sname;
                      document.getElementById('semail').innerHTML=semail;
                      document.getElementById('sid').innerHTML=sid;
                      document.getElementById('extra').innerHTML=sextra;
                      document.getElementById('acad').innerHTML=sacademic;
                      document.getElementById('tech').innerHTML=stech;
                      document.getElementById('avg').innerHTML=saverage;

                      document.getElementById('s-acd').setAttribute('style',"width:"+sacademic+"%");
                      document.getElementById('s-extc').setAttribute('style',"width:"+sextra+"%");
                      document.getElementById('s-tech').setAttribute('style',"width:"+stech+"%");

                  });
                 // 
              })
              .catch(function(error) {
                  console.log("Error getting documents: ", error);
              }); 
        }

        function getAllCompaniesAverage()
        {

          console.log("geallCompainAverage me ghussa");

          firebase.firestore().collection("companies").onSnapshot(function(querySnapshot) {
            // var listOfAvg = [];

                  querySnapshot.forEach(function(doc) {

                    if(Number(doc.data().average_cutoff) < saverage)
                    {
                      scount++;
                    }

                    compCount++;

                    // console.log(listOfAvg);
 

                  });
                  console.log("compCount: ",scount);
                  console.log("compCount: ",compCount);
                 // 
              })

              setTimeout(doSomething, 4000);
              function doSomething() {
                probabilityCal()
              }


        }

        function probabilityCal()
        {
          console.log("probabilityCal me ghussa");
          if(compCount != 0)
          {
            studProbability = (Number(scount) / Number(compCount))*100;
            studProbability = studProbability.toFixed(2);
          }
          else{
            alert("No companies available right now!");
          }
          enterStudentDashboardProbability();
          console.log("student probability: ", studProbability);
          
        }

        function enterStudentDashboardProbability()
        {
          console.log("enterStudentDashboardProbability() me ghussa");
          firebase.firestore().collection('students').doc(getEmail).update({
            'probability1' : studProbability,
    
          })
          // .catch(function(error) {
          //   console.error('Error writing new message to Firebase Database', error);
          // });
          displayProb();
        }

        function displayProb()
        {
          firebase.firestore().collection("students").where("email","==",getEmail).get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {


                  sprobability = doc.data().probability1;

                  document.getElementById('studProb').innerHTML=sprobability+"%";
                  // document.getElementById('s-tech').setAttribute('style',"width:"+stech+"%");

              });
             // 
          })
        }



        function authentication()
        {
          
          console.log(" authentication() me ghussa");
    
              firebase.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser)
                {
                  getUid = firebaseUser.uid;
                  getEmail =firebaseUser.email;

                  
          
                }
                else
                {
                  window.location.href = "index.html";
                }
              })
    
            }


  
})()