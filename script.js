birthday=prompt('생년월일 입력');
if(birthday/100000 == 9){
    location.href="login.html";
}
else if((birthday+100000)%100000 <= 41231){
    location.href="login.html";
}
else {
    location.href="error.html";
 }

