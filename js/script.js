import initMenuMobile from './modules/menuMobile.js';
import { initAnimacaoScroll } from './modules/scroll.js';
import {SlideNav} from "./modules/slide.js";

const slide = new SlideNav ('.slide', '.wrapper')

const hostel = document.querySelector("#hostel-services")

if (hostel){
    slide.init()
    slide.onResize(true)
    slide.addControl('.custom-control')
    slide.addTimeChange(10000)
}


initMenuMobile()
initAnimacaoScroll()