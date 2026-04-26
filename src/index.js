import "./styles.css";
import {homePage} from "./home-page.js";
import {aboutUs} from "./about-us.js";
import { menuPage } from "./menu.js";
console.log("Hello World");
homePage();
//aboutUs();
//menuPage();

const homeButton = document.querySelector("#home-button");

homeButton.addEventListener("click", ()=>{
    homePage();
})

const aboutButton = document.querySelector("#about-button");

aboutButton.addEventListener("click", ()=>{
    aboutUs();
})

const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", ()=>{
    menuPage();
})