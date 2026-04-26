//DOM(Document Object Model) is a programming interface for web documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


//Accessing the html element
//changing the content of the element
//Applying styles to the element
//create an element and append it to the DOM
//remove an element from the DOM
//add some events to the element
//remove some events from the element

let h1 = document.getElementById("heding") // getElementById() method is used to access the element by its id. It returns the element object that has the specified id.
console.log(h1) // when we log the element object, it will return the html element with the specified id.

//change the text
//h1.textContent = "DOM Manipulation in JavaScript" // textContent property is used to change the text content of the element. 
// It takes a string as an argument and sets the text content of the element to that string.

h1.innerHTML = "<span style='color:red'>DOM Manipulation in JavaScript</span>" // innerHTML property is used to change the html content of the element. 
// It takes a string as an argument and sets the html content of the element to that string. 
// It can be used to add new html elements inside the existing element.

//ways to select html elements
//getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
//getElementById() method is used to access the element by its id. It returns the element object that has the specified id.
//getElementsByClassName() method is used to access the elements by their class name. It returns a collection of elements that have the specified class name.
//getElementsByTagName() method is used to access the elements by their tag name. It returns a collection of elements that have the specified tag name.
//querySelector() method is used to access the first element that matches a specified CSS selector. It returns the first element object that matches the selector.
//querySelectorAll() method is used to access all the elements that match a specified CSS selector. It returns a collection of element objects that match the selector.