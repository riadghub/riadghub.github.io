// creer un window.onload
window.onload = function(){
	var mesLiensA = document.querySelectorAll('a');
	var bigImage = document.querySelector('#big img');
	var bigImageCaption = document.querySelector('figcaption');
    // faire une boucle sur tous les liens
	var attributImageL;
	var attributImageT;
	for(var i = 0; i < mesLiensA.length; i++){
        // evenement click sur chaque lien, lancement de la fonction
		mesLiensA[i].addEventListener('click',function(){
			event.preventDefault();
			attributImageL = this.getAttribute('href');
			attributImageT = this.getAttribute('title');
			bigImage.setAttribute('src',attributImageL);
			bigImage.setAttribute('alt',attributImageT);
			bigImageCaption.innerText = attributImageT;
			for(var j = 0; j < mesLiensA.length; j++){
				mesLiensA[j].style.borderColor = 'black';
			}
			this.style.borderColor = 'red';
		});
	}

};


