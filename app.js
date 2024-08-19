//Body Sec;
var mainContainer = document.getElementById("main-container");

// First Card Start;
//Headphone Card Sec;
var cardDiv = document.createElement("div");
cardDiv.setAttribute("class", "card-div");
cardDiv.setAttribute("id", "headphoneCard-div");
mainContainer.appendChild(cardDiv);

//Card Img sec;
var headphoneImgDiv = document.createElement("div");
headphoneImgDiv.setAttribute("class", "headphone-img-div")
var headphoneImg = document.createElement("img");
headphoneImg.setAttribute("src", "./images/headphone-image.png");
headphoneImgDiv.appendChild(headphoneImg);
cardDiv.appendChild(headphoneImgDiv);

//Content Sec;
var contentDiv = document.createElement("div");
contentDiv.setAttribute("class", "content-div");
cardDiv.appendChild(contentDiv);
var headphoneHeading = document.createElement("h2");
var headphoneHeadingText = document.createTextNode("Wireless Headphone");
headphoneHeading.appendChild(headphoneHeadingText);
contentDiv.appendChild(headphoneHeading);
var headphonePara = document.createElement("p");
var headphoneParaText = document.createTextNode("Premium wireless headphones: clear sound, noise-cancellation, 20-hour battery life.");
headphonePara.appendChild(headphoneParaText);
contentDiv.appendChild(headphonePara);

//Button Sec;
var btnDiv = document.createElement("div");
btnDiv.setAttribute("class", "btn-div");
cardDiv.appendChild(btnDiv);
var addBtn = document.createElement("button");
var addBtnText = document.createTextNode("Add To Cart");
addBtn.appendChild(addBtnText);
btnDiv.appendChild(addBtn);
var buyBtn = document.createElement("button");
var buyBtnText = document.createTextNode("Buy");
buyBtn.appendChild(buyBtnText);
btnDiv.appendChild(buyBtn);
// First Card End;

// Second Card Start;
//Mouse Card Sec;
var mouseCardDiv = document.createElement("div");
mouseCardDiv.setAttribute("class", "mouseCard-div");
mouseCardDiv.setAttribute("id", "mouseCard-div");
mainContainer.appendChild(mouseCardDiv);

//Mouse Card Img Sec;
var mouseImgDiv = document.createElement("div");
mouseImgDiv.setAttribute("class", "mouse-img-div");
var mouseImg = document.createElement("img");
mouseImg.setAttribute("src", "./images/mouse-image.png");
mouseImgDiv.appendChild(mouseImg);
mouseCardDiv.appendChild(mouseImgDiv);
var mousePricePara = document.createElement("p");
var mousePriceParaText = document.createTextNode("$599");
mousePricePara.appendChild(mousePriceParaText);
mouseImgDiv.appendChild(mousePricePara)

//Mouse Content Sec;
var mouseContentDiv = document.createElement("div");
mouseContentDiv.setAttribute("class", "mouseContent-div");
mouseCardDiv.insertBefore(mouseContentDiv, mouseImgDiv);
var mouseHeading = document.createElement("h2");
var mouseHeadingText = document.createTextNode("Wireless Mouse With Beautiful Design");
mouseHeading.appendChild(mouseHeadingText);
mouseContentDiv.appendChild(mouseHeading);
var mousePara = document.createElement("p");
var mouseParaText = document.createTextNode("Compact wireless mouse card for seamless");
mousePara.appendChild(mouseParaText);
mouseContentDiv.appendChild(mousePara);

//Mouse Button Sec;
var mouseBtnDiv = document.createElement("div");
mouseBtnDiv.setAttribute("class", "mouseBtn-div");
mouseCardDiv.appendChild(mouseBtnDiv);
var mouseBtn = document.createElement("button");
var mouseBtnText = document.createTextNode("Shop Now");
mouseBtn.appendChild(mouseBtnText);
mouseBtnDiv.appendChild(mouseBtn);
// Second Card End;

//Third Card Start;
// Earbud Card Sec;
var earbudCardDiv = document.createElement("div");
earbudCardDiv.setAttribute("class", "earbudCard-div");
earbudCardDiv.setAttribute("id", "earbudCard-div");
mainContainer.appendChild(earbudCardDiv);

// EarbudCard Img sec;
var earbudImgDiv = document.createElement("div");
earbudImgDiv.setAttribute("class", "earbud-Img-Div")
var earbudImg = document.createElement("img");
earbudImg.setAttribute("src", "./images/earbuds-image.jpeg");
earbudImgDiv.appendChild(earbudImg);
earbudCardDiv.appendChild(earbudImgDiv);

//Earbud Content Sec;
var earbudContentDiv = document.createElement("div");
earbudContentDiv.setAttribute("class", "earbudContent-div");
earbudCardDiv.appendChild(earbudContentDiv);
var earbudHeading = document.createElement("h2");
var earbudHeadingText = document.createTextNode("Wireless Earbuds");
earbudHeading.appendChild(earbudHeadingText);
earbudContentDiv.appendChild(earbudHeading);
var earbudPara = document.createElement("p");
var earbudParaText = document.createTextNode("Compact wireless earbuds with superior sound quality, long battery life");
earbudPara.appendChild(earbudParaText);
earbudContentDiv.appendChild(earbudPara);
var earbudSpan = document.createElement('span');
var earbudSpanText = document.createTextNode("$69.99");
earbudSpan.appendChild(earbudSpanText);
earbudContentDiv.appendChild(earbudSpan);

//Earbud Button Sec;
var earbudBtnDiv = document.createElement("div");
earbudBtnDiv.setAttribute("class", "earbudBtn-div");
earbudCardDiv.appendChild(earbudBtnDiv);
var earbudBtn = document.createElement("button");
var earbudBtnText = document.createTextNode("ADD TO CART");
earbudBtn.appendChild(earbudBtnText);
earbudBtnDiv.appendChild(earbudBtn);
// Third Card End;

var headphoneCardDivId = document.getElementById('headphoneCard-div');
var mouseCardDivId = document.getElementById('mouseCard-div');
var earbudCardDivId = document.getElementById('earbudCard-div');

// HeadPhone Card Div Hover Effect;
headphoneCardDivId.addEventListener('mouseover', () => {
    mouseCardDivId.style.filter = 'blur(4px)';
    earbudCardDivId.style.filter = 'blur(4px)';
});
headphoneCardDivId.addEventListener('mouseout', () => {
    mouseCardDivId.style.filter = 'none';
    earbudCardDivId.style.filter = 'none';
});

// Mouse Card Div Hover Effect;
mouseCardDivId.addEventListener('mouseover', () => {
    headphoneCardDivId.style.filter = 'blur(4px)';
    earbudCardDivId.style.filter = 'blur(4px)';
});
mouseCardDivId.addEventListener('mouseout', () => {
    headphoneCardDivId.style.filter = 'none';
    earbudCardDivId.style.filter = 'none';
});

// Earbud Card Div Hover Effect;
earbudCardDivId.addEventListener('mouseover', () => {
    headphoneCardDivId.style.filter = 'blur(4px)';
    mouseCardDivId.style.filter = 'blur(4px)';
});
earbudCardDivId.addEventListener('mouseout', () => {
    headphoneCardDivId.style.filter = 'none';
    mouseCardDivId.style.filter = 'none';
});