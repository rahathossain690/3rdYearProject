

document.getElementById("signup").addEventListener("click", noReturn => {
	let name = document.getElementById("name").value.trim();
	let email = document.getElementById("email").value.trim();
	let inst = document.getElementById("inst").value.trim();
	let pass = document.getElementById("pass").value.trim();
	let conpass = document.getElementById("conpass").value.trim();
	if(name == "" || email == "" || inst == "" || pass == "" || conpass == ""){
		showAlert("Missing informations.");
	}else if(pass !== conpass){
		showAlert("Wrong password");
	}else {
		hideAlert();
		// sign up
		signup(email, pass, inst);
	}
});


function showAlert(text){
	document.getElementById("alert").classList.remove("hide");
	document.getElementById("alerttext").innerHTML = text;
}

function hideAlert(){
	document.getElementById("alert").classList.add("hide");
	document.getElementById("alerttext").innerHTML = "";
}

document.getElementById("name").addEventListener("keypress", hideAlert);
document.getElementById("email").addEventListener("keypress", hideAlert);
document.getElementById("inst").addEventListener("keypress", hideAlert);
document.getElementById("pass").addEventListener("keypress", hideAlert);
document.getElementById("conpass").addEventListener("keypress", hideAlert);

function signup(email, pass, inst){

}

function success(){
	document.getElementById("modalactivate").click();
}