// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //Creating Elements
    const mainHead = document.createElement('div');
    const dateHead = document.createElement('span');
    const titleHead = document.createElement('h1');
    const tempHead = document.createElement('span');


    // Appending
    mainHead.appendChild(dateHead);
    mainHead.appendChild(titleHead);
    mainHead.appendChild(tempHead)


    // ClassLists
    mainHead.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    return mainHead;
}

//test
const headerParent = document.querySelector('.header-container');

headerParent.appendChild(Header());
