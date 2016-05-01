/* js main file*/
// element.addEventListener('click',function()); -> podpinamy to pod id w HTML.

function addListeners(){
  
  var doThisForFirstSection = document.getElementById('sec-one');
  doThisForFirstSection.addEventListener('click', buttonsEvent, false);

}

function buttonsEvent(e){
  if(!e) e = window.event; // why this is important !
  
  var elementNew =  document.createElement('div');
  var textNew = document.createTextNode('text ' + e.target.id + ' buuuu nie wiem czy to zadziała');
  elementNew.appendChild(textNew);
  var x = e.target.id;
  var y = e.currentTarget.id;

  var tagBefore = document.getElementById(x);
  var parent = document.getElementById('art-'+x);
  
  x === y ? console.log('true : x' + x + ' y:' + y) : console.log('false x: '+x+ ' y: '+y);

  
  console.log('parent: ' + parent.id);
  console.log('tagBefore ' + tagBefore.id);

  elementNew = parent.insertBefore(elementNew, tagBefore );

}


function modifyText(){
  var t2 = document.getElementById('t2');
    t2.firstChild.nodeValue == 'three' ? t2.firstChild.nodeValue = 'two' : t2.firstChild.nodeValue = 'three'; 
}

var elem = document.getElementById('outside');
elem.addEventListener('click', modifyText, false);

console.log('fdsfsdfsdfsd');
addListeners()
//window.onload = addListeners();

//window.addEventListener
