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

function validateQuestionEmail(){
	var textField = document.getElementById("questionEmail");
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
	
	clearElements();
	showCreditCardEntry(fNameField);
	
	//showThanks(fNameField);
}

function clearElements(){
	var x = document.getElementById("donateForm");
	for (var i = x.childElementCount - 1; i > 0; i--){
		x.removeChild(x.children[i])
	}
}

function showCreditCardEntry(fNameField){
	var x = document.getElementById("donateForm");
	x.children[0].innerHTML = "Enter your Credit Card Information"
	
	var cardNameField = document.createElement("input");
	cardNameField.placeholder = "Cardholder's Name"
	cardNameField.style.marginRight = "25px";
	cardNameField.style.height = "25px";
	cardNameField.style.width = "222px";
	cardNameField.style.marginBottom = "25px";
	cardNameField.style.border = "1px solid gray";
	
	var cardNumField = document.createElement("input");
	cardNumField.placeholder = "Card Number"
	cardNumField.style.marginRight = "15px";
	cardNumField.style.height = "25px";
	cardNumField.style.width = "175px";
	cardNumField.style.marginBottom = "25px";
	cardNumField.style.border = "1px solid gray";
	
	var cardCvvField = document.createElement("input");
	cardCvvField.placeholder = "CVV"
	cardCvvField.maxLength = "3"
	cardCvvField.style.height = "25px";
	cardCvvField.style.width = "30px";
	cardCvvField.style.border = "1px solid gray";
	
	var monthField = document.createElement("input");
	monthField.placeholder = "mm"
	monthField.style.height = "25px";
	monthField.maxLength = "2"
	monthField.size = "2"
	monthField.style.width = "auto";
	monthField.style.border = "1px solid gray";
	
	var slash = document.createElement("label");
	slash.innerHTML = "/";
	
	var yearField = document.createElement("input");
	yearField.placeholder = "yy"
	yearField.style.height = "25px";
	yearField.maxLength = "2"
	yearField.size = "2"
	yearField.style.width = "auto";
	yearField.style.border = "1px solid gray";
	
	var divider = document.createElement("hr");
	divider.className = "divider"
	
	var billingInfo = document.createElement("h2");
	billingInfo.innerHTML = "Billing Information";
	
	var addr1 = document.createElement("input");
	addr1.placeholder = "Address 1"
	addr1.style.marginRight = "25px";
	addr1.style.height = "25px";
	addr1.style.width = "222px";
	addr1.style.marginBottom = "25px";
	addr1.style.border = "1px solid gray";
	
	var addr2 = document.createElement("input");
	addr2.placeholder = "Address 2"
	addr2.style.marginRight = "25px";
	addr2.style.height = "25px";
	addr2.style.width = "222px";
	addr2.style.marginBottom = "25px";
	addr2.style.border = "1px solid gray";
	
	var city = document.createElement("input");
	city.placeholder = "City"
	city.style.marginRight = "25px";
	city.style.height = "25px";
	city.style.width = "222px";
	city.style.marginBottom = "25px";
	city.style.border = "1px solid gray";
	
	var state = document.createElement("input");
	state.placeholder = "State/province"
	state.style.marginRight = "25px";
	state.style.height = "25px";
	state.style.width = "222px";
	state.style.marginBottom = "25px";
	state.style.border = "1px solid gray";
	
	var country = document.createElement("input");
	country.placeholder = "Country"
	country.style.marginRight = "25px";
	country.style.height = "25px";
	country.style.width = "222px";
	country.style.marginBottom = "25px";
	country.style.border = "1px solid gray";
	
	var zip = document.createElement("input");
	zip.placeholder = "Zip/postal code"
	zip.style.marginRight = "25px";
	zip.style.height = "25px";
	zip.style.width = "222px";
	zip.style.marginBottom = "25px";
	zip.style.border = "1px solid gray";
	
	var phone = document.createElement("input");
	phone.placeholder = "Phone"
	phone.style.marginRight = "25px";
	phone.style.height = "25px";
	phone.style.width = "222px";
	phone.style.marginBottom = "25px";
	phone.style.border = "1px solid gray";
	
	
	var button = document.createElement("button");
	button.innerHTML = "Make Donation"
	button.className = "donate"
	button.type = "button"
	button.value = "reset"
	button.addEventListener ("click", function() {
		clearElements()
		showThanks(fNameField)
	});
	
	x.appendChild(cardNameField);
	x.appendChild(document.createElement("br"));
	x.appendChild(cardNumField);
	x.appendChild(cardCvvField);
	x.appendChild(document.createElement("br"));
	x.appendChild(monthField);
	x.appendChild(slash);
	x.appendChild(yearField);
	x.appendChild(divider);
	
	x.appendChild(billingInfo);
	x.appendChild(addr1);
	x.appendChild(addr2);
	x.appendChild(document.createElement("br"));
	x.appendChild(city);
	x.appendChild(state);
	x.appendChild(document.createElement("br"));
	x.appendChild(country);
	x.appendChild(zip);
	x.appendChild(document.createElement("br"));
	x.appendChild(phone);
	x.appendChild(document.createElement("br"));
	x.appendChild(button);
}

function showThanks(fNameField){
	var x = document.getElementById("donateForm");
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

function askQuestionPressed(){
	if (!document.getElementById("questionText")){
	
		var x = document.getElementsByClassName("rightDiv")[0];
		var text = document.createElement("p");
		text.id = "questionText"
		text.innerHTML = "Thank you for your interest. Please enter your question below and we will get back to you as soon as possible."
		x.appendChild(text);
		
		var email = document.createElement("input");
		email.placeholder = "Email";
		email.id= "questionEmail";
		email.required = true;
		email.addEventListener("input", function(){
			validateQuestionEmail()
		});
		email.style.marginRight = "25px";
		email.style.height = "25px";
		email.style.width = "250px";
		email.style.border = "1px solid gray";
		email.pattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
		x.appendChild(email);
		
		var br1 = document.createElement("br");
		x.appendChild(br1);
		
		var quest = document.createElement("textarea");
		quest.placeholder = "Question";
		quest.id= "questField";
		quest.rows="5";
		quest.style.marginRight = "25px";
		quest.style.width = "250px";
		quest.style.border = "1px solid gray";
		x.appendChild(quest);
		
		var br2 = document.createElement("br");
		x.appendChild(br2);
		
		var button = document.createElement("button");
		button.innerHTML = "Submit Question"
		button.className = "donate"
		button.type = "button"
		button.addEventListener ("click", function() {
			if (quest.value.replace(/\s/g,"") == ""){
				window.alert("If you have a question, please enter it into the text box labeled \"Question\".");
				return;
			}
			
			if (validateQuestionEmail()){
				window.alert("Your question has been received.\n\nWe normally answer questions within 24 hours.");
			}
		});
		x.appendChild(button);
	}
}