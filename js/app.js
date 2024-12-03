/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll("section");
let menu = document.querySelector("#navbar__list");

function createNavbar(){
    for (let i=0;i<sections.length;i++){
        
        // Get the name of the section
        indexName=sections[i].getAttribute('data-nav');
        // Get the id of the index for scrolling.
        indexLink=sections[i].getAttribute("id");
        

        // Create Index Element
        indexItem= document.createElement('li');
        indexItem.innerHTML = `<a class="menu__link"  href="#${indexLink}">${indexName}</a>`;
        // Add index using append child function
        menu.appendChild(indexItem);
    }
    
}

function checkIfElementInVP(element){

    vp = element.getBoundingClientRect();
    if (vp.top >= 0 && vp.left >= 0 && vp.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    vp.right <= (window.innerWidth || document.documentElement.clientWidth)){
        return true;
    }
    return false;
}

function render(){
    for(let i=0;i<sections.length;i++){
        if(checkIfElementInVP(sections[i]) && !sections[i].classList.contains('your-active-class')){
            sections[i].classList.add('your-active-class');
        }
        else if (checkIfElementInVP(sections[i]) && sections[i].classList.contains('your-active-class')){
            continue;
        }
        else{
            sections[i].classList.remove('your-active-class');
        }



    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavbar();

document.addEventListener("scroll",render);


