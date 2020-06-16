let div;
let body = document.querySelector(`body`);
const container = document.querySelector(`.container`);
for (let i = 0; i < 256; i++){
    div = document.createElement(`div`);
    div.classList.add(`grid`);
    div.style.backgroundColor = `tan`;
    container.appendChild(div);
}
function draw(element){
    element.style.backgroundColor = `red`;
}
function setDraw(){
    const cells = document.querySelectorAll(`.grid`);
    for (const cell of cells){
        cell.addEventListener(`mouseover`, function(){draw(cell)});
    }
}
const button = document.createElement(`button`);
button.style.cssText = `position: absolute; top: 0px; justify-self: center`;
button.textContent = `Reset`;
button.addEventListener(`click`, function(){
    var pixels = document.querySelectorAll(`.grid`);
    const gridColumns = prompt(`enter column number: `);
    const gridRows = prompt(`enter grid rows: `);
    pixels.forEach(element => {
        element.remove();
    });
    container.style.cssText = `grid-template-columns: repeat(${gridColumns}, 1fr); grid-template-rows: repeat(${gridRows}, 1fr)`;
    for (let index = 0; index < gridColumns*gridRows; index++) {
        div = document.createElement(`div`);
        div.classList.add(`grid`);
        div.style.backgroundColor = `tan`;
        container.appendChild(div); 
    }
    setDraw();
});
body.appendChild(button);
setDraw();
