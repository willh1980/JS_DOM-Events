console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");

node1.innerHTML = "I used the getElementById 'node1' method to access this"

console.log(node1)
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");

node2[0].innerHTML = "I used the getElementsByClassName 'node2' method to access this"


// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Tag = document.getElementsByTagName("h3")
    for (let i = 0; i < h3Tag.length; i++) {
        h3Tag[i].innerHTML = "I used the getElementByTagName 'h3' method to access all of these";
    }
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newP = document.createElement("p")
let parent = document.querySelector("#parent")
// TODO: Append the created node to the parent node using the element.appendChild() method
parent.appendChild(newP)
newP.innerHTML = "I am a 'p' tag"
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let newA = document.createElement("a")
// BONUS: Add a link href to the <a>
newA.innerHTML = "I am an 'a' tag"
newA.href = "https://www.google.com"

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(newA, newP)




/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let N1 = document.getElementById("N1")
let N2 = document.createElement("p")
N2.textContent = ("New Child Node")
let ex3Parent = document.getElementById("exercise-container3")
ex3Parent.replaceChild(N2, N1)

// TODO: Remove the "New Child Node"
ex3Parent.removeChild(N2)
/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
const box = document.getElementById("box")
let timer = setInterval(move, 50)
let boxPosition = 0

function move(){
    if (boxPosition >= 150) {
      clearInterval(timer);
    } else {
      boxPosition++;
      box.style.left = boxPosition + "px";
    }
  }


  

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/
function show() {
  let newDiv = document.createElement("div")
  newDiv.innerHTML =  "<p>Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user<br></p>"
  let btn = document.getElementById("btn")
  let exercise5 = document.getElementsByClassName("exercise-container exercise5")
  exercise5[0].insertBefore(newDiv, btn)

}

show()
  // TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
