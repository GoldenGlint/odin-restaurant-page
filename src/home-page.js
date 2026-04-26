
//create middle
const middle=document.createElement("div");
const caption=document.createElement("h1");
const learnButton=document.create("button");

middle.id="middle";

caption.textContent="FIND US ON";

learnButton.id="learn";
learnButton.textContent="LEARN MORE";

middle.appendChild(caption);
middle.appendChild(learnButton);

//create image grid

const photoGrid=document.createElement("div");

const bubbleTea=document.create("img");
bubbleTea.src="./photos/bubble-tea.jpg"
bubbleTea.alt = 'bubble tea';

const congee=document.create("img");
congee.src="./photos/congee.jpg"
congee.alt = 'congee';

const eggTarts=document.create("img");
eggTarts.src="./photos/egg-tarts.jpg"
eggTarts.alt = 'egg tarts';

const friedRice=document.create("img");
friedRice.src="./photos/fried-rice.jpg"
friedRice.alt = 'fried rice';

const harGow=document.create("img");
harGow.src="./photos/har-gow.jpg"
harGow.alt = 'har gow';

const noodles=document.create("img");
noodles.src="./photos/noodles.jpg"
noodles.alt = 'noodles';

const porkBelly=document.create("img");
porkBelly.src="./photos/pork-belly.jpg"
porkBelly.alt = 'pork belly';

const stirFryVeggies=document.create("img");
stirFryVeggies.src="./photos/stir-fry-veggies.jpg"
stirFryVeggies.alt = 'stir fry veggies';

const xiaoLongBao=document.create("img");
xiaoLongBao.src="./photos/xiao-long-bao.jpg"
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

const content=document.querySelector("#content");
content.appendChild(photoGrid);
content.appendChild(middle);