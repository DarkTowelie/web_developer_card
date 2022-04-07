function createRow(imagePath, desTitle, dateText, categoryText, contentText, index){
    let adGrid = document.querySelector(".adGrid");
    let preview = document.createElement("img");
    preview.classList.add("preview");
    preview.setAttribute("alt", "preview");
    preview.setAttribute("src", imagePath)

    let description = document.createElement("div");
    description.classList.add("description");

    let title = document.createElement("span");
    title.classList.add("title");
    title.innerHTML = desTitle;
    description.append(title);

    let inf = document.createElement("div");
    inf.classList.add("info");

    let date = document.createElement("div");
    date.classList.add("date");
    let category = document.createElement("div");
    category.classList.add("category");
    inf.append(date);
    inf.append(category);
    description.append(inf);

    let dateImg = document.createElement("img");
    dateImg.setAttribute("alt", "preview");
    dateImg.setAttribute("src", "../image/adInfo/date.png")
    let dateSpan = document.createElement("span");
    dateSpan.innerHTML = dateText;
    date.append(dateImg);
    date.append(dateSpan);

    let categoryImg = document.createElement("img");
    categoryImg.setAttribute("alt", "category");
    categoryImg.setAttribute("src", "../image/adInfo/page.png")
    let categorySpan = document.createElement("span");
    categorySpan.innerHTML = categoryText;
    category.append(categoryImg);
    category.append(categorySpan);

    let content = document.createElement("span");
    content.classList.add("content");
    content.innerHTML = contentText;
    description.append(content);

    if(getWidth() >= 720)
    {
        if(index % 2 == 0){
            adGrid.append(preview);
            adGrid.append(description);
        }
        else{
            adGrid.append(description);
            adGrid.append(preview);
        }
    }
    else
    {
        adGrid.append(description);
        adGrid.append(preview);
    }
    
}

export default function addAdGrid(){
    let index = 0;
    createRow("../image/adGrid/1.jpg", 
        "SEO Quis Vestibulum",
        "23.10.2022", 
        "Development", 
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...", 
        index++);

    createRow("../image/adGrid/2.jpg", 
        "SEO Quis Vestibulum",
        "23.10.2022", 
        "Development", 
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...", 
        index++);

    createRow("../image/adGrid/3.jpg", 
        "SEO Quis Vestibulum",
        "23.10.2022", 
        "Development", 
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...", 
        index++); 
}

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }