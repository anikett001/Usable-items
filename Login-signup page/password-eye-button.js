var a;
function pass(){
if(a == 1){
    document.getElementById("password").type="password";
    document.getElementById("pass-icon").src="./Images/eye-hide-icon.png";
    a= 0;
}else{
    document.getElementById("password").type="text";
    document.getElementById("pass-icon").src="./Images/eye-show-icon.png";
    a= 1;
}
}
