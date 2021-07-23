export default function hiddenMenu(){
    let button = document.querySelector('.hamburger');
    document.addEventListener('scroll', hideNavig);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        button.addEventListener('touchstart', changeVisibility);
    }else{
        button.addEventListener('click', changeVisibility);
    }

    function changeVisibility(){
    
        let hiddenNavig = document.querySelector('.hiddenNavig');
        if(hiddenNavig.style.visibility == 'visible') {
       
            hiddenNavig.style.visibility = 'hidden';
        }
        else{
            hiddenNavig.style.visibility = 'visible';
        }
    }

    function hideNavig(){
        let hiddenNavig = document.querySelector('.hiddenNavig');
            hiddenNavig.style.visibility = 'hidden';
    }
}