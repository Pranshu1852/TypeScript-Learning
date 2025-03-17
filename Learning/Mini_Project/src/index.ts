const btn=document.getElementById('btn')! as HTMLButtonElement;
const input=document.getElementById('todoinput')! as HTMLInputElement;
const form=document.querySelector('form')!;
const list=document.getElementById('todolist')!;

function handleSubmit(e:Event){
    e.preventDefault();
    const newTodo=input.value;
    const newLI=document.createElement('li');
    const checkbox=document.createElement('input');
    checkbox.type="checkbox";
    newLI.append(newTodo);
    newLI.append(checkbox);
    list.append(newLI);
    input.value="";
}

form.addEventListener("submit",handleSubmit);