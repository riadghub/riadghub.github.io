fetch("https://pokebuildapi.fr/api/v1/pokemon");

let myText = document.querySelector('input');
let myButton = document.querySelector('button');
let myName = document.querySelector('#name-screen');
let myImage = document.querySelector('#main-screen');

myButton.addEventListener('click',function () {
    myImage.style.backgroundImage = ''; // récupérer valeur du myText pour récupérer image via API
    myName.innerHTML = myText.value;
  });

console.log(myButton);
console.log(myText);
console.log(myName);