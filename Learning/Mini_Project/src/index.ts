interface Todo{
    text: string;
    completed: boolean;
}



const btn=document.getElementById('btn')! as HTMLButtonElement;
const input=document.getElementById('todoinput')! as HTMLInputElement;
const form=document.querySelector('form')!;
const list=document.getElementById('todolist')!;

const todos: Todo[]=readTodos();
todos.forEach((todo)=>{
    createTodo(todo);
})

function readTodos(): Todo[]{
    const todoJson=localStorage.getItem("todos");
    if(todoJson===null){
        return [];
    }

    return JSON.parse(todoJson);
}

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function handleSubmit(e:Event){
    e.preventDefault();
    const newTodo: Todo={
        text:input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo);
    
    saveTodos();
    input.value="";
}

function createTodo(todo: Todo){
    const newLI=document.createElement('li');
    const checkbox=document.createElement('input');
    checkbox.type="checkbox";
    checkbox.checked=todo.completed;

    checkbox.addEventListener('change',(event)=>{
        todo.completed=checkbox.checked;
        saveTodos();
    });

    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

form.addEventListener("submit",handleSubmit);