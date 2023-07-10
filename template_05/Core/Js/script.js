let myButtonMinus = document.querySelector('#minus');
let myButtonPlus = document.querySelector('#plus');
let myID = document.querySelector('#id-screen');
let myType = document.querySelector('#type-screen');
let myInformations = document.querySelector('#about-screen');
let myText = document.querySelector('input');
let myButton = document.querySelector('button');
let myName = document.querySelector('#name-screen');
let myImage = document.querySelector('#main-screen');
alert("N'hésitez pas à cliquer sur les + et - pour parcourir la liste des pokémons !");
fetch('https://pokebuildapi.fr/api/v1/pokemon')
  .then((response) => {
    return response.json();
})
.then((data) => {
  let index = 0;
  let myPokemons = data;
  myButton.addEventListener('click',function () {
    let myTextC = myText.value;
    myTextC = myTextC.charAt(0).toUpperCase();
    for(let j = 1; j < myText.value.length;j++){
      myTextC += myText.value.charAt(j).toLowerCase();
    }
    for(let i = 0; i < myPokemons.length; i++){
      if(myTextC === myPokemons[i].name){
        myName.innerHTML = myPokemons[i].name;
        myImage.style.backgroundImage = "url("+myPokemons[i].image+")";
        myInformations.innerHTML = 'PV: '+myPokemons[i].stats.HP+'<br>Attaque: '+myPokemons[i].stats.attack+'<br>Défense: '+myPokemons[i].stats.defense+'<br>Attaque spéciale: '+myPokemons[i].stats.special_attack+'<br>Défense Spéciale: '+myPokemons[i].stats.special_defense+'<br>Vitesse: '+myPokemons[i].stats.speed;
        if(myPokemons[i].apiTypes.length == 1){
          myType.innerHTML = ''+myPokemons[i].apiTypes[0].name;
        }else{
          myType.innerHTML = ''+myPokemons[i].apiTypes[0].name+'<br>'+myPokemons[i].apiTypes[1].name;
        }
        myID.innerHTML = '#'+myPokemons[i].pokedexId;
        index = myPokemons[i].pokedexId;
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
        index = myPokemons[i].pokedexId;
      }
    }
  });
  myButtonPlus.addEventListener('click',function(){
    for(let i = 0; i < myPokemons.length; i++){
      if(index === 897){
        index = -1;
      }
      myName.innerHTML = myPokemons[index+1].name;
      myImage.style.backgroundImage = "url("+myPokemons[index+1].image+")";
      myInformations.innerHTML = 'PV: '+myPokemons[index+1].stats.HP+'<br>Attaque: '+myPokemons[index+1].stats.attack+'<br>Défense: '+myPokemons[index+1].stats.defense+'<br>Attaque spéciale: '+myPokemons[index+1].stats.special_attack+'<br>Défense Spéciale: '+myPokemons[index+1].stats.special_defense+'<br>Vitesse: '+myPokemons[index+1].stats.speed;
      if(myPokemons[index+1].apiTypes.length == 1){
        myType.innerHTML = ''+myPokemons[index+1].apiTypes[0].name;
      }else{
        myType.innerHTML = ''+myPokemons[index+1].apiTypes[0].name+'<br>'+myPokemons[index+1].apiTypes[1].name;
      }
      myID.innerHTML = '#'+myPokemons[index+1].pokedexId;
    }
    index++;
  });
  myButtonMinus.addEventListener('click',function(){
    for(let i = 0; i < myPokemons.length; i++){
      if(index === 0){
        index = 898;
      }
      myName.innerHTML = myPokemons[(index-1)].name;
      myImage.style.backgroundImage = "url("+myPokemons[(index-1)].image+")";
      myInformations.innerHTML = 'PV: '+myPokemons[(index-1)].stats.HP+'<br>Attaque: '+myPokemons[(index-1)].stats.attack+'<br>Défense: '+myPokemons[(index-1)].stats.defense+'<br>Attaque spéciale: '+myPokemons[(index-1)].stats.special_attack+'<br>Défense Spéciale: '+myPokemons[(index-1)].stats.special_defense+'<br>Vitesse: '+myPokemons[(index-1)].stats.speed;
      if(myPokemons[(index-1)].apiTypes.length == 1){
        myType.innerHTML = ''+myPokemons[(index-1)].apiTypes[0].name;
      }else{
        myType.innerHTML = ''+myPokemons[(index-1)].apiTypes[0].name+'<br>'+myPokemons[(index-1)].apiTypes[1].name;
      }
      myID.innerHTML = '#'+myPokemons[(index-1)].pokedexId;
    }
    index--;
  });
});

