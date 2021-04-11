const imageArray = [
  "1a.png","2a.png","3a.png","4a.png","5a.png","6a.png","7a.png","8a.png","9a.png","10a.png","11a.png","12a.png","13a.png","14a.png"
];

const image = document.querySelector("img");

window.onload = () => generateRandomPicture(imageArray);

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length); 
  image.setAttribute ("src", array[randomNum]);}

window.onresize = () => generateRandomPicture(imageArray);



