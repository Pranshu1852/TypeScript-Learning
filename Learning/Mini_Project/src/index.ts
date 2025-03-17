const btn=document.getElementById('btn')! as HTMLButtonElement;
const input=document.getElementById('todoinput')! as HTMLInputElement;
const form=document.querySelector('form')!;

function handleSubmit(e:Event){
    e.preventDefault();
    console.log("Submitted!");
}

form.addEventListener("submit",handleSubmit);