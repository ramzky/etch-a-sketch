/*
Etch a sketch

TODO:
*-DONE - fit grids in container
*-DONE - 16x16?? 16grid across and below?? 16x16 > 256 grid?
*reset and new button

*/

const body = document.querySelector('body');
const stylesheet = document.styleSheets[0];
const resetBtn = document.querySelector('.resetBtn');
const newBtn = document.querySelector('.newBtn');

//for testing only
const testBtn = document.createElement('button');
testBtn.textContent = 'Click me';
//container.appendChild(testBtn);
testBtn.addEventListener('click', function() {
	container.classList.toggle('container-alt');
});

//-------------------------------------------------

//create grid container
//can also set width and height here
const gridContainer = document.querySelector('.container');
//gridContainer.classList.toggle('container');
//body.appendChild(gridContainer);


//create grid
//equivalent to valueXvalue (ex. 16x16 grid)
function createGrid(gridSize = 16) {
	const grids = [];
	const containerWidth = window.getComputedStyle(gridContainer).getPropertyValue('width');
	const gridWidth = parseInt(containerWidth, 10) / gridSize;
	const gridHeight = gridWidth;
	for (let i=0; i<gridSize**2; i++) {
		grids.push(document.createElement('div'));
		gridContainer.appendChild(grids[i]);
		//NOTE cssText is inline ONLY! TODO insertRule
		grids[i].style.cssText = `width: ${gridWidth}px;`; //min-width?
		//grids[i].style.cssText = `flex: 1 1 auto`;
		grids[i].classList.toggle('grid');
		grids[i].addEventListener('mouseenter', gridMouseEnter);
	}
	//console.log();
}

//reset grids
function resetGrid(evt) {
	gridList = document.querySelectorAll('.container > div')
	gridList.forEach(function(item) {
		item.classList.remove('gridmouseenter');
		if (evt.target === document.querySelector('.newBtn')) {
			item.parentNode.removeChild(item);
		}
	});
}
resetBtn.addEventListener('click', resetGrid);
newBtn.addEventListener('click', resetGrid);
newBtn.addEventListener('click', function(evt) {
	sizeInput = prompt('Enter grid size. Leave blank for default', 16);
	console.log(sizeInput);
	if (!(Number(sizeInput) <= 0 || 
		isNaN(sizeInput) ||
		sizeInput === null)) {
		createGrid(sizeInput);
		
	} else createGrid();
});


//extract numbers until first non number
//TODO: ctr still increment if it found a number at various point in str
//NOT IN USE JUST USE parseInt()
function extractNum(str) {
	let ctr = 0;
	for (let i = 0; i < str.length; i++) {
		if (parseInt(str.at(i)) >= 0 ) ctr++;
	}
	return str.slice(0, ctr++);
}

//hover
function gridMouseEnter(evt) {
	evt.target.classList.add('gridmouseenter');
}



//console.log(container.computedStyleMap().get('width')); //no firefox support
for (x of document.styleSheets) console.log(x);












