window.onload = function(){
  console.log('YO YO YO!!! window.onload called!');
  var myName = 'Jon';

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  function generateDocument(){
    //1. document.createElement
    //2. element.appendChild

    var element = document.createElement('span');
    element.id = 'myLastName';
    document.body.appendChild(element);
    //<div id='someId'>TEST</div>

    var newElement = document.createElement('span');
    newElement.id = 'someOtherId';
    document.getElementById('someId').appendChild(newElement);
  }

  generateDocument();
  
};


var firstDiv = document.createElement ('div');
firstDiv.id = 'first';
document.body.appendChild(firstDiv);

var firstSpan = document.createElement ('span');
firstSpan.id = 'myName';
document.getElementById('first').appendChild(firstSpan);

var firstText = document.createTextNode('Arnel');
document.getElementById('myname').appendChild(firstText);