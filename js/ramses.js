function validateForm(){
	var answer = document.getElementsByName('adorable');
	if (answer[0].checked == true){
		alert("Yes! He's the cutest.");
	}
	else{
		alert("You're a monster!");
	}
}
