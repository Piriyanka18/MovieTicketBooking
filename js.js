   //form 1

   function vfun(){
    var uname=document.forms["myform"]["uname"].value;
    var upswd=document.forms["myform"]["upswd"].value;

if(uname==null || uname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(upswd==null || upswd==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if (uname != '' && upswd != '' ){
 alert("Login successfully");
                 }

}

//form 2

function vfun1(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var housenumber=document.forms["myform2"]["housenumber"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var cupswd=document.forms["myform2"]["cupswd"].value;
    var postalcode=document.forms["myform2"]["postalcode"].value;
    var province=document.forms["myform2"]["province"].value;
    var city=document.forms["myform2"]["city"].value;
    var country=document.forms["myform2"]["country"].value;
    var telnumber=document.forms["myform2"]["telnumber"].value;
    var mobnumber=document.forms["myform2"]["mobnumber"].value;
    var website=document.forms["myform2"]["website"].value;
    var email=document.forms["myform2"]["email"].value;
    var facebook=document.forms["myform2"]["facebook"].value;
    var remark=document.forms["myform2"]["remark"].value;


if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "Enter the user name";
         return false;
}

if(email==null || email==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the email";
   return false;
}

if(upswd1==null || upswd1=="" ){
    document.getElementById("errorBox").innerHTML =
     "Enter the password";
   return false;
}

if(cupswd==null || cupswd==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the conform password";
   return false;
}

if(upswd1 != cupswd){
    document.getElementById("errorBox").innerHTML =
     "Password dont match";
   return false;
}

if(housenumber==null || housenumber==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the housenumber";
   return false;
}

if(postalcode==null || postalcode==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the postalcode";
   return false;
}

if(province==null || province==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the province";
   return false;
}

if(city==null || city==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the city";
   return false;
}

if(country==null || country==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the country";
   return false;
}

if(telnumber==null || telnumber==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the telnumber";
   return false;
}

if(mobnumber==null || mobnumber==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the mobnumber";
   return false;
}

if(website==null || website==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the website";
   return false;
}

if(facebook==null || facebook==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the facebook";
   return false;
}

if(remark==null || remark==""){
    document.getElementById("errorBox").innerHTML =
     "Enter the remark";
   return false;
}

if (uname1 != '' && upswd1 != '' && cupswd != '' && email != '' && upswd1 == cupswd && 
remark != '' && facebook != '' && website != '' && mobnumber != '' && telnumber != '' &&
country != '' && city != '' && province != '' && postalcode != '' &&
housenumber != '' )


          alert("Register successfull");
                         

}



