function validateForm(){
	var answer = document.getElementsByName('adorable');
	if (answer[0].checked == true){
		alert("Yes! He's the cutest.");
		window.location.href="correct.html";
	}
	else{
		alert("You're a monster!");
	}
}