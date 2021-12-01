/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

alert("haha")
*/
/*
document.querySelector('html').onclick = function() {
    alert('first test onclick');
}
*/

let idAndy = document.getElementById('andy');
let idDebbie = document.getElementById('debbie');
let idJohn = document.getElementById('John');
let showImage = document.querySelector('img');

idAndy.onclick = function() {
    showImage.setAttribute('src', 'img/1.jpg');
}

idDebbie.onclick = function() {
    showImage.setAttribute('src', 'img/2.jpg');
}

showImage.onclick = function() {
    let mySrc = showImage.getAttribute('src');
    if(mySrc === 'img/1.jpg'){
        showImage.setAttribute('src', 'img/2.jpg');
    } else {
        showImage.setAttribute('src', 'img/1.jpg');
    }
}

var myButton = document.querySelector('button');
var myh1 = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myh1.innerHTML = 'user ' + myName;
}

function userAndImage()
{
    if(localStorage.getItem('name') === 'andy'){
        showImage.setAttribute('src', 'img/1.jpg');
    } else if (localStorage.getItem('name') === 'debbie'){
        showImage.setAttribute('src', 'img/2.jpg');
    }
}

if(!localStorage.getItem('name')){
    setUserName();
    userAndImage();
} else {
    let storeName = localStorage.getItem('name');
    myh1.innerHTML = 'user ' + storeName;
    userAndImage();
}

myButton.onclick = function() {
    setUserName();
    userAndImage();
}