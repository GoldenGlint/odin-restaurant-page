import chineseImg from "./photos/chinese.jpg";
import cookingImg from "./photos/cooking.jpg";

export const aboutUs = () => {

const cooking = document.createElement("img");
cooking.src = cookingImg;
cooking.alt = "cooking";
cooking.id="cooking";


const intro = document.createElement("h1");
intro.id="intro";
intro.textContent="Humble Origins"

const story = document.createElement("p");
story.textContent = "At Glint's Great Grubs, we believe the best food tells a story. Born from a love of the bustling night markets and hawker stalls of China, we set out to bring those bold, honest flavours to Canada — not watered down, but elevated. Every dish we serve is rooted in tradition and finished with care, from our hand-folded xiao long bao to our slow-braised pork belly. This is the food we grew up with, and we're proud to share it with you.";
story.id="story";

const exploreButton = document.createElement("button");
exploreButton.id="explore";
exploreButton.textContent="Explore More!";

const usContainer=document.createElement("div");
usContainer.id="us-container";

usContainer.appendChild(cooking);
usContainer.appendChild(intro);
usContainer.appendChild(story);
usContainer.appendChild(exploreButton);

chinese=document.createElement("img");
img.src=chineseImg;
img.alt="Chinese Festival";

const abtWrapper=document.createElement("div");
abtWrapper.id="about-wrapper";

abtWrapper.appendChild(chinese);
abtWrapper.appendChild(usContainer);

}