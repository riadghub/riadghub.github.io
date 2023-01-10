fetch('https://pokebuildapi.fr/api/v1/pokemon')
  .then((response) => {
    return response.json();
})
.then((data) => {
  let myPokemons = data;
  myButton.addEventListener('click',function () {
    for(let i = 0; i < myPokemons.length; i++){
      if(myText == myPokemons[i].name){
        myName.innerHTML = myPokemons[i].name;
        myImage.style.backgroundImage = "url("+myPokemons[i].image+")";
      }
      if(myText.value == myPokemons[i].id){
        myName.innerHTML = myPokemons[i].name;
        myImage.style.backgroundImage = "url("+myPokemons[i].image+")";
      }
    }
  });
});

let myText = document.querySelector('input');
let myButton = document.querySelector('button');
let myName = document.querySelector('#name-screen');
let myImage = document.querySelector('#main-screen');


// console.log(myButton);
// console.log(myText);
// console.log(myName);