const body = document.querySelector('body');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p2 = document.createElement('p2');
p2.textContent = "ME TOO!";

const div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';
div.appendChild(h1);
div.appendChild(p2);

body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.target.style.background = 'blue';
    e.target.style.color = 'white';
});