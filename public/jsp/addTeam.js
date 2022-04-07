import getWidth from '../jsp/general.js';

function createCard(imgPath, text1, text2){
    let card = document.createElement('div');
        card.className = 'card';
    let photo = document.createElement('img');
        photo.setAttribute('src', imgPath);
        photo.setAttribute('alt', 'photo');
        card.append(photo);
    let span1 = document.createElement('span');
        span1.innerHTML = text1;
        card.append(span1);
    let span2 = document.createElement('span');
        span2.innerHTML = text2;
        card.append(span2);
    let buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        card.append(buttonContainer);
    let buttons = new Array(4);
    for(let i = 0; i < buttons.length; i++){
        buttons[i] = document.createElement('div');
        buttonContainer.append(buttons[i]);
    }
    return card;
}

function addCards(){
    let container = document.querySelector('.ourTeam .slider .slideContainer');
        container.innerHTML = '';
        container.append(createCard('../image/team/team1.jpg', 'Jhon Doe', 'General Manager'));
        container.append(createCard('../image/team/team2.jpg', 'Alexa Biru', 'Office Director'));
        container.append(createCard('../image/team/team3.jpg', 'Ronobir Sing', 'Admin'));
        container.append(createCard('../image/team/team3.jpg', 'Ronobir Sing', 'Admin'));
        container.append(createCard('../image/team/team2.jpg', 'Alexa Biru', 'Office Director'));
        container.append(createCard('../image/team/team1.jpg', 'Jhon Doe', 'General Manager'));
        container.append(createCard('../image/team/team3.jpg', 'Ronobir Sing', 'Admin'));
        container.append(createCard('../image/team/team2.jpg', 'Alexa Biru', 'Office Director'));
        container.append(createCard('../image/team/team1.jpg', 'Jhon Doe', 'General Manager'));
}

export default function addTeamCards(){
    addCards();
    let slideContainer = document.querySelector('.slider .slideContainer');
        slideContainer.style.left = 0;
    let buttons = document.querySelectorAll('.ourTeam .sliderNavig .button');
    let mobileBLeft = document.querySelector(".bLeft");
    let mobileBRight = document.querySelector(".bRight");
    buttons[0].style.backgroundColor = 'rgb(57, 73, 171)';
    for(let i = 1; i < buttons.length; i++){
        buttons[i].style.backgroundColor = 'rgb(0, 137, 123)';
    }

    let slideShift = 1200;
    window.onresize = function(event) {
        let lWidth = getWidth(); 
        for(let j = 0; j < buttons.length; j++){             
            buttons[j].style.backgroundColor = 'rgb(0, 137, 123)';
        }
        buttons[0].style.backgroundColor = 'rgb(57, 73, 171)';

        if(lWidth > 1400 && slideShift != 1200)
        {
            slideShift = 1200;
            moveSlides(0);
        }   

        if(lWidth <= 1400 && lWidth > 1100 && slideShift != 960)
        {
            slideShift = 960;
            moveSlides(0);
        }   

        if(lWidth <= 1100 && slideShift != 630)
        {
            slideShift = 630;
            moveSlides(0);
        }   
    };

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', ()=>{
            for(let j = 0; j < buttons.length; j++){             
                if (j != i)
                    buttons[j].style.backgroundColor = 'rgb(0, 137, 123)';
            }
            buttons[i].style.backgroundColor = 'rgb(57, 73, 171)';
            moveSlides(i);
        });
    }

    let index = 0;
    {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            mobileBLeft.addEventListener("touchstart", function(){
                if(index > 0)
                {
                    index--;
                    mMoveSlides(index);
                }
            })
            mobileBRight.addEventListener("touchstart", function(){
                if(index < 8)
                {
                    index++;
                    mMoveSlides(index);
                }
            })
        }
    }
    

    function moveSlides(i){
        let lWidth = getWidth();
        slideContainer.style.left = -i * slideShift + 'px';
    }

    function mMoveSlides(i){
        let cardWidth = 210;
        slideContainer.style.left = -i * cardWidth + 'px';
    }
}