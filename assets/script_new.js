/*
Dev: locbernard  projet_5 Openclassrooms 
Param(2)=>
Obligatoire numbres,ex: function (parm1,parm2)
*/
	const slides = [
		{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];

/*Getters 
*/ 
    
	const  counts_elems         = slides.length;	
	const  arrow_left           = document.querySelector('.arrow_left');
	const  arrow_right          = document.querySelector('.arrow_right');
	const  dots                 = document.querySelectorAll('.dot');	
	const  banner_img           = document.querySelector('.banner-img');
	const  text_caroussel       = document.querySelector('#banner').children[1];
	let    parm = 'debug';
	let    index= 0; 

/*Even Dom-All
*/ 

/*Setters
*/

/*Even arrow-left
*/
	arrow_left.addEventListener('click', (event) => even_arrow_left(event, parm));	
	
/*Even arrow_right
*/	
	arrow_right.addEventListener('click',(event) => even_arrow_right(event,parm));

/*Function-all
*/

	function even_arrow_left(event) {
		
		index --;			
		if (index < 0){index = counts_elems-1;} 	    

		//Call>
		set_img(banner_img,index);
		set_tagLine(text_caroussel,index);
		set_dots(dots,index);
	}
	
	function even_arrow_right(event) {

		index++;			
	if (index > counts_elems-1){index = 0;}    	  
  
		//Call>	
		set_img(banner_img,index);
		set_tagLine(text_caroussel,index);
		set_dots(dots,index);
	}	

	function set_img(banner_img,index) {//param(2)  
			
		banner_img.src="./assets/images/slideshow/" + slides[index].image;		
	}

	function set_tagLine(text_caroussel,index) {//param(2) 
		
		text_caroussel.innerHTML = slides[index].tagLine;
		
	}

	function set_dots(dots,index) {//param(2) 	   
		
		for (let i = 0; i <  counts_elems; i++) {			  
			
			dots[i].className="dot";	  
			  
			                                     }			 
            dots[index].className="dot dot_selected";		
	}






























