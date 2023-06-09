const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const imageContainertDom = document.querySelector('#cards');
let sliderContent = "";
for (let i = 0; i < icons.length; i++) {
    icons[i].color = generaColore(0 , 16)
    const newIcon = `<div class="card">
                        <i class ="${icons[i].family} ${icons[i].prefix}${icons[i].name}" style='color:${icons[i].color}'></i>
                        <p class ='text'>${icons[i].name}</p>
                        </div>`;

sliderContent += newIcon;       
   
}
imageContainertDom.innerHTML = sliderContent;

const select = document.getElementById('seleziona');
select.addEventListener('click' ,function(){
    let option = select.value;
    let filterIcons=[];
    if (option == 'all'){
        filterIcons = icons;

    }else{
        filterIcons = icons.filter((icon) => icon.type == option )
        
    }
    
    const imageContainertDom = document.querySelector('#cards');
let sliderContent = "";
for (let i = 0; i < filterIcons.length; i++) {
    const newIcon = `<div class="card">
                        <i class ="${filterIcons[i].family} ${filterIcons[i].prefix}${filterIcons[i].name}" style='color:${filterIcons[i].color}'></i>
                        <p class ='text'>${filterIcons[i].name}</p>
                        </div>`;

sliderContent += newIcon;       
   
}
imageContainertDom.innerHTML = sliderContent;

})



function generaColore(min , max){
    let colore = '#';
    for (let i = 0; i < 6; i++){
        const numero = Math.floor(Math.random()*(max - min) + min);
        if (numero > 9){
            if (numero == 10) colore += 'A';
            if (numero == 11) colore += 'B';
            if (numero == 12) colore += 'C';
            if (numero == 13) colore += 'D';
            if (numero == 14) colore += 'E';
            if (numero == 15) colore += 'F';
        }else{
            colore += numero;
        }
        
    }

    return colore

}


