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

  var getUid;
  var ig;
  var getEmail;
  var khem=1,notto1,notfrom1;
  var ytt1,ytt2,ytt3,ytt4,ytt5,ytt6,ytt7,ytt8,ytt9,ytt10;
  var igtest1,igtest2,igtest3,igtest4,igtest5,igtest6,igtest7,igtest8,igtest9,igtest10,count=0;
  var igtestv1,igtestv2,igtestv3,igtestv4,igtestv5,igtestv6,igtestv7,igtestv8,igtestv9,igtestv10;
  var link1,link2,link3,link4,link5,link6,link7,link8,link9,link10;
  // const userLogoutBtn1 = document.getElementById("userLogoutBtn1");
  const notfrom = document.getElementById("notfrom");

  const notto = document.getElementById("notto");

  var notAvailableBtn = document.getElementById('meralund');
  var remove = document.getElementById('remove');
  var availabeStatus = "Available";



  //Add Logout Event
  // userLogoutBtn1.addEventListener("click", e=>{
  //   firebase.auth().signOut();
  //   // window.location.href = "index.html"
  // })
  document.getElementById('showdate1').style.display= 'none';
function check()
{


  firebase.firestore().collection("showusers").where("email","==",getEmail).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
       userkaemail = doc.data().email;
       userkaname = doc.data().username;
       userkaphone = doc.data().phone;
       userkaage = doc.data().age;
       userkatalent = doc.data().talent;
       userkagender = doc.data().gender;
       userkalocation = doc.data().location; 
       notfrom0 =doc.data().notfrom;
       notto0 =doc.data().notto;
       console.log("dfddfdfd",notto0);
        
       if(notto0 == '')
       {
        document.getElementById('showdate').style.display= 'block';
        document.getElementById('showdate1').style.display= 'none';
         
       }
       else
       {
        document.getElementById('showdate').style.display= 'none';
        document.getElementById('showdate1').style.display= 'block';
        document.getElementById("notfrom1").innerHTML=notfrom0;
    document.getElementById("notto1").innerHTML=notto0;


       }

      
    })



  }
  
  )


}




notAvailableBtn.addEventListener("click", e=>
{

  var Home= document.getElementById("coffee");
     
     
  Home.style.display="block";//To display the div

  console.log("Button daba bc");
  notAvailable();

})

remove.addEventListener("click", e=>
{
  var Home= document.getElementById("coffee");
     
     
  Home.style.display="block";//To display the div
 

notAvailable1();
})


  var userkaemail, userkaname, userkaphone,userkaage,userkatalent,userkagender,userkalocation;
  function notAvailable1()
  {
    



    firebase.firestore().collection("showusers").where("email","==",getEmail).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
         userkaemail = doc.data().email;
         userkaname = doc.data().username;
         userkaphone = doc.data().phone;
         userkaage = doc.data().age;
         userkatalent = doc.data().talent;
         userkagender = doc.data().gender;
         userkalocation = doc.data().location; 
       
  
  
  
  
        
      })
  
  
  
    }
    
    )
  
  
  
    setTimeout(dosomething,5000);
  
    function dosomething()
    {
      console.log("delay");
  
      updateDoc1();
    }
  }  
  function updateDoc1()
{
    // console.log("selectuser call hua");

    var url1 = "https://firebasestorage.googleapis.com/v0/b/steptofame-228cc.appspot.com/o/codellion.jpg?alt=media&token=57a9391c-d250-4304-a001-c72064a1de12";
    firebase.firestore().collection("showusers").doc(getEmail).set({
    
    email:userkaemail,
    username: userkaname,
    age: userkaage,
    phone: userkaphone,
    talent: userkatalent,
    gender: userkagender,
    location: userkalocation,
    notfrom:'',
    notto:'',
div:  '<div  class="khem content" id="maindiv" >' 
 +'<div class="sf_job_post_main_wrapper_cont sf_job_post_grid_main_wrapper_cont">'
    + '<div class="sf_job_post_main_wrapper sf_job_post_grid_main_wrapper">' 
    +        '<div  class="ratio1"  style="background-image: url('+url1+');"></div>'
       + '<div class="row">'

         
       +  '<div>'
        +     '<div class="sf_job_post_side_img">'
        
          +   '</div>'
           +  '<div class="sf_job_post_right_cont sf_job_post_grid_right_cont">'
            +     '<h4><span id="titlename">User Name:'+userkaname+'</span></h4>' 
             +    '<p >User Email: '+userkaemail+'</p>'
              +   '<ul>'
               +      '<li></li>'
                +     '<li >User Location: '+userkalocation+'</li>'
                +'<li >Artist type: '+userkatalent+'</li>'
                +     '<li >Age: '+userkaage+'</li>'
                +'<li >Gender: '+userkagender+'</li>'
              
                +'<li >Availability Status: '+availabeStatus+'</li>'
                +'<br>'
                +'<br>' 
        
                 +      '</ul>'
               + '</div>'
      +   '</div>'
       +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
         +     '<div class="sf_job_post_right_btn_wrapper sf_job_post_grid_right_btn_wrapper">'
              +        '<ul>'
 +'<li><a class="fuckit" id="applybtn" onclick=myFunction2("'+userkaemail+'")>View portfolio</a></li>'
 
                +      '</ul>'
                +        '<ul>'
 +'<li><a class="fuckit1" id="selectTalent" onclick=myFunction3("'+userkaemail+'")>Select</a></li>'
                +      '</ul>'
                +'<div id="toast"><div id="desc">Sucessfully Selected the Talent </div></div>'
          +   '</div>'
        + '</div>'
   +  '</div>' 
+ '</div>'
+  '<div class="sf_job_post_keyword_wrapper">'
+     '<ul>'
 +        '<li><i class="fa fa-tags"></i>Phone no :</li>'
  +       '<li >'+userkaphone+'<a href="#"></a></li>'
   +  '</ul>'
+ '</div>'
+'</div>'
+'</div>',

 })
//  getdate();
document.getElementById('showdate1').style.display= 'none';
document.getElementById('showdate').style.display= 'block';


var Home= document.getElementById("coffee");
     
     
  Home.style.display="none";//To display the div
}



var userkaemail, userkaname, userkaphone,userkaage,userkatalent,userkagender,userkalocation;
function notAvailable()
{
  firebase.firestore().collection("showusers").where("email","==",getEmail).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
       userkaemail = doc.data().email;
       userkaname = doc.data().username;
       userkaphone = doc.data().phone;
       userkaage = doc.data().age;
       userkatalent = doc.data().talent;
       userkagender = doc.data().gender;
       userkalocation = doc.data().location; 
     




      
    })



  }
  
  )



  setTimeout(dosomething,5000);

  function dosomething()
  {
    console.log("delay");

    updateDoc();
  }
}

function updateDoc()
{
    console.log("selectuser call hua");

    var url1 = "https://firebasestorage.googleapis.com/v0/b/steptofame-228cc.appspot.com/o/codellion.jpg?alt=media&token=57a9391c-d250-4304-a001-c72064a1de12";
    firebase.firestore().collection("showusers").doc(getEmail).set({
    
    email:userkaemail,
    username: userkaname,
    age: userkaage,
    phone: userkaphone,
    talent: userkatalent,
    gender: userkagender,
    location: userkalocation,
    notfrom: notfrom.value,
    notto: notto.value,
div:  '<div  class="khem content" id="maindiv" >' 
 +'<div class="sf_job_post_main_wrapper_cont sf_job_post_grid_main_wrapper_cont">'
    + '<div class="sf_job_post_main_wrapper sf_job_post_grid_main_wrapper">' 
    +        '<div  class="ratio1"  style="background-image: url('+url1+');"></div>'
       + '<div class="row">'

         
       +  '<div>'
        +     '<div class="sf_job_post_side_img">'
             
          +   '</div>'
           +  '<div class="sf_job_post_right_cont sf_job_post_grid_right_cont">'
            +     '<h4><span id="titlename">User Name:'+userkaname+'</span></h4>' 
             +    '<p >User Email: '+userkaemail+'</p>'
              +   '<ul>'
               +      '<li></li>'
                +     '<li >User Location: '+userkalocation+'</li>'
                +'<li >Artist type: '+userkatalent+'</li>'
                +     '<li >Age: '+userkaage+'</li>'
                +'<li >Gender: '+userkagender+'</li>'
                +'<div style=border>' 
                +'<li >Not Available</li>'
              +'<li >From: '+notfrom.value+'</li>'
              +'<li >To: '+notto.value+'</li>'
              +'</div>'
                 +      '</ul>'
               + '</div>'
      +   '</div>'
       +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
         +     '<div class="sf_job_post_right_btn_wrapper sf_job_post_grid_right_btn_wrapper">'
              +        '<ul>'
 +'<li><a class="fuckit" id="applybtn" onclick=myFunction2("'+userkaemail+'")>View portfolio</a></li>'
 
                +      '</ul>'
                +        '<ul>'
 +'<li><a class="fuckit1" id="selectTalent" onclick=myFunction3("'+userkaemail+'")>Select</a></li>'
                +      '</ul>'
                +'<div id="toast"><div id="desc">Sucessfully Selected the Talent </div></div>'
          +   '</div>'
        + '</div>'
   +  '</div>' 
+ '</div>'
+  '<div class="sf_job_post_keyword_wrapper">'
+     '<ul>'
 +        '<li><i class="fa fa-tags"></i>Phone no :</li>'
  +       '<li >'+userkaphone+'<a href="#"></a></li>'
   +  '</ul>'
+ '</div>'
+'</div>'
+'</div>',

 })
 getdate();
}

function getdate()
{

  firebase.firestore().collection("showusers").where("email","==",getEmail).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
       userkaemail = doc.data().email;
       userkaname = doc.data().username;
       userkaphone = doc.data().phone; 
       userkaage = doc.data().age;
       userkatalent = doc.data().talent;
       userkagender = doc.data().gender;
       userkalocation = doc.data().location;
       notfrom1=doc.data().notfrom;
       notto1=doc.data().notto;
       

    document.getElementById('showdate').style.display= 'none';
    document.getElementById('showdate1').style.display= 'block';
    document.getElementById("notfrom1").innerHTML=notfrom1;
    document.getElementById("notto1").innerHTML=notto1;

    count =1;
if(count == 1)
{
  var Home= document.getElementById("coffee");
     
     
     Home.style.display="none";//To display the div

}



      
    })



  }
  
  )



}

function myfunction()
{
  firebase.firestore().collection("photo").where("emailid","==",getEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // console.log("2"); 
            //   url1='<img src='+doc.data().url+' height="500px" width="1500px" style ="padding-right: 0em">';
            url1='<div  class="ratio img-responsive img-circle"  style="background-image: url('+doc.data().url+');"></div>'
            document.getElementById("pranay").innerHTML=url1;
            // location.reload();

            // document.getElementById("pranay").innerHTML= getEmail ;
          });
         // 
      })

    firebase.firestore().collection("portfolio").where("emailId","==",getEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              igtest1=doc.data().igpurl1;
              igtest2=doc.data().igpurl2;
              igtest3=doc.data().igpurl3;
              igtest4=doc.data().igpurl4;
              igtest5=doc.data().igpurl5;
              igtest6=doc.data().igpurl6;
              igtest7=doc.data().igpurl7;
              igtest8=doc.data().igpurl8;
              igtest9=doc.data().igpurl9;
              igtest10=doc.data().igpurl10;



              
              ////////////////////////////
              igtestv1=doc.data().igpurlv1;
              igtestv2=doc.data().igpurlv2;
              igtestv3=doc.data().igpurlv3;
              igtestv4=doc.data().igpurlv4;
              igtestv5=doc.data().igpurlv5;
              igtestv6=doc.data().igpurlv6;
              igtestv7=doc.data().igpurlv7;
              igtestv8=doc.data().igpurlv8;
              igtestv9=doc.data().igpurlv9;
              igtestv10=doc.data().igpurlv10;








              ig1=doc.data().igphotos1;
              ig2=doc.data().igphotos2;
              ig3=doc.data().igphotos3;
              ig4=doc.data().igphotos4;
              ig5=doc.data().igphotos5;
              ig6=doc.data().igphotos6;
              ig7=doc.data().igphotos7;
              ig8=doc.data().igphotos8;
              ig9=doc.data().igphotos9;
              ig10=doc.data().igphotos10;

              igv1=doc.data().igvideo1;
              igv2=doc.data().igvideo2;
              igv3=doc.data().igvideo3;
              igv4=doc.data().igvideo4;
              igv5=doc.data().igvideo5;
              igv6=doc.data().igvideo6;
              igv7=doc.data().igvideo7;
              igv8=doc.data().igvideo8;
              igv9=doc.data().igvideo9;
              igv10=doc.data().igvideo10;
              
              
          ytt1=doc.data().ytvideo1;
          ytt2=doc.data().ytvideo2;
          ytt3=doc.data().ytvideo3;
          ytt4=doc.data().ytvideo4;
          ytt5=doc.data().ytvideo5;
          ytt6=doc.data().ytvideo6;
          ytt7=doc.data().ytvideo7;
          ytt8=doc.data().ytvideo8;
          ytt9=doc.data().ytvideo9;
          ytt10=doc.data().ytvideo10;

          yt1=doc.data().youtubeiframe1;
          yt2=doc.data().youtubeiframe2;
          yt3=doc.data().youtubeiframe3;
          yt4=doc.data().youtubeiframe4;
          yt5=doc.data().youtubeiframe5;
          yt6=doc.data().youtubeiframe6;
          yt7=doc.data().youtubeiframe7;
          yt8=doc.data().youtubeiframe8;
          yt9=doc.data().youtubeiframe9;
          yt10=doc.data().youtubeiframe10;
               
              sc1=doc.data().soundtrack1;
              sc2=doc.data().soundtrack2;
              sc3=doc.data().soundtrack3;
              sc4=doc.data().soundtrack4;
              sc5=doc.data().soundtrack5;
              sc6=doc.data().soundtrack6;
              sc7=doc.data().soundtrack7;
              sc8=doc.data().soundtrack8;
              sc9=doc.data().soundtrack9;
              sc10=doc.data().soundtrack10;

               link1 = doc.data().soundtrack1;
               link2 = doc.data().soundtrack2;
               link3 =doc.data().soundtrack3;
               link4 =doc.data().soundtrack4;
               link5 = doc.data().soundtrack5;
               link6 = doc.data().soundtrack6;
               link7 =doc.data().soundtrack7;
               link8 = doc.data().soundtrack8;
               link9 = doc.data().soundtrack9;
               link10 = doc.data().soundtrack10;

              // getUid = firebaseUser.uid; 
              document.getElementById("firstName").innerHTML=doc.data().firstname;
              
             
              // document.getElementById("lastName").innerHTML=doc.data().lastname;
              document.getElementById("age").innerHTML=doc.data().age;
              document.getElementById("language").innerHTML=doc.data().language;
              document.getElementById("talents").innerHTML=doc.data().artisttype;
              document.getElementById("description").innerHTML=doc.data().description;
              document.getElementById("ethinicity").innerHTML=doc.data().ethinicity;
              document.getElementById("bodytype").innerHTML=doc.data().bodytype;
              document.getElementById("gender").innerHTML=doc.data().gender;
              document.getElementById("ylocation").innerHTML=doc.data().ylocation;
              document.getElementById("jlocation").innerHTML=doc.data().jlocation;
              document.getElementById("nationality").innerHTML=doc.data().nationality;
              document.getElementById("complexity").innerHTML=doc.data().complexity;
              document.getElementById("height").innerHTML=doc.data().height;
              document.getElementById("skills").innerHTML=doc.data().skills;
              document.getElementById("experiences").innerHTML=doc.data().experiences;

              document.getElementById("email").innerHTML= 'Email:'+ getEmail ;
              if(igtest1=="" && igtest2==""  && igtest3=="" && igtest4=="" && igtest5=="" && igtest6=="" && igtest7=="" && igtest8=="" && igtest9=="" && igtest10==""  && igtestv1 =='' && igtestv2 =='' &&igtestv3 =='' &&igtestv4 =='' &&igtestv5 =='' &&igtestv6 =='' &&igtestv7 =='' &&igtestv8 =='' &&igtestv9 =='' &&igtestv10 =='' && ytt1 =='' && ytt2 =='' &&ytt3 =='' &&ytt4 =='' &&ytt5 =='' &&ytt6 =='' &&ytt7 =='' &&ytt8 =='' &&ytt9 =='' &&ytt10 =='' && link1 =='' && link2 =='' &&link3=='' &&link4 =='' &&link5 =='' &&link6 =='' &&link7 =='' &&link8 =='' &&link9 =='' &&link10 =='' )
              {
                console.log("if me guussse hi nahi raha")
                var Home1= document.getElementById("title");
               
               
                Home1.style.display="none";
              }
              if(igtest1=="" && igtest2==""  && igtest3=="" && igtest4=="" && igtest5=="" && igtest6=="" && igtest7=="" && igtest8=="" && igtest9=="" && igtest10==""  )
              {
                var Home1= document.getElementById("instagramhello");
                var Home2= document.getElementById("igp1");
                var Home3= document.getElementById("igp");
 
 
                Home1.style.display="none";
                Home2.style.display="none";
                Home3.style.display="none";


              }
              if(igtest1 =='')
              {
                var Home1= document.getElementById("igphotosid1");
 
 
 Home1.style.display="none";
                // document.getElementById("igphotosid1").innerHTML="Upload Your instagram photos!!";
              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid1").innerHTML=ig1;

              }
              if(igtest2 =='')
              {
               
                var Home1= document.getElementById("igphotosid2");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid2").innerHTML=ig2;

              }
              if(igtest3 =='')
              {
               
                var Home1= document.getElementById("igphotosid3");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid3").innerHTML=ig3;

              }
              if(igtest4 =='')
              {
               
                var Home1= document.getElementById("igphotosid4");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid4").innerHTML=ig4;

              }
              if(igtest5 =='')
              {
                
                var Home1= document.getElementById("igphotosid5");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid5").innerHTML=ig5;

              }
              if(igtest6 =='')
              {
               
                var Home1= document.getElementById("igphotosid6");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid6").innerHTML=ig6;

              }
              if(igtest7=='')
              {
               
                var Home1= document.getElementById("igphotosid7");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid7").innerHTML=ig7;

              }
              if(igtest8 =='')
              {
               
                var Home1= document.getElementById("igphotosid8");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid8").innerHTML=ig8;

              }
              if(igtest9 =='')
              {
               
                var Home1= document.getElementById("igphotosid9");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid9").innerHTML=ig9;

              }
              if(igtest10 =='')
              {
               
                var Home1= document.getElementById("igphotosid10");
 
 
                Home1.style.display="none";              }
              else
              {
                console.log("kuch mila");
                document.getElementById("igphotosid10").innerHTML=ig10;

              }
 
////////////////////////////////////////////////instagram videos////////////////////////////////////////////////////////////////////////
if(igtestv1 =='' && igtestv2 =='' &&igtestv3 =='' &&igtestv4 =='' &&igtestv5 =='' &&igtestv6 =='' &&igtestv7 =='' &&igtestv8 =='' &&igtestv9 =='' &&igtestv10 =='' )
{
  var Home1= document.getElementById("videohello");
  var Home2= document.getElementById("iv1");
  var Home3= document.getElementById("iv");


  Home1.style.display="none";
  Home2.style.display="none";
  Home3.style.display="none";

}
if(igtestv1 =='')
{
    
  var Home1= document.getElementById("igvideos1");
 
 
  Home1.style.display="none";  
 
}
else
{
  console.log("kuch mila");
  document.getElementById("igvideos1").innerHTML=igv1;

}
if(igtestv2 =='')
{
 
  var Home1= document.getElementById("igvideos2");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos2").innerHTML=igv2;

}
if(igtestv3 =='')
{
 
  var Home1= document.getElementById("igvideos3");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos3").innerHTML=igv3;

}
if(igtestv4 =='')
{
 
  var Home1= document.getElementById("igvideos4");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos4").innerHTML=igv4;

}
if(igtestv5 =='')
{
 
  var Home1= document.getElementById("igvideos5");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos5").innerHTML=igv5;

}
if(igtestv6 =='')
{
 
  var Home1= document.getElementById("igvideos6");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos6").innerHTML=igv6;

}
if(igtestv7=='')
{
 
  var Home1= document.getElementById("igvideos7");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos7").innerHTML=igv7;

}
if(igtestv8 =='')
{
 
  var Home1= document.getElementById("igvideos8");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos8").innerHTML=igv8;

}
if(igtestv9 =='')
{
 
  var Home1= document.getElementById("igvideos9");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos9").innerHTML=igv9;

}
if(igtestv10 =='')
{
 
  var Home1= document.getElementById("igvideos10");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("igvideos10").innerHTML=igv10;

}



///////////////////////////////////////////////////youtube videos/////////////////////////////////////////////////////////////////////////////////////////

if(ytt1 =='' && ytt2 =='' &&ytt3 =='' &&ytt4 =='' &&ytt5 =='' &&ytt6 =='' &&ytt7 =='' &&ytt8 =='' &&ytt9 =='' &&ytt10 =='')
{
  var Home1= document.getElementById("yvideohello");
  var Home2= document.getElementById("yiv1");
  var Home3= document.getElementById("yiv");


  Home1.style.display="none";
  Home2.style.display="none";
  Home3.style.display="none";
}

if(ytt1 =='')
{
  var Home1= document.getElementById("ytviddeoid1");
 
 
  Home1.style.display="none";  
}
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid1").innerHTML=yt1;

}

if(ytt2 =='')
{
 
  var Home1= document.getElementById("ytviddeoid2");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid2").innerHTML=yt2;

}
if(ytt3 =='')
{
 
  var Home1= document.getElementById("ytviddeoid3");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid3").innerHTML=yt3;

}
if(ytt4 =='')
{
 
  var Home1= document.getElementById("ytviddeoid4");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid4").innerHTML=yt4;

}
if(ytt5 =='')
{
 
  var Home1= document.getElementById("ytviddeoid5");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid5").innerHTML=yt5;

}
if(ytt6 =='')
{
 
  var Home1= document.getElementById("ytviddeoid6");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid6").innerHTML=yt6;

}
if(ytt7 =='')
{
 
  var Home1= document.getElementById("ytviddeoid7");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid7").innerHTML=yt7;

}
if(ytt8 =='')
{
 
  var Home1= document.getElementById("ytviddeoid8");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid8").innerHTML=yt8;

}
if(ytt9 =='')
{
 
  var Home1= document.getElementById("ytviddeoid9");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid9").innerHTML=yt9;

}
if(ytt10 =='')
{
 
  var Home1= document.getElementById("ytviddeoid10");
 
 
  Home1.style.display="none";  }
else
{
  console.log("kuch mila");
  document.getElementById("ytviddeoid10").innerHTML=yt10;

}  
            

              
              // document.getElementById("ytviddeoid1").innerHTML=yt1;
              // document.getElementById("ytviddeoid2").innerHTML=yt2;
              // document.getElementById("ytviddeoid3").innerHTML=yt3;
              // document.getElementById("ytviddeoid4").innerHTML=yt4;
              // document.getElementById("ytviddeoid5").innerHTML=yt5;
              // document.getElementById("ytviddeoid6").innerHTML=yt6;
              // document.getElementById("ytviddeoid7").innerHTML=yt7;
              // document.getElementById("ytviddeoid8").innerHTML=yt8;
              // document.getElementById("ytviddeoid9").innerHTML=yt9;
              // document.getElementById("ytviddeoid10").innerHTML=yt10;

             

              if(link1 =='' && link2 =='' &&link3=='' &&link4 =='' &&link5 =='' &&link6 =='' &&link7 =='' &&link8 =='' &&link9 =='' &&link10 =='')
              {
                console.log("gussna")
                var Home1= document.getElementById("one");
  var Home2= document.getElementById("two");
  var Home3= document.getElementById("three");


  Home1.style.display="none";
  Home2.style.display="none";
  Home3.style.display="none";
              }
              if(link1 =='')
              {
                var Home1= document.getElementById("sc1");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc1").innerHTML=sc1;

              }
              if(link2 =='')
              {
                var Home1= document.getElementById("sc2");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc2").innerHTML=sc2;

              }
              if(link3 =='')
              {
                var Home1= document.getElementById("sc3");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc3").innerHTML=sc3;

              }
              if(link4 =='')
              {
                var Home1= document.getElementById("sc4");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc4").innerHTML=sc4;

              }
              if(link5 =='')
              {
                var Home1= document.getElementById("sc5");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc5").innerHTML=sc5;

              }
              if(link6 =='')
              {
                var Home1= document.getElementById("sc6");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc6").innerHTML=sc6;

              }
              if(link7 =='')
              {
                var Home1= document.getElementById("sc7");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc7").innerHTML=sc7;

              }
              if(link8 =='')
              {
                var Home1= document.getElementById("sc8");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc8").innerHTML=sc8;

              }
              if(link9 =='')
              {
                var Home1= document.getElementById("sc9");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc9").innerHTML=sc9;

              }
              if(link10 =='')
              {
                var Home1= document.getElementById("sc10");
 
 
                Home1.style.display="none";
              }
              else
              {
                document.getElementById("sc10").innerHTML=sc10;

              }

              
            
          //     return firebase.firestore().collection('photo').doc(getEmail).set({
          //       url:url,
          //       emailid:getEmail
          //  })
          //  .catch(function(error) {
          //   console.error('Error writing new message to Firebase Database', error);
          // });

          });
         // 
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
}





function isUserSignedIn() {
  // TODO 6: Return true if a user is signed-in.
  return !!firebase.auth().currentUser;
}

function checkSignedInWithMessage() 
{
  // Return true if the user is signed in Firebase
  if (isUserSignedIn()) {
  
  }
  else
  {
    alert("You are not signed in")
     
    window.location.href = "login.html"
  }
}
  
  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail=firebaseUser.email;
    
      checkSignedInWithMessage();
      check();
      myfunction();
      // pp();
    
      // myfunction1();
      
    }
    else
    {
      alert("You are not signed in")
     
      window.location.href = "login.html"
      // window.location.href = "index.html"
    }
  })

})()