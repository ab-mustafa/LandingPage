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


//get a reference for all element with attribute section.
let sections = document.querySelectorAll("section");
// get access to menu element
let menu = document.querySelector("#navbar__list");




/**
 * Add index for each section in the page into the menu.
 * @param {element} sections - sections ref.
 * @param {element} menu - menu ref.
 * @returns {void}
 */
function createNavbar(sections, menu){
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


/**
 * Check if the element within the view port.
 * @param {Element} element - Element to check.
 * @returns {boolean} - Exist or not.
 */
function checkIfElementInVP(element){

    vp = element.getBoundingClientRect();
    if (vp.top >= 0 && vp.left >= 0 && vp.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    vp.right <= (window.innerWidth || document.documentElement.clientWidth)){
        return true;
    }
    return false;
}




/**
 * Set active class property for section in the view port .
 * @returns {void}
 */
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





// build the nav
createNavbar(sections, menu);
// Add listener for screen scrolling.
document.addEventListener("scroll",render);


