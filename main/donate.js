//Get modal element
var modal = document.getElementById('ModalView');

var registerModal = document.getElementById('registerModal');
//get login Navigation button
var loginNavBtn = document.getElementById('loginRef');
var registerButton = document.getElementById('registerRef');

registerButton.onclick = function() {
    registerModal.style.display = "block";
};

var closeBtn= document.getElementsByClassName('closeBtn')[0]; //0 index since it gives us an elements arr.
var closeBtn2= document.getElementsByClassName('closeBtn')[1]; //0 index since it gives us an elements arr.


//Set onclickListener for login modal
loginNavBtn.addEventListener('click', openModal);

//Set onClickListener for close modal
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);

//outside click listener on window
window.addEventListener('click', outsideClick);
//open a Modal
function openModal(){
    modal.style.display='block';
}

function closeModal(){
    modal.style.display='none';
    registerModal.style.display='none';
}

function outsideClick(e){
    if (e.target == modal){
        modal.style.display='none'; //closes it if we click the cursor outside of the box.    
    }
}

var selectedAmount = "";

function setCustomAmount(){
	
	var textField = document.getElementsByName("custom")[0];
	if(isNaN(textField.value) || !textField.value){
		textField.style.border = "2px solid red"
		selectedAmount = ""
	}else{
		textField.style.border = "2px solid green"
		selectedAmount = textField.value
	}
	
}

function donate(index){
	var x = document.getElementById("donateForm");
	var buttons = x.getElementsByTagName('button');
	
	for (var i = 0; i < buttons.length; i++){
		
		buttons[i].style.border = "2px solid black"
		buttons[i].style.backgroundColor = "#6495ED"
		buttons[i].style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
		
	}
	
	buttons[index].style.border = "5px solid green"
	buttons[index].style.backgroundColor = "lightgreen"
	
	var textField = document.getElementsByName("custom")[0];
	textField.style.border = "1px solid gray"
	textField.value = ""
	if (buttons[index].value == "custom"){
		textField.style.visibility = "visible"
		selectedAmount = ""
	}else{
		textField.style.visibility = "hidden"
		selectedAmount = buttons[index].value
	}
}

function validateEmail(){
	var textField = document.getElementsByName("email")[0];
	if (textField.validity.valid == false){
		textField.style.border = "2px solid red"
		return false;
	}else{
		textField.style.border = "2px solid green"
		return true;
	}
}

function validateLName(){
	var lNameField = document.getElementsByName("lastname")[0];
	if (!lNameField.value || lNameField.value.replace(/\s/g,"") == ""){
		lNameField.style.border = "2px solid red"
		return false;
	}else{
		lNameField.style.border = "2px solid green"
		return true;
	}
}

function validateFName(){
	var fNameField = document.getElementsByName("firstname")[0];
	if (!fNameField.value || fNameField.value.replace(/\s/g,"") == ""){
		fNameField.style.border = "2px solid red"
		return false;
	}else{
		fNameField.style.border = "2px solid green"
		return true;
	}
}

function donateSubmit(){
	var fail = false;
	
	if (!validateFName()){
		fail = true;
	}
	
	if (!validateLName()){
		fail = true;
	}
	
	if (!validateEmail()){
		fail = true;
	}
	
	if (selectedAmount == ""){
		fail = true;
	}
	
	if (fail){
		console.log("fail")
		return;
	}
	
	var fNameField = document.getElementsByName("firstname")[0];
	
	var x = document.getElementById("donateForm");
	for (var i = x.childElementCount - 1; i > 0; i--){
		x.removeChild(x.children[i])
	}
	
	x.children[0].innerHTML = "Thank you for the $" + selectedAmount + " donation, " + fNameField.value +
		". Every penny goes towards a good cause."
	var button = document.createElement("button");
	button.innerHTML = "Make Another Donation"
	button.className = "donate"
	button.type = "button"
	button.value = "reset"
	button.addEventListener ("click", function() {
		location.reload()
	});
	x.appendChild(button);
}