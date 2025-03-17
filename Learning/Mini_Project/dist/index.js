"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
btn.addEventListener('click', (e) => {
    alert(input.value);
    input.value = "";
});
