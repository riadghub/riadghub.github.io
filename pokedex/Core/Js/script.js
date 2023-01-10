let myButtonMinus = document.querySelector('#minus');
let myButtonPlus = document.querySelector('#plus');
let myID = document.querySelector('#id-screen');
let myType = document.querySelector('#type-screen');
let myInformations = document.querySelector('#about-screen');
let myText = document.querySelector('input');
let myButton = document.querySelector('button');
let myName = document.querySelector('#name-screen');
let myImage = document.querySelector('#main-screen');

fetch('https://pokebuildapi.fr/api/v1/pokemon')
  .then((response) => {
    return response.json();
})
.then((data) => {
  let myPokemons = data;
  myButton.addEventListener('click',function () {
    for(let i = 0; i < myPokemons.length; i++){
      if(myText.value === myPokemons[i].name){
        myName.innerHTML = myPokemons[i].name;
        myImage.style.backgroundImage = "url("+myPokemons[i].image+")";
        myInformations.innerHTML = 'PV: '+myPokemons[i].stats.HP+'<br>Attaque: '+myPokemons[i].stats.attack+'<br>Défense: '+myPokemons[i].stats.defense+'<br>Attaque spéciale: '+myPokemons[i].stats.special_attack+'<br>Défense Spéciale: '+myPokemons[i].stats.special_defense+'<br>Vitesse: '+myPokemons[i].stats.speed;
        if(myPokemons[i].apiTypes.length == 1){
          myType.innerHTML = ''+myPokemons[i].apiTypes[0].name
        }else{
          myType.innerHTML = ''+myPokemons[i].apiTypes[0].name+'<br>'+myPokemons[i].apiTypes[1].name;
        }
        myID.innerHTML = '#'+myPokemons[i].pokedexId;
      }
      if(myText.value == myPokemons[i].id){
        myName.innerHTML = myPokemons[i].name;
        myImage.style.backgroundImage = "url("+myPokemons[i].image+")";
        myInformations.innerHTML = 'PV: '+myPokemons[i].stats.HP+'<br>Attaque: '+myPokemons[i].stats.attack+'<br>Défense: '+myPokemons[i].stats.defense+'<br>Attaque spéciale: '+myPokemons[i].stats.special_attack+'<br>Défense Spéciale: '+myPokemons[i].stats.special_defense+'<br>Vitesse: '+myPokemons[i].stats.speed;
        if(myPokemons[i].apiTypes.length == 1){
          myType.innerHTML = ''+myPokemons[i].apiTypes[0].name;
        }else{
          myType.innerHTML = ''+myPokemons[i].apiTypes[0].name+'<br>'+myPokemons[i].apiTypes[1].name;
        }
        myID.innerHTML = '#'+myPokemons[i].pokedexId;
      }
    }
  });
  myButtonPlus.addEventListener('click',function(){
    alert('hello');
  });
});
