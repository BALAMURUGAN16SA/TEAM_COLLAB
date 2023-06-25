var cpt = "";

function fun1(){
  var str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
  for(var i = 0; i < 6; i++){
    cpt += str[Math.floor(Math.random()*(str.length))];
  }
  document.getElementById('id1').innerHTML = cpt;
}

function fun2() {
	var inp = document.getElementById('id2').value;
	if(!(cpt.localeCompare(inp))){
		alert('VALID');
	}
	else{
		alert('INVALID');
	}
}
