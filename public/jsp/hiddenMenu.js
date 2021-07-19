export default function hiddenMenu(){
    let button = document.querySelector('.hamburger');
    button.addEventListener('click', changeVisibility);
    button.addEventListener('tochstart', changeVisibility);
    
    function changeVisibility(){
    
        let hiddenNavig = document.querySelector('.hiddenNavig');
        if(hiddenNavig.style.visibility == 'visible') {
       
            hiddenNavig.style.visibility = 'hidden';
        }
        else{
            hiddenNavig.style.visibility = 'visible';
        }
    }
}