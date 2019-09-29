  var name=document.getElementById('sname');
  var email=document.getElementById('semail');
  var id=document.getElementById('sid');
  var add=document.getElementById('sadd');
  var getEmail, getUid;

  setTimeout(doSomething, 4000);
  function doSomething() {
    console.log(mid);
  }

  add.addEventListener("click",e=>{

     
      firebase.firestore().collection('students').doc(email.value).update({
        'mentorId' : mid

      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
      console.log("mentorId gaya student me: ", mid);
    
  })


          firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser)
            {
              getUid = firebaseUser.uid;
              getEmail =firebaseUser.email;
              console.log(firebaseUser);
      
            }
          })

  
  