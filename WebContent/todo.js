const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
	const li = document.createElement("li"); 
	const delBtn = document.createElement("button");
	delBtn.innerHTML = "❌";
	const span = document.createElement("span");
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	toDoList.appendChild(li);
}
//submit이벤트가 발생할떄마다 toDo를 그려준다
function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value=""; //칸비우기
}
//로컬스토리지로부터 TODOS_LS를 가져온다
function loadToDos(){ 
	const toDos = localStorage.getItem(TODOS_LS);
	if(toDos !== null){
		
	}
}
function init(){
	loadToDos();
	toDoForm.addEventListener("submit",handleSubmit);
}

init();