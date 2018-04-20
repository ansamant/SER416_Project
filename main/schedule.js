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

function validateEmail()
{
	var textField = document.getElementsByName("email")[0];
	if (textField.validity.valid == false){
		textField.style.border = "2px solid red"
		return false;
	}else{
		textField.style.border = "2px solid green"
		return true;
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

function registerEvent()
{
	var title_validate = validateEventTitle();
	var lname_validate = validateLName();
	var fname_validate = validateFName();
	var email_validate = validateEmail();

	if(!(title_validate && lname_validate && fname_validate && email_validate)) return;

	var name_field = document.getElementsByName("firstname")[0];
	var event_title = document.getElementsByName("eventtitle")[0];
	
	var x = document.getElementById("scheduleFrom");
	for (var i = x.childElementCount - 1; i > 0; i--)
	{
		x.removeChild(x.children[i])
	}

  	var ele = document.createElement("h3"); 
  	ele.appendChild(document.createTextNode("Thank you for submitting your event, " + name_field.value));  
  	x.appendChild(ele);

  	ele = document.createElement("p"); 
  	ele.appendChild(document.createTextNode("Your event schedule has been submitted for: " + event_title.value));  
  	x.appendChild(ele);

	var button = document.createElement("button");
	button.innerHTML = "Schedule another event"
	button.className = "Register"
	button.type = "button"
	button.value = "reset"
	button.addEventListener ("click", function() {
		location.reload()
	});

	x.appendChild(button);
}
