var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jerry-garcia.jpg') {
      myImage.setAttribute ('src','images/jerry-garcia2.jpg');
    } else {
      myImage.setAttribute ('src','images/jerry-garcia.jpg');
    }
}
