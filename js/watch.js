var randomImage = new Array();
randomImage[0] = "../images/book.jpg";
randomImage[1] = "../images/bike.jpg";
randomImage[2] = "../images/body.jpg";
randomImage[3] = "../images/love.jpg";
randomImage[4] = "../images/skin.jpg";
function getRandomImage() { 
var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
}
getRandomImage()