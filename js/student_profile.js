var email = document.getElementById('semail');
var acad = document.getElementById("acad");
var extc = document.getElementById("extc");
var tech = document.getElementById("tech");
var submit = document.getElementById("submit");


function checkemail(){

  console.log("check mail me ghussa");
  firebase.firestore().collection("students").where("email","==",email.value).get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var academic=doc.data().academic;
          var extra=doc.data().extracurricular;
          var tech1=doc.data().technical;          
        // console.log("mid",mid);
        console.log("Mid:", mid);
          // document.getElementById("khedu").innerHTML=name;

          acad.value = academic;
          extc.value = extra;
          tech.value = tech1;
      });
     // 
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  }); 
}

function updateData()
{
  // var acedemics = acad.value;
  // var inac = parseInt(acedemics, 100);
  // var extrac = extc.value;
  // var inex = parseInt(extrac, 100);
  // var techn = tech.value;
  // var inte = parseInt(techn, 100);
  var prob = (Number(acad.value) + Number(extc.value) + Number(tech.value))/3;
  prob = prob.toFixed(2);
  console.log("probanility", prob);
  firebase.firestore().collection('students').doc(email.value).update({
    'academic' : acad.value,
    'extracurricular' : extc.value,
    'technical' : tech.value,
    'probability': prob,

  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
}
