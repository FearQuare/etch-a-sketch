const container = document.querySelector('.container');

for(let i = 0; i < 6498; i++){
    const div = document.createElement("div");
    div.style.width = "16px";
    div.style.height = "16px";
    div.style.backgroundColor = "red";
    container.appendChild(div);
}

const divs = document.querySelectorAll('div');
for(let i = 1; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', () => {divs[i].style.backgroundColor = "white"});
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    location.reload(true);
})