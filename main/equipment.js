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

function validateDates(caller) {
	var earlier = pickupdate.value
	var later = returndate.value
    var valid = (!earlier || !later || earlier <= later) //only validate if both are defined 
    if (!valid) {
		var other
		switch (caller) {
		case(pickupdate):
			other = returndate
			break
		case(returndate):
			other = pickupdate
			break
		}
		caller.value = other.value
	}
}

function validateLName()
{
	var lNameField = document.getElementsByName("lastname")[0];
	if (!lNameField.value || lNameField.value.replace(/\s/g,"") == ""){
		lNameField.style.border = "2px solid red"
		return false;
	}else{
		lNameField.style.border = "2px solid green"
		return true;
	}
}

function validateFName()
{
	var fNameField = document.getElementsByName("firstname")[0];
	if (!fNameField.value || fNameField.value.replace(/\s/g,"") == ""){
		fNameField.style.border = "2px solid red"
		return false;
	}else{
		fNameField.style.border = "2px solid green"
		return true;
	}
}

function validateEventTitle()
{
	var event_field = document.getElementsByName("eventtitle")[0];
	if(event_field.value.length == 0)
	{
		event_field.style.border = "2px solid red"
		return false;
	}
	else
	{
		event_field.style.border = "2px solid green"
		return true;
	}
}

function confirmEquipment() {
	if (equipmentForm.checkValidity()) {
		var plural = Number(quantity.value) >= 2
		renter.innerHTML = firstname.value
		rental.innerHTML = quantity.value+' '+equipment.value+(plural?'s':'')
		var pickupday = new Date(pickupdate.value)
		var returnday = new Date(returndate.value)
		date.innerHTML = (pickupday.getUTCMonth()+1)+"/"+(pickupday.getUTCDate())+"/"+(pickupday.getUTCFullYear())
		duration.innerHTML = (returnday.valueOf()-pickupday.valueOf())/86400000 //difference in milliseconds divided by milliseconds per day
		equipmentForm.style.display = "None"
		equipmentView.style.display = "None"
		confirmation.style.display = ""
	}
}

function pageReset() {
	var inputs = document.getElementsByTagName("input")
	for (var i = 0; i < inputs.length; i ++) {
		inputs[i].value = ""
	}
	quantity.value = '1'
	equipment.value = ""
	equipmentForm.style.display = ""
	equipmentView.style.display = ""
	confirmation.style.display = "None"
}
