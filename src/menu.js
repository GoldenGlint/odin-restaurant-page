import xiaoLongBaoImg from "./photos/xiao-long-bao.jpg";
import harGowImg from "./photos/har-gow.jpg";
import eggTartsImg from "./photos/egg-tarts.jpg";
import porkBellyImg from "./photos/pork-belly.jpg";
import stirFryVeggiesImg from "./photos/stir-fry-veggies.jpg";
import friedRiceImg from "./photos/fried-rice.jpg";
import noodlesImg from "./photos/noodles.jpg";
import congeeImg from "./photos/congee.jpg";
import bubbleTeaImg from "./photos/bubble-tea.jpg";

export const menuPage = () => {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.firstChild.remove();
  }
  content.style.display = "block";
  content.style.overflow = "visible";
  content.style.height = "auto";

  const menuGrid = document.createElement("div");
  menuGrid.id = "menu-grid";

  // dim sum section
  const dimSumSection = document.createElement("div");
  dimSumSection.classList.add("menu-section");

  const dimSumTitle = document.createElement("h2");
  dimSumTitle.classList.add("section-title");
  dimSumTitle.textContent = "Dim sum";

  const dimSumGrid = document.createElement("div");
  dimSumGrid.classList.add("card-grid");

  const xiaoLongBaoCard = document.createElement("div");
  xiaoLongBaoCard.classList.add("menu-card");
  const xiaoLongBaoImg2 = document.createElement("img");
  xiaoLongBaoImg2.classList.add("card-img");
  xiaoLongBaoImg2.src = xiaoLongBaoImg;
  xiaoLongBaoImg2.alt = "xiao long bao";
  const xiaoLongBaoBody = document.createElement("div");
  xiaoLongBaoBody.classList.add("card-body");
  const xiaoLongBaoBadge = document.createElement("span");
  xiaoLongBaoBadge.classList.add("card-badge");
  xiaoLongBaoBadge.textContent = "Chef's pick";
  const xiaoLongBaoTop = document.createElement("div");
  xiaoLongBaoTop.classList.add("card-top");
  const xiaoLongBaoName = document.createElement("span");
  xiaoLongBaoName.classList.add("card-name");
  xiaoLongBaoName.textContent = "Xiao long bao";
  const xiaoLongBaoPrice = document.createElement("span");
  xiaoLongBaoPrice.classList.add("card-price");
  xiaoLongBaoPrice.textContent = "$12";
  const xiaoLongBaoDesc = document.createElement("p");
  xiaoLongBaoDesc.classList.add("card-desc");
  xiaoLongBaoDesc.textContent = "Soup dumplings filled with pork and rich broth. Fold, dip, sip.";
  xiaoLongBaoTop.appendChild(xiaoLongBaoName);
  xiaoLongBaoTop.appendChild(xiaoLongBaoPrice);
  xiaoLongBaoBody.appendChild(xiaoLongBaoBadge);
  xiaoLongBaoBody.appendChild(xiaoLongBaoTop);
  xiaoLongBaoBody.appendChild(xiaoLongBaoDesc);
  xiaoLongBaoCard.appendChild(xiaoLongBaoImg2);
  xiaoLongBaoCard.appendChild(xiaoLongBaoBody);

  const harGowCard = document.createElement("div");
  harGowCard.classList.add("menu-card");
  const harGowImage = document.createElement("img");
  harGowImage.classList.add("card-img");
  harGowImage.src = harGowImg;
  harGowImage.alt = "har gow";
  const harGowBody = document.createElement("div");
  harGowBody.classList.add("card-body");
  const harGowTop = document.createElement("div");
  harGowTop.classList.add("card-top");
  const harGowName = document.createElement("span");
  harGowName.classList.add("card-name");
  harGowName.textContent = "Har gow";
  const harGowPrice = document.createElement("span");
  harGowPrice.classList.add("card-price");
  harGowPrice.textContent = "$10";
  const harGowDesc = document.createElement("p");
  harGowDesc.classList.add("card-desc");
  harGowDesc.textContent = "Delicate steamed shrimp dumplings with a thin, chewy wrapper.";
  harGowTop.appendChild(harGowName);
  harGowTop.appendChild(harGowPrice);
  harGowBody.appendChild(harGowTop);
  harGowBody.appendChild(harGowDesc);
  harGowCard.appendChild(harGowImage);
  harGowCard.appendChild(harGowBody);

  const eggTartsCard = document.createElement("div");
  eggTartsCard.classList.add("menu-card");
  const eggTartsImage = document.createElement("img");
  eggTartsImage.classList.add("card-img");
  eggTartsImage.src = eggTartsImg;
  eggTartsImage.alt = "egg tarts";
  const eggTartsBody = document.createElement("div");
  eggTartsBody.classList.add("card-body");
  const eggTartsTop = document.createElement("div");
  eggTartsTop.classList.add("card-top");
  const eggTartsName = document.createElement("span");
  eggTartsName.classList.add("card-name");
  eggTartsName.textContent = "Egg tarts";
  const eggTartsPrice = document.createElement("span");
  eggTartsPrice.classList.add("card-price");
  eggTartsPrice.textContent = "$8";
  const eggTartsDesc = document.createElement("p");
  eggTartsDesc.classList.add("card-desc");
  eggTartsDesc.textContent = "Flaky pastry shell with a silky, lightly sweet egg custard.";
  eggTartsTop.appendChild(eggTartsName);
  eggTartsTop.appendChild(eggTartsPrice);
  eggTartsBody.appendChild(eggTartsTop);
  eggTartsBody.appendChild(eggTartsDesc);
  eggTartsCard.appendChild(eggTartsImage);
  eggTartsCard.appendChild(eggTartsBody);

  dimSumGrid.appendChild(xiaoLongBaoCard);
  dimSumGrid.appendChild(harGowCard);
  dimSumGrid.appendChild(eggTartsCard);
  dimSumSection.appendChild(dimSumTitle);
  dimSumSection.appendChild(dimSumGrid);

  // mains section
  const mainsSection = document.createElement("div");
  mainsSection.classList.add("menu-section");

  const mainsTitle = document.createElement("h2");
  mainsTitle.classList.add("section-title");
  mainsTitle.textContent = "Mains";

  const mainsGrid = document.createElement("div");
  mainsGrid.classList.add("card-grid");

  const porkBellyCard = document.createElement("div");
  porkBellyCard.classList.add("menu-card");
  const porkBellyImage = document.createElement("img");
  porkBellyImage.classList.add("card-img");
  porkBellyImage.src = porkBellyImg;
  porkBellyImage.alt = "pork belly";
  const porkBellyBody = document.createElement("div");
  porkBellyBody.classList.add("card-body");
  const porkBellyBadge = document.createElement("span");
  porkBellyBadge.classList.add("card-badge");
  porkBellyBadge.textContent = "Chef's pick";
  const porkBellyTop = document.createElement("div");
  porkBellyTop.classList.add("card-top");
  const porkBellyName = document.createElement("span");
  porkBellyName.classList.add("card-name");
  porkBellyName.textContent = "Pork belly";
  const porkBellyPrice = document.createElement("span");
  porkBellyPrice.classList.add("card-price");
  porkBellyPrice.textContent = "$22";
  const porkBellyDesc = document.createElement("p");
  porkBellyDesc.classList.add("card-desc");
  porkBellyDesc.textContent = "Slow-braised in soy, star anise, and Shaoxing wine until melt-in-your-mouth tender.";
  porkBellyTop.appendChild(porkBellyName);
  porkBellyTop.appendChild(porkBellyPrice);
  porkBellyBody.appendChild(porkBellyBadge);
  porkBellyBody.appendChild(porkBellyTop);
  porkBellyBody.appendChild(porkBellyDesc);
  porkBellyCard.appendChild(porkBellyImage);
  porkBellyCard.appendChild(porkBellyBody);

  const stirFryCard = document.createElement("div");
  stirFryCard.classList.add("menu-card");
  const stirFryImage = document.createElement("img");
  stirFryImage.classList.add("card-img");
  stirFryImage.src = stirFryVeggiesImg;
  stirFryImage.alt = "stir fry veggies";
  const stirFryBody = document.createElement("div");
  stirFryBody.classList.add("card-body");
  const stirFryTop = document.createElement("div");
  stirFryTop.classList.add("card-top");
  const stirFryName = document.createElement("span");
  stirFryName.classList.add("card-name");
  stirFryName.textContent = "Stir fry vegetables";
  const stirFryPrice = document.createElement("span");
  stirFryPrice.classList.add("card-price");
  stirFryPrice.textContent = "$14";
  const stirFryDesc = document.createElement("p");
  stirFryDesc.classList.add("card-desc");
  stirFryDesc.textContent = "Wok-tossed seasonal greens with garlic and oyster sauce.";
  stirFryTop.appendChild(stirFryName);
  stirFryTop.appendChild(stirFryPrice);
  stirFryBody.appendChild(stirFryTop);
  stirFryBody.appendChild(stirFryDesc);
  stirFryCard.appendChild(stirFryImage);
  stirFryCard.appendChild(stirFryBody);

  const friedRiceCard = document.createElement("div");
  friedRiceCard.classList.add("menu-card");
  const friedRiceImage = document.createElement("img");
  friedRiceImage.classList.add("card-img");
  friedRiceImage.src = friedRiceImg;
  friedRiceImage.alt = "fried rice";
  const friedRiceBody = document.createElement("div");
  friedRiceBody.classList.add("card-body");
  const friedRiceBadge = document.createElement("span");
  friedRiceBadge.classList.add("card-badge");
  friedRiceBadge.textContent = "Chef's pick";
  const friedRiceTop = document.createElement("div");
  friedRiceTop.classList.add("card-top");
  const friedRiceName = document.createElement("span");
  friedRiceName.classList.add("card-name");
  friedRiceName.textContent = "Fried rice";
  const friedRicePrice = document.createElement("span");
  friedRicePrice.classList.add("card-price");
  friedRicePrice.textContent = "$16";
  const friedRiceDesc = document.createElement("p");
  friedRiceDesc.classList.add("card-desc");
  friedRiceDesc.textContent = "Wok hei fried rice with egg, scallions, and your choice of protein.";
  friedRiceTop.appendChild(friedRiceName);
  friedRiceTop.appendChild(friedRicePrice);
  friedRiceBody.appendChild(friedRiceBadge);
  friedRiceBody.appendChild(friedRiceTop);
  friedRiceBody.appendChild(friedRiceDesc);
  friedRiceCard.appendChild(friedRiceImage);
  friedRiceCard.appendChild(friedRiceBody);

  mainsGrid.appendChild(porkBellyCard);
  mainsGrid.appendChild(stirFryCard);
  mainsGrid.appendChild(friedRiceCard);
  mainsSection.appendChild(mainsTitle);
  mainsSection.appendChild(mainsGrid);

  // noodles section
  const noodlesSection = document.createElement("div");
  noodlesSection.classList.add("menu-section");

  const noodlesTitle = document.createElement("h2");
  noodlesTitle.classList.add("section-title");
  noodlesTitle.textContent = "Noodles";

  const noodlesGrid = document.createElement("div");
  noodlesGrid.classList.add("card-grid");

  const noodlesCard = document.createElement("div");
  noodlesCard.classList.add("menu-card");
  const noodlesImage = document.createElement("img");
  noodlesImage.classList.add("card-img");
  noodlesImage.src = noodlesImg;
  noodlesImage.alt = "noodles";
  const noodlesBody = document.createElement("div");
  noodlesBody.classList.add("card-body");
  const noodlesBadge = document.createElement("span");
  noodlesBadge.classList.add("card-badge");
  noodlesBadge.textContent = "Chef's pick";
  const noodlesTop = document.createElement("div");
  noodlesTop.classList.add("card-top");
  const noodlesName = document.createElement("span");
  noodlesName.classList.add("card-name");
  noodlesName.textContent = "Hand-pulled noodles";
  const noodlesPrice = document.createElement("span");
  noodlesPrice.classList.add("card-price");
  noodlesPrice.textContent = "$18";
  const noodlesDesc = document.createElement("p");
  noodlesDesc.classList.add("card-desc");
  noodlesDesc.textContent = "Thick, chewy noodles in a rich beef bone broth.";
  noodlesTop.appendChild(noodlesName);
  noodlesTop.appendChild(noodlesPrice);
  noodlesBody.appendChild(noodlesBadge);
  noodlesBody.appendChild(noodlesTop);
  noodlesBody.appendChild(noodlesDesc);
  noodlesCard.appendChild(noodlesImage);
  noodlesCard.appendChild(noodlesBody);

  const congeeCard = document.createElement("div");
  congeeCard.classList.add("menu-card");
  const congeeImage = document.createElement("img");
  congeeImage.classList.add("card-img");
  congeeImage.src = congeeImg;
  congeeImage.alt = "congee";
  const congeeBody = document.createElement("div");
  congeeBody.classList.add("card-body");
  const congeeTop = document.createElement("div");
  congeeTop.classList.add("card-top");
  const congeeName = document.createElement("span");
  congeeName.classList.add("card-name");
  congeeName.textContent = "Congee";
  const congeePrice = document.createElement("span");
  congeePrice.classList.add("card-price");
  congeePrice.textContent = "$12";
  const congeeDesc = document.createElement("p");
  congeeDesc.classList.add("card-desc");
  congeeDesc.textContent = "Slow-cooked rice porridge with century egg, ginger, and crispy shallots.";
  congeeTop.appendChild(congeeName);
  congeeTop.appendChild(congeePrice);
  congeeBody.appendChild(congeeTop);
  congeeBody.appendChild(congeeDesc);
  congeeCard.appendChild(congeeImage);
  congeeCard.appendChild(congeeBody);

  noodlesGrid.appendChild(noodlesCard);
  noodlesGrid.appendChild(congeeCard);
  noodlesSection.appendChild(noodlesTitle);
  noodlesSection.appendChild(noodlesGrid);

  // drinks section
  const drinksSection = document.createElement("div");
  drinksSection.classList.add("menu-section");

  const drinksTitle = document.createElement("h2");
  drinksTitle.classList.add("section-title");
  drinksTitle.textContent = "Drinks";

  const drinksGrid = document.createElement("div");
  drinksGrid.classList.add("card-grid");

  const bubbleTeaCard = document.createElement("div");
  bubbleTeaCard.classList.add("menu-card");
  const bubbleTeaImage = document.createElement("img");
  bubbleTeaImage.classList.add("card-img");
  bubbleTeaImage.src = bubbleTeaImg;
  bubbleTeaImage.alt = "bubble tea";
  const bubbleTeaBody = document.createElement("div");
  bubbleTeaBody.classList.add("card-body");
  const bubbleTeaBadge = document.createElement("span");
  bubbleTeaBadge.classList.add("card-badge");
  bubbleTeaBadge.textContent = "Chef's pick";
  const bubbleTeaTop = document.createElement("div");
  bubbleTeaTop.classList.add("card-top");
  const bubbleTeaName = document.createElement("span");
  bubbleTeaName.classList.add("card-name");
  bubbleTeaName.textContent = "Bubble tea";
  const bubbleTeaPrice = document.createElement("span");
  bubbleTeaPrice.classList.add("card-price");
  bubbleTeaPrice.textContent = "$7";
  const bubbleTeaDesc = document.createElement("p");
  bubbleTeaDesc.classList.add("card-desc");
  bubbleTeaDesc.textContent = "Classic milk tea with tapioca pearls. Ask about seasonal flavours.";
  bubbleTeaTop.appendChild(bubbleTeaName);
  bubbleTeaTop.appendChild(bubbleTeaPrice);
  bubbleTeaBody.appendChild(bubbleTeaBadge);
  bubbleTeaBody.appendChild(bubbleTeaTop);
  bubbleTeaBody.appendChild(bubbleTeaDesc);
  bubbleTeaCard.appendChild(bubbleTeaImage);
  bubbleTeaCard.appendChild(bubbleTeaBody);

  const chrysanthemumCard = document.createElement("div");
  chrysanthemumCard.classList.add("menu-card");
  const chrysanthemumBody = document.createElement("div");
  chrysanthemumBody.classList.add("card-body");
  const chrysanthemumTop = document.createElement("div");
  chrysanthemumTop.classList.add("card-top");
  const chrysanthemumName = document.createElement("span");
  chrysanthemumName.classList.add("card-name");
  chrysanthemumName.textContent = "Chrysanthemum tea";
  const chrysanthemumPrice = document.createElement("span");
  chrysanthemumPrice.classList.add("card-price");
  chrysanthemumPrice.textContent = "$4";
  const chrysanthemumDesc = document.createElement("p");
  chrysanthemumDesc.classList.add("card-desc");
  chrysanthemumDesc.textContent = "Light, floral, and served hot.";
  chrysanthemumTop.appendChild(chrysanthemumName);
  chrysanthemumTop.appendChild(chrysanthemumPrice);
  chrysanthemumBody.appendChild(chrysanthemumTop);
  chrysanthemumBody.appendChild(chrysanthemumDesc);
  chrysanthemumCard.appendChild(chrysanthemumBody);

  drinksGrid.appendChild(bubbleTeaCard);
  drinksGrid.appendChild(chrysanthemumCard);
  drinksSection.appendChild(drinksTitle);
  drinksSection.appendChild(drinksGrid);

  menuGrid.appendChild(dimSumSection);
  menuGrid.appendChild(mainsSection);
  menuGrid.appendChild(noodlesSection);
  menuGrid.appendChild(drinksSection);

  content.appendChild(menuGrid);
};