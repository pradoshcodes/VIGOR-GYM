var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var repasswordError=document.getElementById('repassword-error');

function validateName(){
     var name=document.getElementById('contact-name').value;
     if(name.length==0){
         nameError.innerHTML="Name is required";
         return false; 
     } 
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHtml='write full name';
    return false;
   }
   nameError.innerHTML='valid';
   return true;
}
