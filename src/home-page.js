import bubbleTeaImg from "./photos/bubble-tea.jpg";
import congeeImg from "./photos/congee.jpg";
import eggTartsImg from "./photos/egg-tarts.jpg";
import friedRiceImg from "./photos/fried-rice.jpg";
import harGowImg from "./photos/har-gow.jpg";
import noodlesImg from "./photos/noodles.jpg";
import porkBellyImg from "./photos/pork-belly.jpg"
import stirFryVeggiesImg from "./photos/stir-fry-veggies.jpg"
import xiaoLongBaoImg from "./photos/xiao-long-bao.jpg";


export const homepage = () => {
const content=document.querySelector("#content");
content.innerHTML = "";

content.style.display = "flex";
content.style.alignItems = "center";
content.style.justifyContent = "center";
//create middle
const middle=document.createElement("div");
const caption=document.createElement("h1");
const learnButton=document.createElement("button");

middle.id="middle";

caption.textContent="FIND US ON";

learnButton.id="learn";
learnButton.textContent="LEARN MORE";

middle.appendChild(caption);
middle.appendChild(learnButton);

//create image grid

const photoGrid=document.createElement("div");
photoGrid.id="photo-grid";

const bubbleTea=document.createElement("img");
bubbleTea.src=bubbleTeaImg;
bubbleTea.alt = 'bubble tea';

const congee=document.createElement("img");
congee.src=congeeImg;
congee.alt = 'congee';

const eggTarts=document.createElement("img");
eggTarts.src=eggTartsImg;
eggTarts.alt = 'egg tarts';

const friedRice=document.createElement("img");
friedRice.src=friedRiceImg;
friedRice.alt = 'fried rice';

const harGow=document.createElement("img");
harGow.src=harGowImg;
harGow.alt = 'har gow';

const noodles=document.createElement("img");
noodles.src=noodlesImg;
noodles.alt = 'noodles';

const porkBelly=document.createElement("img");
porkBelly.src=porkBellyImg;
porkBelly.alt = 'pork belly';

const stirFryVeggies=document.createElement("img");
stirFryVeggies.src=stirFryVeggiesImg;
stirFryVeggies.alt = 'stir fry veggies';

const xiaoLongBao=document.createElement("img");
xiaoLongBao.src=xiaoLongBaoImg;
xiaoLongBao.alt = 'xiao long bao';

photoGrid.appendChild(bubbleTea);
photoGrid.appendChild(congee);
photoGrid.appendChild(eggTarts);
photoGrid.appendChild(friedRice);
photoGrid.appendChild(harGow);
photoGrid.appendChild(noodles);
photoGrid.appendChild(porkBelly);
photoGrid.appendChild(stirFryVeggies);
photoGrid.appendChild(xiaoLongBao);


content.appendChild(photoGrid);
content.appendChild(middle);

};