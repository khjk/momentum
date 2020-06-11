
const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event){ //enter하면 자동으로 새로고침되는 것 방지
	event.preventDefault();
	const currentValue = input.value;
	//console.log(currentValue);
	paintGreeting(currentValue);
}

function askForName(){ //사용자 이름이 존재할때 form창보여주기
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){ //사용자 이름이 존재할때 form없애고 
	form.classList.remove(SHOWING_CN); 
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`; 
}

function loadName(){ //로컬 스토리지부터 꺼내옴
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null){
		askForName();
	}else{
		paintGreeting(currentUser);
	}
}
function init(){

}
init();