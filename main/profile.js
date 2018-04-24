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

}

function donate(index){
	var x = document.getElementById("billFrom");
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


function editProfile(){
	clearElements();
	showEdit();
	

}

function clearElements(){
	var x = document.getElementById("leftSide");
	for (var i = x.childElementCount - 1; i > 0; i--){
		x.removeChild(x.children[i])
	}
	var y = document.getElementById("billFrom");
	for (var i = y.childElementCount - 1; i > 0; i--){
		y.removeChild(y.children[i])
	}
	
	
}

function showEdit(){
	var x = document.getElementById("leftSide");
	x.children[0].innerHTML = "Update Profile Info"
	
	
	var nameF = document.createElement("input");
	nameF.placeholder = "First Name"
	nameF.style.marginRight = "25px";
	nameF.style.height = "25px";
	nameF.style.width = "175px";
	nameF.style.marginBottom = "25px";
	nameF.style.border = "1px solid gray";
	nameF.addEventListener ("input", function() {
		if (nameF.value.replace(/\s/g,"") != ""){
			nameF.style.border = "1px solid gray";
		}
	});
	
	
	
	var nameL = document.createElement("input");
	nameL.placeholder = "Last Name"
	nameL.id = "cc2";
	nameL.style.marginRight = "5px";
	nameL.style.height = "25px";
	nameL.style.width = "175px";
	nameL.style.marginBottom = "25px";
	nameL.style.border = "1px solid gray";
	nameL.addEventListener ("input", function() {
		if (nameL.value.replace(/\s/g,"") != ""){
			nameL.style.border = "1px solid gray";
		}
	});
	
	
	
	var addr1 = document.createElement("input");
	addr1.placeholder = "Address 1"
	addr1.id = "cc6";
	addr1.style.marginRight = "25px";
	addr1.style.height = "25px";
	addr1.style.width = "222px";
	addr1.style.marginBottom = "25px";
	addr1.style.border = "1px solid gray";
	addr1.addEventListener ("input", function() {
		if (addr1.value.replace(/\s/g,"") != ""){
			addr1.style.border = "1px solid gray";
		}
	});
	
	var addr2 = document.createElement("input");
	addr2.placeholder = "Address 2"
	addr2.id = "cc7";
	addr2.style.marginRight = "25px";
	addr2.style.height = "25px";
	addr2.style.width = "222px";
	addr2.style.marginBottom = "25px";
	addr2.style.border = "1px solid gray";
	addr2.addEventListener ("input", function() {
		if (addr2.value.replace(/\s/g,"") != ""){
			addr2.style.border = "1px solid gray";
		}
	});
	
	var city = document.createElement("input");
	city.placeholder = "City"
	city.id = "cc8";
	city.style.marginRight = "25px";
	city.style.height = "25px";
	city.style.width = "222px";
	city.style.marginBottom = "25px";
	city.style.border = "1px solid gray";
	city.addEventListener ("input", function() {
		if (city.value.replace(/\s/g,"") != ""){
			city.style.border = "1px solid gray";
		}
	});
	
	var state = document.createElement("input");
	state.placeholder = "State/province"
	state.id = "cc9";
	state.style.marginRight = "25px";
	state.style.height = "25px";
	state.style.width = "222px";
	state.style.marginBottom = "25px";
	state.style.border = "1px solid gray";
	state.addEventListener ("input", function() {
		if (state.value.replace(/\s/g,"") != ""){
			state.style.border = "1px solid gray";
		}
	});
	
	var country = document.createElement("input");
	country.placeholder = "Country"
	country.id = "cc10";
	country.style.marginRight = "25px";
	country.style.height = "25px";
	country.style.width = "222px";
	country.style.marginBottom = "25px";
	country.style.border = "1px solid gray";
	country.addEventListener ("input", function() {
		if (country.value.replace(/\s/g,"") != ""){
			country.style.border = "1px solid gray";
		}
	});
	
	var zip = document.createElement("input");
	zip.placeholder = "Zip/postal code"
	zip.id = "cc11";
	zip.style.marginRight = "25px";
	zip.style.height = "25px";
	zip.style.width = "222px";
	zip.style.marginBottom = "25px";
	zip.style.border = "1px solid gray";
	zip.addEventListener ("input", function() {
		if (zip.value.replace(/\s/g,"") != ""){
			zip.style.border = "1px solid gray";
		}
	});
	
	var phone = document.createElement("input");
	phone.placeholder = "Home Phone"
	phone.id = "cc12";
	phone.style.marginRight = "25px";
	phone.style.height = "25px";
	phone.style.width = "222px";
	phone.style.marginBottom = "25px";
	phone.style.border = "1px solid gray";
	phone.addEventListener ("input", function() {
		if (phone.value.replace(/\s/g,"") != ""){
			phone.style.border = "1px solid gray";
		}
	});
	
	var cell = document.createElement("input");
	cell.placeholder = "Cell Phone"
	cell.id = "cc13";
	cell.style.marginRight = "25px";
	cell.style.height = "25px";
	cell.style.width = "222px";
	cell.style.marginBottom = "25px";
	cell.style.border = "1px solid gray";
	cell.addEventListener ("input", function() {
		if (cell.value.replace(/\s/g,"") != ""){
			cell.style.border = "1px solid gray";
		}
	});
	
	var email = document.createElement("input");
	email.placeholder = "Email"
	email.id = "cc13";
	email.style.marginRight = "25px";
	email.style.height = "25px";
	email.style.width = "222px";
	email.style.marginBottom = "25px";
	email.style.border = "1px solid gray";
	email.addEventListener ("input", function() {
		if (email.value.replace(/\s/g,"") != ""){
			email.style.border = "1px solid gray";
		}
	});
	
	var button = document.createElement("button");
	button.innerHTML = "Update"
	button.className = "donate"
	button.type = "button"
	button.value = "reset"
	button.addEventListener ("click", function() {
		var inputVals = document.getElementById("donateForm").getElementsByTagName("input");
		
		var error = false;
		for (var i = 0; i < inputVals.length; i++){
			if (inputVals[i].value.replace(/\s/g,"") == ""){
				inputVals[i].style.border = "2px solid red";
				error = true;
			}
		}
		
		if (!error){
			clearElements()
			showThanks(fNameField)
		}
	});
	
	x.appendChild(nameF);
	x.appendChild(nameL);
	x.appendChild(document.createElement("br"));
	
	x.appendChild(phone);
	x.appendChild(cell);
	x.appendChild(document.createElement("br"));
	x.appendChild(addr1);
	x.appendChild(addr2);
	x.appendChild(document.createElement("br"));
	x.appendChild(city);
	x.appendChild(state);
	x.appendChild(document.createElement("br"));
	x.appendChild(country);
	x.appendChild(zip);
	x.appendChild(document.createElement("br"));
	x.appendChild(email);
	x.appendChild(document.createElement("br"));
	x.appendChild(button);
	
	var y = document.getElementById("billFrom");
	y.children[0].innerHTML = "Enter your Credit Card Information"
	
	var cardNameField = document.createElement("input");
	cardNameField.placeholder = "Cardholder's Name"
	cardNameField.id = "cc1";
	cardNameField.style.marginRight = "25px";
	cardNameField.style.height = "25px";
	cardNameField.style.width = "222px";
	cardNameField.style.marginBottom = "25px";
	cardNameField.style.border = "1px solid gray";
	cardNameField.addEventListener ("input", function() {
		if (cardNameField.value.replace(/\s/g,"") != ""){
			cardNameField.style.border = "1px solid gray";
		}
	});
	
	var cardNumField = document.createElement("input");
	cardNumField.placeholder = "Card Number"
	cardNumField.id = "cc2";
	cardNumField.style.marginRight = "15px";
	cardNumField.style.height = "25px";
	cardNumField.style.width = "175px";
	cardNumField.style.marginBottom = "25px";
	cardNumField.style.border = "1px solid gray";
	cardNumField.addEventListener ("input", function() {
		if (cardNumField.value.replace(/\s/g,"") != ""){
			cardNumField.style.border = "1px solid gray";
		}
	});
	
	var cardCvvField = document.createElement("input");
	cardCvvField.placeholder = "CVV"
	cardNumField.id = "cc3";
	cardCvvField.maxLength = "3"
	cardCvvField.style.height = "25px";
	cardCvvField.style.width = "30px";
	cardCvvField.style.border = "1px solid gray";
	cardCvvField.addEventListener ("input", function() {
		if (cardCvvField.value.replace(/\s/g,"") != ""){
			cardCvvField.style.border = "1px solid gray";
		}
	});
	
	var monthField = document.createElement("input");
	monthField.placeholder = "mm"
	monthField.id = "cc4";
	monthField.style.height = "25px";
	monthField.maxLength = "2"
	monthField.size = "2"
	monthField.style.width = "auto";
	monthField.style.border = "1px solid gray";
	monthField.addEventListener ("input", function() {
		if (monthField.value.replace(/\s/g,"") != ""){
			monthField.style.border = "1px solid gray";
		}
	});
	
	var slash = document.createElement("label");
	slash.innerHTML = "/";
	
	var yearField = document.createElement("input");
	yearField.placeholder = "yy"
	yearField.id = "cc5";
	yearField.style.height = "25px";
	yearField.maxLength = "2"
	yearField.size = "2"
	yearField.style.width = "auto";
	yearField.style.border = "1px solid gray";
	yearField.addEventListener ("input", function() {
		if (yearField.value.replace(/\s/g,"") != ""){
			yearField.style.border = "1px solid gray";
		}
	});
	
	var divider = document.createElement("hr");
	divider.className = "divider"
	
	var billingInfo = document.createElement("h2");
	billingInfo.innerHTML = "Billing Information";
	
	var addr1 = document.createElement("input");
	addr1.placeholder = "Address 1"
	addr1.id = "cc6";
	addr1.style.marginRight = "25px";
	addr1.style.height = "25px";
	addr1.style.width = "222px";
	addr1.style.marginBottom = "25px";
	addr1.style.border = "1px solid gray";
	addr1.addEventListener ("input", function() {
		if (addr1.value.replace(/\s/g,"") != ""){
			addr1.style.border = "1px solid gray";
		}
	});
	
	var addr2 = document.createElement("input");
	addr2.placeholder = "Address 2"
	addr2.id = "cc7";
	addr2.style.marginRight = "25px";
	addr2.style.height = "25px";
	addr2.style.width = "222px";
	addr2.style.marginBottom = "25px";
	addr2.style.border = "1px solid gray";
	addr2.addEventListener ("input", function() {
		if (addr2.value.replace(/\s/g,"") != ""){
			addr2.style.border = "1px solid gray";
		}
	});
	
	var city = document.createElement("input");
	city.placeholder = "City"
	city.id = "cc8";
	city.style.marginRight = "25px";
	city.style.height = "25px";
	city.style.width = "222px";
	city.style.marginBottom = "25px";
	city.style.border = "1px solid gray";
	city.addEventListener ("input", function() {
		if (city.value.replace(/\s/g,"") != ""){
			city.style.border = "1px solid gray";
		}
	});
	
	var state = document.createElement("input");
	state.placeholder = "State/province"
	state.id = "cc9";
	state.style.marginRight = "25px";
	state.style.height = "25px";
	state.style.width = "222px";
	state.style.marginBottom = "25px";
	state.style.border = "1px solid gray";
	state.addEventListener ("input", function() {
		if (state.value.replace(/\s/g,"") != ""){
			state.style.border = "1px solid gray";
		}
	});
	
	var country = document.createElement("input");
	country.placeholder = "Country"
	country.id = "cc10";
	country.style.marginRight = "25px";
	country.style.height = "25px";
	country.style.width = "222px";
	country.style.marginBottom = "25px";
	country.style.border = "1px solid gray";
	country.addEventListener ("input", function() {
		if (country.value.replace(/\s/g,"") != ""){
			country.style.border = "1px solid gray";
		}
	});
	
	var zip = document.createElement("input");
	zip.placeholder = "Zip/postal code"
	zip.id = "cc11";
	zip.style.marginRight = "25px";
	zip.style.height = "25px";
	zip.style.width = "222px";
	zip.style.marginBottom = "25px";
	zip.style.border = "1px solid gray";
	zip.addEventListener ("input", function() {
		if (zip.value.replace(/\s/g,"") != ""){
			zip.style.border = "1px solid gray";
		}
	});
	
		
	y.appendChild(cardNameField);
	y.appendChild(cardNumField);
	y.appendChild(document.createElement("br"));
	

	y.appendChild(addr1);
	y.appendChild(addr2);
	y.appendChild(document.createElement("br"));
	y.appendChild(city);
	y.appendChild(state);
	y.appendChild(document.createElement("br"));
	y.appendChild(country);
	y.appendChild(zip);

	y.appendChild(document.createElement("br"));
	y.appendChild(button);
}
