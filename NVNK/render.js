import {About} from "./about.js";
import { Contact } from "./contact.js";
import { Other } from "./other.js";
import { Project } from "./project.js";
import { Donate } from "./donate.js";

const pageAbout = new About();

const pageOther = new Other();

const pageContact = new Contact();

const pageProject = new Project();

const pageDonate = new Donate();

pageAbout.render();

document.getElementById('ab').addEventListener('click', () => {
    pageAbout.render();
    console.log(1);
});

document.getElementById('ot').addEventListener('click', () => {
    pageOther.render();
    console.log(2);
});

document.getElementById('ct').addEventListener('click', () => {
    pageContact.render();
    console.log(3);
});

document.getElementById('pj').addEventListener('click', () => {
    pageProject.render();
    console.log(4);
});

document.getElementById('dn').addEventListener('click', () => {
    pageDonate.render();
    console.log(5);
});
