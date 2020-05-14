const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let element = document.getElementsByClassName("flex-container justify")[0];

//大循环
for(let j = 0; j < 4; j ++) {
    //大背景
    let items = document.createElement("div");
    let tip = document.createElement("h4");
    tip.innerText = "Genre: " + works[j].tips;

    //人物生平
    let introduction = document.createElement("div");
    let author = document.createElement("h3");
    author.innerText = works[j].author + "  ";
    let lifetime = document.createElement("h5");
    lifetime.innerText = "lifetime:" + works[j].lifetime;
    author.style.display = "inline";
    lifetime.style.display = "inline";

    //照片框
    let photoBox = document.createElement("div");
    let pTitle = document.createElement("h3");
    pTitle.innerText = "Popular Photos";
    photoBox.appendChild(pTitle);
    for (let i = 0; i < works[j].photos.length; i++) {
        let picture = document.createElement("img");
        picture.src = works[j].photos[i];
        picture.className = "photo";
        picture.style.display = "inline";
        photoBox.appendChild(picture);
    }

    //提交键
    let vButton = document.createElement("button");
    vButton.innerHTML = "Visit";

    //添加到大背景上
    introduction.append(author, lifetime);
    items.append(tip, introduction, photoBox, vButton);
    introduction.className = "inner-box";
    photoBox.className = "inner-box";
    items.className = "item";
    element.appendChild(items);
}