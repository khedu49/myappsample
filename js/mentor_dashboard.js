function getStudentDetails(mid)
{
    firebase.firestore().collection("students").where("mentorId","==",mid).get()
      .then(function(querySnapshot) {
        var str = [];
        var semail = [];
        var i = 0;
          querySnapshot.forEach(function(doc) {
               str.push( "<tr id=\""+(i)+"\"><td>"+(i+1)+"</td><td><img src=\"dashboard_plugins/images/user/form-user.png\" class=\" rounded-circle mr-3\">"+doc.data().username+"</td><td>"+doc.data().email+"</td><td><span>"+doc.data().branch+"</span></td><td><div><div class=\"progress\"style=\"height: 6px\"><div class=\"progress-bar bg-warning\" style=\"width: "+doc.data().probability+"%\"></div></div></div></td></tr>");

               semail.push(doc.data().email);

              console.log("DATAAAAAAAAAAAAAAAAA",doc.data());

              document.getElementById("addingtable").innerHTML=str.join(" ");

              document.getElementById(i).addEventListener("click", e=>{
                // console.log("In func gotoprofile",e);
                localStorage.setItem("student-email",semail[i-1]);
                window.location.href= "update_student_profile.html";
              });
            i++;
             
          });
         // 
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      }); 

}


  
  