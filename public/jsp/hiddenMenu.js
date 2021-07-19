export default function hiddenMenu(){
    let button = document.querySelector('.hamburger');
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        button.addEventListener('tochstart', changeVisibility);
        button.addEventListener('click', changeVisibility);
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
}