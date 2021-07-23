function createCard(imgPath, text1, text2){
    let card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = 'url(' + imgPath + ')';
    let description = document.createElement('div');
        description.className = 'description';
        card.append(description);
    let span1 = document.createElement('span');
        span1.innerHTML = text1;
        description.append(span1);
    let span2 = document.createElement('span');
        span2.innerHTML = text2;
        description.append(span2);
    return card;
}

function allClick(){
    let container = document.querySelector('.lastestWork .cardContainer');
        container.innerHTML = '';
        container.append(createCard('../image/goods/1.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/2.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/3.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/4.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/5.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/6.jpg', 'Hand Watch', 'ui/ux design'));
}

function webDesignClick(){
    let container = document.querySelector('.lastestWork .cardContainer');
        container.innerHTML = '';
        container.append(createCard('../image/goods/7.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/8.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/9.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/10.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/11.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/12.jpg', 'Hand Watch', 'ui/ux design'));
}

function uxDesignClick(){
    let container = document.querySelector('.lastestWork .cardContainer');
        container.innerHTML = '';
        container.append(createCard('../image/goods/13.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/14.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/15.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/16.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/17.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/18.jpg', 'Hand Watch', 'ui/ux design'));
}

function mockupsClick(){
    let container = document.querySelector('.lastestWork .cardContainer');
        container.innerHTML = '';
        container.append(createCard('../image/goods/19.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/20.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/21.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/22.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/23.jpg', 'Hand Watch', 'ui/ux design'));
        container.append(createCard('../image/goods/24.jpg', 'Hand Watch', 'ui/ux design'));
}

export default function addGoodsClick(){
    let buttons = document.querySelectorAll('.goods .button');
    allClick();
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        buttons[0].addEventListener('touchstart', allClick);
        buttons[1].addEventListener('touchstart', webDesignClick);
        buttons[2].addEventListener('touchstart', uxDesignClick);
        buttons[3].addEventListener('touchstart', mockupsClick);
    }else{
        buttons[0].addEventListener('click', allClick);
        buttons[1].addEventListener('click', webDesignClick);
        buttons[2].addEventListener('click', uxDesignClick);
        buttons[3].addEventListener('click', mockupsClick);
    }
    
}