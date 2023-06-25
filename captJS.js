function fun(){
  var str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
  var cpt = "";
  for(var i = 0; i < 6; i++){
    cpt += str[Math.floor(Math.random()*(str.length))];
  }
  document.getElementById('id1').innerHTML = cpt;
}
